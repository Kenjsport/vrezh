import os
import re

def verify_assets():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    public_dir = '/Users/user/Downloads/Vrezh/public'
    
    with open(main_js_path, 'r') as f:
        content = f.read()
    
    # Find all image paths starting with /assets/
    # This will now include books, films, games, and characters
    paths = re.findall(r'"(/assets/.*?)"', content)
    
    missing_files = []
    found_files = []
    
    for relative_path in set(paths):
        full_path = os.path.join(public_dir, relative_path.lstrip('/'))
        if os.path.exists(full_path):
            found_files.append(relative_path)
        else:
            missing_files.append(relative_path)
            
    print(f"Total unique paths found in main.js: {len(paths)}")
    print(f"Verified assets: {len(found_files)}")
    print(f"Missing assets: {len(missing_files)}")
    
    if missing_files:
        print("\nMissing Assets List:")
        # Group by category
        categories = {}
        for path in missing_files:
            cat = path.split('/')[2] if len(path.split('/')) > 2 else 'other'
            if cat not in categories: categories[cat] = []
            categories[cat].append(path)
            
        for cat, items in categories.items():
            print(f"\n[{cat.upper()}] - {len(items)} missing")
            for item in items[:10]: # Show first 10
                print(f"- {item}")
            if len(items) > 10:
                print(f"... and {len(items)-10} more")
    else:
        print("\nAll assets (including characters) verified successfully!")

if __name__ == "__main__":
    verify_assets()
