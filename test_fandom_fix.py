
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base = "https://static.wikia.nocookie.net/eldenring/images/d/d4/Melina-portrait.png"
variations = [
    base,
    base + "/revision/latest",
    "https://static.wikia.nocookie.net/eldenring/images/d/d4/Melina-portrait.png/revision/latest",
    "https://static.wikia.nocookie.net/eldenring/images/thumb/d/d4/Melina-portrait.png/1000px-Melina-portrait.png"
]

print("Testing Fandom Variations...")
for url in variations:
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            print(f"✅ FOUND: {url} ({response.status})")
    except Exception as e:
        print(f"❌ FAILED: {url} ({e})")
