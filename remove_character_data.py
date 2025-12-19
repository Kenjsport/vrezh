import re

def clear_characters():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    
    with open(main_js_path, 'r') as f:
        js_content = f.read()
    
    # Regex to find each "characters": [ ... ] block and replace with "characters": []
    # Using a cautious regex that matches within the gamesData objects
    pattern = re.compile(r'"characters":\s*\[.*?\]', re.DOTALL)
    
    new_content = pattern.sub('"characters": []', js_content)
    
    with open(main_js_path, 'w') as f:
        f.write(new_content)
    print("Successfully cleared all character data in main.js")

if __name__ == "__main__":
    clear_characters()
