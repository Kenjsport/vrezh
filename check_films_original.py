
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

films = [
    {"title": "Interstellar", "url": "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MSOx2Ynm.jpg"},
    {"title": "Fight Club", "url": "https://image.tmdb.org/t/p/original/pB8BM7pdXLXb1HZr4AaygyFKt0G.jpg"},
    {"title": "Hereditary", "url": "https://image.tmdb.org/t/p/original/zF3Hl2Q2bS0P277JpX2o1w0Xg9P.jpg"},
    {"title": "The Shining", "url": "https://image.tmdb.org/t/p/original/nTjBLmsY2Yx8d2rA9bE8qP4gR8V.jpg"}
]

print("Checking 'original' size Film Posters...")
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
