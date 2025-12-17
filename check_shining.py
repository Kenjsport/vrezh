
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/The_Shining_1980_film_poster.jpg/220px-The_Shining_1980_film_poster.jpg",
    "https://static.wikia.nocookie.net/stephenking/images/e/e1/The_Shining_poster.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
]

print("Checking Shining Candidates...")
for url in urls:
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {url}")
            else:
                print(f"❌ MISSING: {url} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {url} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {url} - {e}")
