import os
import re
from collections import defaultdict

directories = ['src/features', 'src/utils']
files = {}

# 1. Collect all declarations
declarations = {} # name -> file path

for directory in directories:
    for filename in os.listdir(directory):
        if filename.endswith(".js"):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove the auto-exposed stuff at the bottom so we can start fresh
            content = re.sub(r'// --- Auto-exposed for global access ---.*', '', content, flags=re.DOTALL)
            files[filepath] = content
            
            # Find all top-level functions (careful with indentation)
            funcs = re.findall(r'^ *(?:export\s+)?function (\w+)\(', content, re.MULTILINE)
            # Find top level lets and consts
            vars = re.findall(r'^ *(?:export\s+)?(?:let|const) (\w+)\s*=', content, re.MULTILINE)
            
            for f in funcs:
                declarations[f] = filepath
            for v in vars:
                declarations[v] = filepath

# 2. For each file, find what it needs, and rewrite it with exports and imports
for filepath, content in files.items():
    imports_needed = defaultdict(set) # file path -> set of names
    
    # We will search for whole words matching any declaration
    # This is a naive regex search, but usually works well enough for JS identifiers
    for name, source_file in declarations.items():
        if source_file != filepath:
            # Check if name is used in this file
            if re.search(r'\b' + name + r'\b', content):
                imports_needed[source_file].add(name)
                
    # Generate import statements
    import_stmts = ""
    for source_file, names in imports_needed.items():
        # calculate relative path
        # since everything is in src/features or src/utils, depth is 1
        # we can just use '../' or './'
        if os.path.dirname(filepath) == os.path.dirname(source_file):
            rel_path = f"./{os.path.basename(source_file)}"
        else:
            rel_path = f"../{os.path.basename(os.path.dirname(source_file))}/{os.path.basename(source_file)}"
            
        import_stmts += f"import {{ {', '.join(names)} }} from '{rel_path}';\n"
        
    # Generate export statement
    exports = [name for name, source in declarations.items() if source == filepath]
    export_stmt = f"\nexport {{ {', '.join(exports)} }};\n" if exports else ""
    
    # Strip any existing export keywords from functions/vars to avoid syntax errors if we add the block at the bottom
    # Actually it's easier to just append the export block.
    # But wait! If we have `import { TIMELINE_DATA } from '../data/mockData.js'`, we shouldn't touch it.
    
    # Let's write it back
    new_content = import_stmts + "\n" + content + export_stmt
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Dependencies wired up!")
