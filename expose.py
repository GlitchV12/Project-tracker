import re
import os

with open('src/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Make it easier by just attaching everything that starts with 'function ' to window.
# We will find all top-level functions and add 'window.funcName = funcName;' at the end.

# Regex to find function definitions (basic)
functions = re.findall(r'^      function (\w+)\(', js_content, re.MULTILINE)
functions += re.findall(r'^        function (\w+)\(', js_content, re.MULTILINE)
functions += re.findall(r'^    function (\w+)\(', js_content, re.MULTILINE)
functions += re.findall(r'^  function (\w+)\(', js_content, re.MULTILINE)
functions += re.findall(r'^function (\w+)\(', js_content, re.MULTILINE)

# Remove duplicates
functions = list(set(functions))

exports = "\n\n// Expose all functions to global scope for inline HTML handlers\n"
for func in functions:
    exports += f"window.{func} = {func};\n"

with open('src/main.js', 'a', encoding='utf-8') as f:
    f.write(exports)
    
print(f"Exposed {len(functions)} functions to window.")
