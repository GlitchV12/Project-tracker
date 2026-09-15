import os
import re

directories = ['src/features', 'src/utils', 'src']

for directory in directories:
    for filename in os.listdir(directory):
        if filename.endswith(".js") and filename != "mockData.js":
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find all top-level functions
            functions = re.findall(r'^ *(?:export\s+)?function (\w+)\(', content, re.MULTILINE)
            functions = list(set(functions))
            
            # Find all top-level lets/consts
            vars = re.findall(r'^ *(?:export\s+)?(?:let|const) (\w+)\s*=', content, re.MULTILINE)
            vars = list(set(vars))

            exports = "\n\n// --- Auto-exposed for global access ---\n"
            for func in functions:
                exports += f"window.{func} = {func};\n"
            for v in vars:
                exports += f"window.{v} = {v};\n"

            # Add exports to the end of the file
            if functions or vars:
                with open(filepath, 'a', encoding='utf-8') as f:
                    f.write(exports)
            
            # To fix inter-module variable access for simple lets (like curRole), 
            # we should also replace reads of those variables with window.varName?
            # Actually, doing that via regex is dangerous.
            
print("Exposed functions and variables to window.")
