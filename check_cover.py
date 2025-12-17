
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

isbns = [
    "9781612680194", # 20th Anniversary
    "9781612680019",
    "9781612680002", # First used
    "9780446677457", # Second used
    "9781612681139",
    "0446677450"
]

print("Checking Open Library covers...")
for isbn in isbns:
    url = f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg?default=false"
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {isbn} -> {url}")
                print(f"   Size: {response.headers.get('Content-Length')} bytes")
            else:
                print(f"❌ MISSING: {isbn} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {isbn} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {isbn} - {e}")
