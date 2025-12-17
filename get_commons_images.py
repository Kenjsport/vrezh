
import json
import sys
import time
# Import the function from the existing script
try:
    from fetch_wikimedia_image import search_wikimedia
except ImportError:
    print("Error: Could not import fetch_wikimedia_image")
    sys.exit(1)

characters = [
    # Elden Ring
    {"name": "Melina", "query": "Melina Elden Ring"},
    {"name": "Malenia", "query": "Malenia Elden Ring"},
    {"name": "Ranni", "query": "Ranni Elden Ring"},
    {"name": "Blaidd", "query": "Blaidd Elden Ring"},
    # Witcher 3
    {"name": "Geralt", "query": "Geralt of Rivia"},
    {"name": "Ciri", "query": "Ciri Witcher 3"},
    {"name": "Yennefer", "query": "Yennefer of Vengerberg"},
    # God of War
    {"name": "Kratos", "query": "Kratos God of War"},
    {"name": "Atreus", "query": "Atreus God of War"},
    # RDR2
    {"name": "Arthur Morgan", "query": "Arthur Morgan Red Dead"},
    {"name": "Dutch", "query": "Dutch van der Linde"},
    # Doom
    {"name": "Doom Slayer", "query": "Doom Slayer cosplay"}, # Adding cosplay to ensure hits, or maybe "Doom Slayer art"
    {"name": "Marauder", "query": "Doom Eternal Marauder"},
    # Cyberpunk
    {"name": "V", "query": "Cyberpunk 2077 V"},
    {"name": "Johnny Silverhand", "query": "Johnny Silverhand"},
    # RE Village
    {"name": "Ethan Winters", "query": "Ethan Winters Resident Evil"},
    {"name": "Lady Dimitrescu", "query": "Lady Dimitrescu"},
    # Halo
    {"name": "Master Chief", "query": "Master Chief Halo"},
    {"name": "Cortana", "query": "Cortana Halo"},
    # Bloodborne
    {"name": "The Hunter", "query": "Bloodborne Hunter"},
    {"name": "Gehrman", "query": "Gehrman Bloodborne"},
    # TLOU2
    {"name": "Ellie", "query": "Ellie The Last of Us Part II"},
    {"name": "Abby", "query": "Abby The Last of Us Part II"}
]

results = {}

print("Fetching images for 23 characters...")
for char in characters:
    print(f"Searching for {char['name']}...")
    try:
        images = search_wikimedia(char['query'], count=1)
        if images:
            results[char['name']] = images[0]['direct_url']
            print(f"✅ FOUND: {images[0]['direct_url']}")
        else:
            print(f"❌ NOT FOUND")
            results[char['name']] = None
        time.sleep(0.5) # Be nice to API
    except Exception as e:
        print(f"❌ ERROR: {e}")
        results[char['name']] = None

print("\nRESULTS JSON:")
print(json.dumps(results, indent=2))
