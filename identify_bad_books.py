import os
import json

def find_missing_books():
    main_js_path = '/Users/user/Downloads/Vrezh/main.js'
    public_dir = '/Users/user/Downloads/Vrezh/public'
    
    with open(main_js_path, 'r') as f:
        content = f.read()
    
    import re
    # Extract booksData array content
    # This regex is a bit fragile but should work for this specific structure
    books_match = re.search(r'const booksData = \[(.*?)\];', content, re.DOTALL)
    if not books_match:
        print("Could not find booksData in main.js")
        return

    books_content = books_match.group(1)
    # Find all image paths in the books section
    # Example: "image": "/assets/books/atomic-habits.jpg"
    book_entries = re.findall(r'\{[^}]*?"image":\s*"(/assets/books/.*?)"[^}]*?\}', books_content, re.DOTALL)
    
    missing_ids = []
    
    # We also need IDs to report which ones to delete
    # Let's extract { id: "...", image: "..." } pairs
    entries = re.findall(r'\{[^{}]*?"id":\s*"([^"]*?)"[^{}]*?"image":\s*"([^"]*?)"[^{}]*?\}', books_content, re.DOTALL)
    
    for book_id, img_path in entries:
        full_path = os.path.join(public_dir, img_path.lstrip('/'))
        if not os.path.exists(full_path) or os.path.getsize(full_path) < 100: # Files smaller than 100 bytes are likely broken/placeholders
            missing_ids.append(book_id)
            print(f"Missing/Broken: {book_id} -> {img_path}")

    print(f"\nTotal books to delete: {len(missing_ids)}")
    print(json.dumps(missing_ids))

if __name__ == "__main__":
    find_missing_books()
