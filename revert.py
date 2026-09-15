import os
import re

directories = ['src/utils', 'src/features']
merged_content = "import './styles/main.css';\nimport { TIMELINE_DATA, MODULES_DATA, ROLES } from './data/mockData.js';\nwindow.TIMELINE_DATA = TIMELINE_DATA;\nwindow.MODULES_DATA = MODULES_DATA;\nwindow.ROLES = ROLES;\n\n"

# The order we want to merge them back
files_to_merge = [
    'src/utils/helpers.js',
    'src/features/sidebar.js',
    'src/features/timeline.js',
    'src/features/projects.js',
    'src/features/modals.js',
    'src/features/review.js'
]

for filepath in files_to_merge:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Strip imports at the top
        content = re.sub(r'^import .*;\n', '', content, flags=re.MULTILINE)
        
        # Strip exports at the bottom
        content = re.sub(r'export \{.*?\};?\n?', '', content, flags=re.DOTALL)
        
        # Strip auto-exposed window. bindings we added earlier
        content = re.sub(r'// --- Auto-exposed for global access ---.*', '', content, flags=re.DOTALL)
        
        merged_content += content + "\n\n"
        
        # Delete the file
        os.remove(filepath)

# Let's restore INIT block, which was in split_main.py
# Actually, the INIT block was the DOMContentLoaded event handler.
# Where is it? It was probably lost or it was in main.js
# Let's see if main.js still has the init block.
if os.path.exists('src/main.js'):
    with open('src/main.js', 'r', encoding='utf-8') as f:
        main_content = f.read()
        init_match = re.search(r'/\* =+([^=]+)INIT=+ \*/(.*)', main_content, flags=re.DOTALL)
        if init_match:
            merged_content += init_match.group(0)

# Write back to main.js
with open('src/main.js', 'w', encoding='utf-8') as f:
    f.write(merged_content)

print("Reverted to a single main.js module!")
