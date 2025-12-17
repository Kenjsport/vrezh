
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

games = [
    {"title": "Elden Ring", "url": "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_Art.jpg"},
    {"title": "The Witcher 3", "url": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"},
    {"title": "God of War", "url": "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"},
    {"title": "Red Dead Redemption 2", "url": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"},
    {"title": "Doom Eternal", "url": "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png"},
    {"title": "Cyberpunk 2077", "url": "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"},
    {"title": "Resident Evil Village", "url": "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village_box_art.jpg"},
    {"title": "Halo Infinite", "url": "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png"},
    {"title": "Bloodborne", "url": "https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg"},
    {"title": "The Last of Us Part II", "url": "https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png"}
]

print("Checking Game Covers based on main.js...")
for game in games:
    try:
        req = urllib.request.Request(game['url'], method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {game['title']}")
            else:
                print(f"❌ MISSING: {game['title']} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {game['title']} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {game['title']} - {e}")
