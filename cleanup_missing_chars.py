import re

def cleanup_main_js():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    
    with open(main_js_path, 'r') as f:
        js_content = f.read()
    
    # We need to find the "characters": [ ... ] arrays and filter out items with placeholder images
    # The structure is:
    # "characters": [
    #     {
    #         "name": "...",
    #         "image": "https://placehold.co/..."
    #     },
    #     ...
    # ]
    
    # Regex to find each "characters": [ ... ] block
    pattern = re.compile(r'("characters":\s*\[)(.*?)(\])', re.DOTALL)
    
    def filter_chars(match):
        prefix = match.group(1)
        content = match.group(2)
        suffix = match.group(3)
        
        # Split content into individual character objects {}
        # This is a bit tricky with regex but since our format is consistent:
        # {
        #     "name": "...",
        #     "image": "..."
        # }
        char_objects = re.findall(r'\{\s*".*?"\s*:\s*".*?"\s*,\s*".*?"\s*:\s*".*?"\s*\}', content, re.DOTALL)
        
        filtered_objs = []
        for obj in char_objects:
            # Keep if image doesn't contain placehold.co
            if 'placehold.co' not in obj:
                filtered_objs.append(obj)
        
        if not filtered_objs:
            return prefix + suffix
            
        # Join with properly formatted commas and newlines
        return prefix + '\n      ' + ',\n      '.join(filtered_objs) + '\n    ' + suffix

    new_content = pattern.sub(filter_chars, js_content)
    
    with open(main_js_path, 'w') as f:
        f.write(new_content)
    print("Successfully cleaned up missing character assets in main.js")

if __name__ == "__main__":
    cleanup_main_js()
