import os
import json
import re

def find_missing_films():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    public_dir = '/Users/user/Downloads/Vrezh/public'
    
    with open(main_js_path, 'r') as f:
        content = f.read()
    
    # Extract filmsData array content
    films_match = re.search(r'const filmsData = \[(.*?)\];', content, re.DOTALL)
    if not films_match:
        print("Could not find filmsData in main.js")
        return

    films_content = films_match.group(1)
    
    # Extract { id: "...", image: "..." } pairs
    entries = re.findall(r'\{[^{}]*?"id":\s*"([^"]*?)"[^{}]*?"image":\s*"([^"]*?)"[^{}]*?\}', films_content, re.DOTALL)
    
    missing_ids = []
    
    for film_id, img_path in entries:
        full_path = os.path.join(public_dir, img_path.lstrip('/'))
        if not os.path.exists(full_path) or os.path.getsize(full_path) < 100:
            missing_ids.append(film_id)
            print(f"Missing/Broken: {film_id} -> {img_path}")

    print(f"\nTotal films to delete: {len(missing_ids)}")
    print(json.dumps(missing_ids))

if __name__ == "__main__":
    find_missing_films()
