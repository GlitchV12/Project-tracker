import re

with open('src/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Add import statement at the very top
js_content = "import './styles/main.css';\n\n" + js_content

with open('src/main.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Added CSS import to main.js")
