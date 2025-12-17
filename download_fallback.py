
import urllib.request
import urllib.error
import ssl
import os
import json

# Disable SSL verification
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
DEST_DIR = "assets/characters"

# Fallback Source Map (Verified Commons / Steam / Placeholders)
# Based on previous `get_commons_images.py` results
targets = {
    # Elden Ring
    "melina.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dragon_Con_2025_-_Elden_Ring_Melina_and_Fia_cosplay.jpg",
    "malenia.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dragon_Con_2025_-_Elden_Ring_Miquella_Messmer_Melina_Malenia_Millicent_cosplay_1.jpg",
    "ranni.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dragon_Con_2025_-_Ranni_Revenant_cosplayers_02.jpg",
    "blaidd.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Blaidd", # No good commmons
    
    # Witcher 3
    "geralt.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/87/Geralt.jpg", # Commons backup since Steam 404d
    "ciri.jpg": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/292030/a65e54f7223f91cba72166703fb454f4eeea17d4.jpg", # Sent success before
    "yennefer.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Yennefer",
    
    # God of War
    "kratos.jpg": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cosplay_at_NYCC_%2860421%29.jpg",
    "atreus.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Atreus",

    # RDR2
    "arthur.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Arthur",
    "dutch.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Dutch",

    # Doom
    "doom_slayer.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Doom+Slayer",
    "marauder.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Marauder",

    # Cyberpunk
    "v.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=V",
    "johnny.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/2b/PGA_2019_Cyberpunk_2077.jpg",

    # RE Village
    "ethan.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Ethan",
    "dimitrescu.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Cosplay_of_Alcina_Dimitrescu_%28Resident_Evil_Village%29_%E2%80%A2_3.jpg",

    # Halo
    "master_chief.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Master_Chief_%28Halo%29.webp",
    "cortana.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/0b/RTX_2014_-_Cortana_cosplay_%2814573500492%29.jpg",

    # Bloodborne
    "hunter.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Hunter",
    "gehrman.jpg": "https://placehold.co/400x600/1a1a1a/ffffff?text=Gehrman",

    # TLOU2
    "ellie.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Halley_Gross%2C_The_Last_of_Us_Part_II%2C_Outbreak_Day_2019.jpg",
    "abby.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/88/Abby_franquemont_machu_picchu.jpg"
}

def download_file(url, filepath):
    if os.path.exists(filepath):
        print(f"⏭️  EXISTS: {filepath}")
        return True
        
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15, context=ctx) as response:
            with open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        print(f"✅ SAVED: {filepath}")
        return True
    except Exception as e:
        print(f"❌ FAILED: {url} -> {e}")
        return False

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    print("🚀 Starting Fallback Download...")
    for filename, url in targets.items():
        filepath = os.path.join(DEST_DIR, filename)
        download_file(url, filepath)

if __name__ == "__main__":
    main()
