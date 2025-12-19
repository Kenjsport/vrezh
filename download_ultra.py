
import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {'User-Agent': 'Mozilla/5.0'}

def download(url, path):
    if os.path.exists(path): return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
            with open(path, 'wb') as f: f.write(r.read())
        print(f"✅ {path}")
        return True
    except Exception as e:
        print(f"❌ {path} ({e})")
        return False

# FINAL REDIRECTS FOR FILMS
FILM_FIXES = [
    ("interstellar.jpg", "https://www.impawards.com/2014/posters/interstellar_ver3.jpg"),
    ("seven.jpg", "https://www.impawards.com/1995/posters/seven_ver2.jpg"),
    ("fight-club.jpg", "https://www.impawards.com/1999/posters/fight_club_ver3.jpg"),
    ("silence-lambs.jpg", "https://www.impawards.com/1991/posters/silence_of_the_lambs_ver1.jpg"),
    ("joker.jpg", "https://www.impawards.com/2019/posters/joker_ver6.jpg"),
    ("shutter-island.jpg", "https://www.impawards.com/2010/posters/shutter_island_ver2.jpg"),
    ("hereditary.jpg", "https://www.impawards.com/2018/posters/hereditary_ver3.jpg"),
    ("shining.jpg", "https://www.impawards.com/1980/posters/shining_ver2.jpg"),
    ("gone-girl.jpg", "https://www.impawards.com/2014/posters/gone_girl_ver2.jpg"),
]

def main():
    # 1. First run the existing robust logic
    from download_final import BOOKS, GAMES, main as run_dl
    run_dl()
    
    # 2. Apply the specific film fixes
    print("\n🎬 Applying Film Fixes...")
    for f, url in FILM_FIXES:
        download(url, f"public/assets/films/{f}")
    
    # 3. Handle any remaining games that might be empty or missing
    # (The previous script should have handled most)

if __name__ == "__main__":
    main()
