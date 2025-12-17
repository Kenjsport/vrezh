
import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://eldenring.fandom.com/wiki/Melina",
    "https://witcher.fandom.com/wiki/Geralt_of_Rivia",
    "https://godofwar.fandom.com/wiki/Kratos",
    "https://reddead.fandom.com/wiki/Arthur_Morgan"
]

print("Testing OG Image Extraction...")
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as response:
            html = response.read().decode('utf-8')
            # Look for <meta property="og:image" content="...">
            match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
            if match:
                img_url = match.group(1)
                print(f"✅ FOUND for {url.split('/')[-1]}: {img_url}")
            else:
                print(f"❌ NO OG IMAGE for {url.split('/')[-1]}")
    except Exception as e:
        print(f"❌ ERROR for {url.split('/')[-1]}: {e}")
