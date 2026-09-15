import re

with open('src/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Strip out old window. exports to prevent duplicates
js_content = re.sub(r'\n\n// Expose all functions to global scope for inline HTML handlers\n(window\.\w+ = \w+;\n)*', '', js_content)

functions = re.findall(r'^\s*function (\w+)\(', js_content, re.MULTILINE)
functions = list(set(functions))

exports = "\n\n// Expose all functions to global scope for inline HTML handlers\n"
for func in functions:
    exports += f"window.{func} = {func};\n"

with open('src/main.js', 'w', encoding='utf-8') as f:
    # Check if INIT block is at the bottom, we should insert exports BEFORE the INIT block
    # Actually, it's fine to insert them before INIT
    init_match = re.search(r'/\* =+([^=]+)INIT=+ \*/(.*)', js_content, flags=re.DOTALL)
    if init_match:
        js_content = js_content.replace(init_match.group(0), exports + '\n' + init_match.group(0))
    else:
        js_content += exports
    
    f.write(js_content)
    
print(f"Exposed {len(functions)} functions to window.")
