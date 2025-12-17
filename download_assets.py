
import urllib.request
import urllib.error
import ssl
import os
import re
import json
import time

# Disable SSL verification for local dev script
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
DEST_DIR = "assets/characters"

# Target configuration: (filename, source_type, source_url)
# source_type: 'direct' or 'fandom_og'
targets = [
    # ELDEN RING (Fandom OG is best)
    ("melina.jpg", "fandom_og", "https://eldenring.fandom.com/wiki/Melina"),
    ("malenia.jpg", "fandom_og", "https://eldenring.fandom.com/wiki/Malenia"),
    ("ranni.jpg", "fandom_og", "https://eldenring.fandom.com/wiki/Ranni_the_Witch"),
    ("blaidd.jpg", "fandom_og", "https://eldenring.fandom.com/wiki/Blaidd"),
    
    # WITCHER 3 (Steam CDN is best)
    ("geralt.jpg", "direct", "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/292030/4b6e51241108422cfb9b8b7ed66c30f40d02462e.jpg"),
    ("ciri.jpg", "direct", "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/292030/a65e54f7223f91cba72166703fb454f4eeea17d4.jpg"),
    ("yennefer.jpg", "fandom_og", "https://witcher.fandom.com/wiki/Yennefer_of_Vengerberg"), # Fallback to Fandom if Steam missing

    # GOD OF WAR (Fandom OG)
    ("kratos.jpg", "fandom_og", "https://godofwar.fandom.com/wiki/Kratos"),
    ("atreus.jpg", "fandom_og", "https://godofwar.fandom.com/wiki/Atreus"),

    # RDR2 (Fandom OG)
    ("arthur.jpg", "fandom_og", "https://reddead.fandom.com/wiki/Arthur_Morgan"),
    ("dutch.jpg", "fandom_og", "https://reddead.fandom.com/wiki/Dutch_van_der_Linde"),

    # DOOM (Fandom OG)
    ("doom_slayer.jpg", "fandom_og", "https://doom.fandom.com/wiki/Doom_Slayer"),
    ("marauder.jpg", "fandom_og", "https://doom.fandom.com/wiki/Marauder_(Doom_Eternal)"),

    # CYBERPUNK (Fandom OG)
    ("v.jpg", "fandom_og", "https://cyberpunk.fandom.com/wiki/V_(character)"),
    ("johnny.jpg", "fandom_og", "https://cyberpunk.fandom.com/wiki/Johnny_Silverhand"),

    # RESIDENT EVIL (Fandom OG)
    ("ethan.jpg", "fandom_og", "https://residentevil.fandom.com/wiki/Ethan_Winters"),
    ("dimitrescu.jpg", "fandom_og", "https://residentevil.fandom.com/wiki/Alcina_Dimitrescu"),

    # HALO (Fandom OG)
    ("master_chief.jpg", "fandom_og", "https://halo.fandom.com/wiki/John-117"),
    ("cortana.jpg", "fandom_og", "https://halo.fandom.com/wiki/Cortana"),

    # BLOODBORNE (Fandom OG)
    ("hunter.jpg", "fandom_og", "https://bloodborne.fandom.com/wiki/The_Hunter"),
    ("gehrman.jpg", "fandom_og", "https://bloodborne.fandom.com/wiki/Gehrman,_the_First_Hunter"),

    # THE LAST OF US 2 (Fandom OG)
    ("ellie.jpg", "fandom_og", "https://thelastofus.fandom.com/wiki/Ellie"),
    ("abby.jpg", "fandom_og", "https://thelastofus.fandom.com/wiki/Abby"),
]

def download_file(url, filepath):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15, context=ctx) as response:
            with open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        print(f"✅ SAVED: {filepath}")
        return True
    except Exception as e:
        print(f"❌ DOWNLOAD FAILED: {url} -> {e}")
        return False

def get_og_image(page_url):
    try:
        req = urllib.request.Request(page_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
            if match:
                return match.group(1)
            else:
                # Try finding a wikia static image inside content if OG missing
                match_content = re.search(r'(https://static\.wikia\.nocookie\.net/[^"]+/revision/latest[^"]*)', html)
                if match_content:
                   return match_content.group(1) 
    except Exception as e:
        print(f"⚠️ OG FETCH ERROR: {page_url} -> {e}")
    return None

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    print("🚀 Starting Asset Download...")
    
    for filename, mode, source in targets:
        filepath = os.path.join(DEST_DIR, filename)
        
        # Determine actual image URL
        image_url = None
        if mode == 'direct':
            image_url = source
        elif mode == 'fandom_og':
            print(f"🔍 Extracting OG for {filename}...")
            image_url = get_og_image(source)
            if not image_url:
                print(f"   ⚠️ Could not find OG tag for {source}")
        
        # Download
        if image_url:
            # Some OG urls have query params we might want to keep or strip. 
            # Usually keep them as they might be needed for access/sizing.
            success = download_file(image_url, filepath)
            if not success:
                # Create placeholder if failed
                pass 
        else:
            print(f"❌ SKIPPED: {filename} (No URL found)")

        time.sleep(1) # Be nice to servers

if __name__ == "__main__":
    main()
