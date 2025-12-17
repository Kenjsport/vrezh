
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

candidates = [
    {"name": "Elden Ring (Fandom Clean)", "url": "https://static.wikia.nocookie.net/eldenring/images/3/30/ELDEN_RING_Cover_Art.jpg"},
    {"name": "Elden Ring (Wiki RU)", "url": "https://upload.wikimedia.org/wikipedia/ru/a/a2/Elden_Ring_-_cover.jpg"},
    {"name": "RE Village (Fandom Clean)", "url": "https://static.wikia.nocookie.net/residentevil/images/2/23/Resident_Evil_Village_Standard_Edition_Key_Art.png"},
    {"name": "RE Village (Wiki UK)", "url": "https://upload.wikimedia.org/wikipedia/uk/0/0e/Resident_Evil_Village_boxart.jpg"}
]

print("Checking Game Candidates...")
for cand in candidates:
    try:
        req = urllib.request.Request(cand['url'], method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {cand['name']}")
            else:
                print(f"❌ MISSING: {cand['name']} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {cand['name']} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {cand['name']} - {e}")
