import re
import os

with open('src/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pre-process: the file starts with imports and global exports. We keep them for now, but we will move the global window.XXX = XXX to main.js

# We will split by /* ==== ... ==== */
# This regex finds all sections and their content
sections = re.split(r'/\* =+([^=]+)=+ \*/', content)

# sections[0] is the top of the file before the first comment (imports, globals, ensureNoteIds)
preamble = sections[0]

# Now we parse the sections. sections[1] is the name of the first section, sections[2] is its content, etc.
groups = {
    'sidebar': ['NAV', 'ROLE SWITCHER'],
    'timeline': ['TIMELINE (GOOGLE CALENDAR STYLE + COLLAPSIBLE MODULES)', 'TIMELINE ITEM / EVENT DETAILS MODAL'],
    'projects': ['MODULES & WORK ITEMS DATA', 'TREE & MODULE WORK NAVIGATION', 'MODULE OVERVIEW & LESSON DETAIL'],
    'modals': ['MODAL', 'WORK ITEMS & NOTES MODALS JS HANDLERS'],
    'review': ['REVIEW VERSIONS DYNAMIC DATA & HANDLERS', 'REVIEW DECISIONS & CHANGELOG', 'REVIEW HISTORY MODAL', 'REVIEW SCREEN: ATTACHED FILES TOGGLE', 'BATCH SYSTEM'],
    'helpers': ['FLOATING NOTIFICATION'],
    'init': ['INIT']
}

file_contents = {k: "" for k in groups.keys()}
file_contents['helpers'] += "import { TIMELINE_DATA, MODULES_DATA, ROLES } from '../data/mockData.js';\n"
for k in ['sidebar', 'timeline', 'projects', 'modals', 'review']:
    file_contents[k] += "import { TIMELINE_DATA, MODULES_DATA, ROLES } from '../data/mockData.js';\n"

for i in range(1, len(sections), 2):
    name = sections[i].strip()
    text = sections[i+1]
    
    # Find which group this belongs to
    assigned_group = None
    for group, names in groups.items():
        if name in names:
            assigned_group = group
            break
            
    if assigned_group:
        file_contents[assigned_group] += f"\n/* =============================================\n   {name}\n   ============================================= */\n" + text
    else:
        print(f"Unknown section: {name}")

# Now we need to handle the functions and export them.
# The easiest way to deal with vanilla JS and multiple files that call each other globally
# is to let them define functions on the window object directly.
# Let's convert all `function foo()` into `window.foo = function foo()` in the generated files,
# or simply let `expose.py` run on the whole directory later.
# For now, we just dump the files.

os.makedirs('src/utils', exist_ok=True)
os.makedirs('src/features', exist_ok=True)

with open('src/utils/helpers.js', 'w', encoding='utf-8') as f:
    f.write(file_contents['helpers'])

for feat in ['sidebar', 'timeline', 'projects', 'modals', 'review']:
    with open(f'src/features/{feat}.js', 'w', encoding='utf-8') as f:
        f.write(file_contents[feat])

# Rewrite main.js
main_js = f"""import './styles/main.css';
import {{ TIMELINE_DATA, MODULES_DATA, ROLES }} from './data/mockData.js';
window.TIMELINE_DATA = TIMELINE_DATA;
window.MODULES_DATA = MODULES_DATA;
window.ROLES = ROLES;

import './utils/helpers.js';
import './features/sidebar.js';
import './features/timeline.js';
import './features/projects.js';
import './features/modals.js';
import './features/review.js';

{preamble.replace("import './styles/main.css';", "").replace("import { TIMELINE_DATA, MODULES_DATA, ROLES } from './data/mockData.js';", "")}

{file_contents['init']}
"""

with open('src/main.js', 'w', encoding='utf-8') as f:
    f.write(main_js)

print("Split complete!")
