import json
import re

def update_main_js():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    mapping_path = '/Users/user/Downloads/Vrezh/character_descriptions_mapping.json'
    
    with open(mapping_path, 'r') as f:
        mapping = json.load(f)
        
    with open(main_js_path, 'r') as f:
        js_content = f.read()
        
    for game_id, characters in mapping.items():
        pattern = re.compile(rf'("id":\s*"{game_id}"[^{{}}]*?"characters":\s*)\[\]', re.DOTALL)
        
        replacement_chars = json.dumps(characters, indent=4)
        indented_chars = replacement_chars.replace('\n', '\n    ')
        
        # Use a lambda for the replacement to avoid backslash escaping issues in re.sub
        js_content = pattern.sub(lambda m: m.group(1) + indented_chars, js_content)
        
    with open(main_js_path, 'w') as f:
        f.write(js_content)
    print("Successfully updated main.js with character data.")

if __name__ == "__main__":
    update_main_js()
