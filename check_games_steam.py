
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

candidates = [
    {"name": "Elden Ring (Steam)", "url": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg"},
    {"name": "RE Village (Steam)", "url": "https://cdn.akamai.steamstatic.com/steam/apps/1196590/library_600x900.jpg"},
    {"name": "RE Village (Steam Alt)", "url": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/library_600x900.jpg"}
]

print("Checking Steam Candidates...")
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
