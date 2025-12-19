import os
import urllib.request
import ssl
import re
import json

def get_full_res_fandom_url(html):
    # Try to find og:image first
    match = re.search(r'<meta property="og:image" content="(https://static\.wikia\.nocookie\.net/.*?)"', html)
    if match:
        url = match.group(1)
        # Strip thumbnail parameters
        # Example: .../image.png/revision/latest/window-crop/width/40?cb=...
        # We want everything up to /revision/latest (or the extension)
        if '/revision/latest' in url:
            url = url.split('/revision/latest')[0] + '/revision/latest'
        return url
    
    # Fallback to finding the first image in the infobox
    match = re.search(r'<aside.*?<img.*?src="(https://static\.wikia\.nocookie\.net/.*?)"', html, re.DOTALL)
    if match:
        url = match.group(1)
        if '/revision/latest' in url:
            url = url.split('/revision/latest')[0] + '/revision/latest'
        return url
    
    return None

def download_image(url, save_path):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        req = urllib.request.Request(url, headers=headers)
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context) as response, open(save_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded: {save_path}")
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def process():
    base_dir = '/Users/user/Downloads/Vrezh/public/assets/characters'
    os.makedirs(base_dir, exist_ok=True)
    
    # Map game IDs to Fandom Wikis
    wiki_map = {
        "elden-ring": "eldenring",
        "the-witcher-3": "witcher",
        "god-of-war": "godofwar",
        "rdr2": "reddeadredemption",
        "doom-eternal": "doom",
        "cyberpunk": "cyberpunk",
        "re-village": "residentevil",
        "halo-infinite": "halo",
        "bloodborne": "bloodborne",
        "tlou2": "thelastofus",
        "skyrim": "elderscrolls",
        "fallout-4": "fallout",
        "mass-effect": "masseffect",
        "persona-5": "megamitensei",
        "baldur's-gate-3": "baldursgate3",
        "ff7-remake": "finalfantasy",
        "ghost-of-tsushima": "ghostoftsushima",
        "horizon-zero-dawn": "horizonzerodawn",
        "starfield": "starfield",
        "disco-elysium": "discoelysium",
        "destiny-2": "destinypedia", # Special case
        "apex-legends": "apexlegends",
        "titanfall-2": "titanfall",
        "half-life-2": "half-life",
        "bioshock": "bioshock",
        "borderlands-3": "borderlands",
        "overwatch-2": "overwatch",
        "cod-mw": "callofduty",
        "battlefield-1": "battlefield",
        "r6-siege": "rainbowsix",
        "far-cry-6": "farcry",
        "metro-exodus": "metro",
        "wolfenstein-2": "wolfenstein",
        "crysis": "crysis",
        "silent-hill-2": "silent-hill",
        "dead-space": "deadspace",
        "amnesia": "amnesia",
        "outlast-2": "outlast",
        "alien-isolation": "avp",
        "evil-within-2": "theevilwithin",
        "alan-wake-2": "alanwake",
        "phasmophobia": "phasmophobia",
        "until-dawn": "untildawn",
        "little-nightmares-2": "littlenightmares",
        "layers-of-fear": "layersoffear",
        "soma": "soma",
        "fatal-frame": "fatalframe",
        "dead-by-daylight": "deadbydaylight",
        "portal-2": "portal"
    }

    # Load missing assets
    missing_assets = []
    main_js = '/Users/user/Downloads/Vrezh/main.js'
    with open(main_js, 'r') as f:
        content = f.read()
    
    # Extract all character image paths
    paths = re.findall(r'\"image\": \"(/assets/characters/[^\"]+)\"', content)
    for p in set(paths):
        full_path = '/Users/user/Downloads/Vrezh/public' + p
        if not os.path.exists(full_path):
            # Parse game_id and char_name from path
            # Pattern: /assets/characters/game-id-char_name.jpg
            basename = os.path.basename(p).replace('.jpg', '')
            # Find which game_id it belongs to by prefix matching the wiki_map keys
            matched_game_id = None
            for gid in wiki_map.keys():
                if basename.startswith(gid + "-"):
                    matched_game_id = gid
                    break
            
            if matched_game_id:
                char_name_slug = basename[len(matched_game_id)+1:]
                # Convert slug to Wiki format (First_Last)
                char_name_wiki = char_name_slug.replace("_", " ").title().replace(" ", "_")
                # Special cases for names that need better formatting
                if matched_game_id == "cyberpunk" and "v_" in char_name_slug:
                    char_name_wiki = "V_(Character)"
                
                missing_assets.append({
                    "game_id": matched_game_id,
                    "wiki": wiki_map[matched_game_id],
                    "char_wiki": char_name_wiki,
                    "save_path": full_path
                })

    print(f"Found {len(missing_assets)} missing assets to process.")

    for asset in missing_assets:
        wiki = asset['wiki']
        char = asset['char_wiki']
        
        if wiki == "destinypedia":
            url = f"https://www.destinypedia.com/{char}"
        else:
            url = f"https://{wiki}.fandom.com/wiki/{char}"
            
        print(f"Fetching {char} from {url}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            context = ssl._create_unverified_context()
            with urllib.request.urlopen(req, context=context) as response:
                html = response.read().decode('utf-8')
                img_url = get_full_res_fandom_url(html)
                if img_url:
                    download_image(img_url, asset['save_path'])
                else:
                    print(f"No image found for {char} on {wiki}")
        except Exception as e:
            print(f"Error processing {char}: {e}")

if __name__ == "__main__":
    process()
