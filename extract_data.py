import re

with open('src/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# We look for "const TIMELINE_DATA =", "const MODULES_DATA =", "const ROLES =" etc.
data_vars = ['TIMELINE_DATA', 'MODULES_DATA', 'PROJECTS_DATA', 'ROLES', 'USERS', 'currentUser', 'curRole']

extracted_code = ""

for var in data_vars:
    # This regex is a bit complex. We'll find the start of the const/let var = { or [
    # and then use a stack to find the end.
    match = re.search(r'(const|let)\s+' + var + r'\s*=\s*([{\[])', js_content)
    if match:
        start_idx = match.start(2)
        end_idx = -1
        stack = []
        for i in range(start_idx, len(js_content)):
            if js_content[i] in ['{', '[']:
                stack.append(js_content[i])
            elif js_content[i] in ['}', ']']:
                if stack:
                    stack.pop()
                if not stack:
                    end_idx = i + 1
                    # check for trailing semicolon
                    if i + 1 < len(js_content) and js_content[i+1] == ';':
                        end_idx = i + 2
                    break
        if end_idx != -1:
            full_match = js_content[match.start():end_idx]
            extracted_code += f"export {full_match}\n\n"
            js_content = js_content.replace(full_match, "")

if extracted_code:
    with open('src/data/mockData.js', 'w', encoding='utf-8') as f:
        f.write(extracted_code)
    
    # Prepend imports to main.js
    import_stmt = "import { " + ", ".join(data_vars) + " } from './data/mockData.js';\n"
    # also attach them to window so they are globally accessible if needed
    attach_stmt = "\n".join([f"window.{v} = {v};" for v in data_vars]) + "\n\n"
    
    # insert after the CSS import
    css_import = "import './styles/main.css';\n\n"
    if js_content.startswith(css_import):
        js_content = js_content.replace(css_import, css_import + import_stmt + attach_stmt)
    else:
        js_content = import_stmt + attach_stmt + js_content

    with open('src/main.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("Extracted mock data.")
else:
    print("Failed to extract.")
