
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

films = [
    {"title": "Interstellar", "url": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"},
    {"title": "Fight Club", "url": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"},
    {"title": "Hereditary", "url": "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"},
    {"title": "The Shining", "url": "https://upload.wikimedia.org/wikipedia/en/1/18/The_Shining_1980_film_poster.jpg"}
]

print("Checking Original Wikipedia URLs...")
for film in films:
    try:
        req = urllib.request.Request(film['url'], method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {film['title']}")
            else:
                print(f"❌ MISSING: {film['title']} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {film['title']} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {film['title']} - {e}")
