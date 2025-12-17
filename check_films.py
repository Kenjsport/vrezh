
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

films = [
    {"title": "Inception", "url": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"},
    {"title": "Interstellar", "url": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MSOx2Ynm.jpg"},
    {"title": "The Dark Knight", "url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
    {"title": "The Matrix", "url": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"},
    {"title": "The Godfather", "url": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"},
    {"title": "Parasite", "url": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"},
    {"title": "Pulp Fiction", "url": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"},
    {"title": "Avengers: Endgame", "url": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"},
    {"title": "Fight Club", "url": "https://image.tmdb.org/t/p/w500/pB8BM7pdXLXb1HZr4AaygyFKt0G.jpg"},
    {"title": "Gladiator", "url": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"},
    {"title": "Get Out", "url": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"},
    {"title": "Hereditary", "url": "https://image.tmdb.org/t/p/w500/zF3Hl2Q2bS0P277JpX2o1w0Xg9P.jpg"},
    {"title": "The Shining", "url": "https://image.tmdb.org/t/p/w500/nTjBLmsY2Yx8d2rA9bE8qP4gR8V.jpg"},
    {"title": "Fellowship of the Ring", "url": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"},
    {"title": "Goodfellas", "url": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"}
]

print("Checking Film Posters based on main.js...")
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
