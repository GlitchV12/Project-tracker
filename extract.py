import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    styles = style_match.group(1)
    os.makedirs('src/styles', exist_ok=True)
    with open('src/styles/main.css', 'w', encoding='utf-8') as f:
        f.write(styles)
    # Remove styles from index.html and link main.css
    new_content = content.replace(style_match.group(0), '<link rel="stylesheet" href="/src/styles/main.css">')
    
    # Extract scripts
    script_match = re.search(r'<script>(.*?)</script>', new_content, re.DOTALL)
    if script_match:
        scripts = script_match.group(1)
        os.makedirs('src/data', exist_ok=True)
        os.makedirs('src/features', exist_ok=True)
        with open('src/main.js', 'w', encoding='utf-8') as f:
            f.write(scripts)
        new_content = new_content.replace(script_match.group(0), '<script type="module" src="/src/main.js"></script>')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Extraction complete.")
else:
    print("Style tag not found.")
