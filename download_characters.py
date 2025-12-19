import os
import urllib.request
import ssl
import re
import json

def download_image(url, save_path):
    if os.path.exists(save_path):
        return True
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

def get_fandom_image(wiki_url):
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        req = urllib.request.Request(wiki_url, headers=headers)
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context) as response:
            html = response.read().decode('utf-8')
            # Extract og:image
            match = re.search(r'<meta[^>]*property="og:image"[^>]*content="([^"]*)"', html)
            if match:
                return match.group(1)
    except Exception as e:
        pass
    return None

def process():
    base_dir = '/Users/user/Downloads/Vrezh/public/assets/characters'
    os.makedirs(base_dir, exist_ok=True)
    
    mapping = {
        "elden-ring": {
            "wiki": "eldenring",
            "chars": ["Melina", "Malenia", "Ranni", "Blaidd"]
        },
        "the-witcher-3": {
            "wiki": "witcher",
            "chars": ["Geralt of Rivia", "Yennefer of Vengerberg", "Ciri", "Triss Merigold"]
        },
        "god-of-war": {
            "wiki": "godofwar",
            "chars": ["Kratos", "Atreus", "Freya", "Baldur"]
        },
        "rdr2": {
            "wiki": "reddeadredemption",
            "chars": ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Sadie Adler"]
        },
        "doom-eternal": {
            "wiki": "doom",
            "chars": ["Doom Slayer", "Samuel Hayden", "Khan Maykr"]
        },
        "cyberpunk": {
            "wiki": "cyberpunk",
            "chars": ["V (Character)", "Johnny Silverhand", "Jackie Welles", "Judy Alvarez"]
        },
        "re-village": {
            "wiki": "residentevil",
            "chars": ["Ethan Winters", "Alcina Dimitrescu", "Mother Miranda", "Chris Redfield"]
        },
        "halo-infinite": {
            "wiki": "halo",
            "chars": ["John-117", "Cortana", "The Weapon", "Escharum"]
        },
        "bloodborne": {
            "wiki": "bloodborne",
            "chars": ["The Hunter", "Plain Doll", "Gehrman", "Father Gascoigne"]
        },
        "tlou2": {
            "wiki": "thelastofus",
            "chars": ["Ellie (The Last of Us Part II)", "Abby Anderson", "Joel Miller", "Dina"]
        },
        "skyrim": {
            "wiki": "elderscrolls",
            "chars": ["Last Dragonborn", "Alduin", "Paarthurnax", "Balgruuf the Greater"]
        },
        "fallout-4": {
            "wiki": "fallout",
            "chars": ["Sole Survivor", "Piper Wright", "Nick Valentine", "Paladin Danse"]
        },
        "mass-effect": {
            "wiki": "masseffect",
            "chars": ["Commander Shepard", "Garrus Vakarian", "Liara T'Soni", "Tali'Zorah"]
        },
        "persona-5": {
            "wiki": "megamitensei",
            "chars": ["Protagonist (Persona 5)", "Morgana", "Ryuji Sakamoto", "Ann Takamaki"]
        },
        "baldur's-gate-3": {
            "wiki": "baldursgate3",
            "chars": ["Shadowheart", "Astarion", "Gale", "Lae'zel"]
        },
        "ff7-remake": {
            "wiki": "finalfantasy",
            "chars": ["Cloud Strife", "Tifa Lockhart", "Aerith Gainsborough", "Barret Wallace"]
        },
        "ghost-of-tsushima": {
            "wiki": "ghostoftsushima",
            "chars": ["Jin Sakai", "Lord Shimura", "Yuna", "Khotun Khan"]
        },
        "horizon-zero-dawn": {
            "wiki": "horizonzerodawn",
            "chars": ["Aloy", "Sylens", "Rost", "Erend"]
        },
        "starfield": {
            "wiki": "starfield",
            "chars": ["Sarah Morgan", "Sam Coe", "Barrett", "Andreja"]
        },
        "disco-elysium": {
            "wiki": "discoelysium",
            "chars": ["Harrier Du Bois", "Kim Kitsuragi", "Klaasje Amandou", "Evrart Claire"]
        },
        "destiny-2": {
            "wiki": "destinypedia",
            "chars": ["Zavala", "Ikora Rey", "Cayde-6", "The Witness"]
        },
        "apex-legends": {
            "wiki": "apexlegends",
            "chars": ["Wraith", "Bloodhound", "Gibraltar", "Lifeline"]
        },
        "titanfall-2": {
            "wiki": "titanfall",
            "chars": ["Jack Cooper", "BT-7274", "Kuben Blisk", "Ash"]
        },
        "half-life-2": {
            "wiki": "half-life",
            "chars": ["Gordon Freeman", "Alyx Vance", "G-Man", "Barney Calhoun"]
        },
        "bioshock": {
            "wiki": "bioshock",
            "chars": ["Jack (BioShock)", "Andrew Ryan", "Big Daddy", "Little Sister"]
        },
        "borderlands-3": {
            "wiki": "borderlands",
            "chars": ["Lilith", "Claptrap", "Zane", "Amara"]
        },
        "overwatch-2": {
            "wiki": "overwatch",
            "chars": ["Tracer", "Winston", "Reaper", "Mei"]
        },
        "cod-mw": {
            "wiki": "callofduty",
            "chars": ["John Price (Reboot)", "Simon Riley (Reboot)", "John MacTavish (Reboot)", "Kyle Garrick"]
        },
        "battlefield-1": {
            "wiki": "battlefield",
            "chars": ["Frederick Bishop", "Danny Edwards", "Luca Vincenzo Coccila"]
        },
        "r6-siege": {
            "wiki": "rainbowsix",
            "chars": ["Ash", "Jäger", "Thermite", "Thatcher"]
        },
        "far-cry-6": {
            "wiki": "farcry",
            "chars": ["Dani Rojas", "Antón Castillo", "Guapo", "Juan Cortez"]
        },
        "metro-exodus": {
            "wiki": "metro",
            "chars": ["Artyom", "Anna Mel'nikova", "Miller", "Sam"]
        },
        "wolfenstein-2": {
            "wiki": "wolfenstein",
            "chars": ["William Joseph Blazkowicz", "Anya Oliwa", "Frau Engel", "Seth Roth"]
        },
        "crysis": {
            "wiki": "crysis",
            "chars": ["Laurence \"Prophet\" Barnes", "Michael \"Psycho\" Sykes", "Nomad", "Alcatraz"]
        },
        "silent-hill-2": {
            "wiki": "silent-hill",
            "chars": ["James Sunderland", "Mary Shepherd-Sunderland", "Maria", "Angela Orosco"]
        },
        "dead-space": {
            "wiki": "deadspace",
            "chars": ["Isaac Clarke", "Nicole Brennan", "Kendra Daniels", "Zach Hammond"]
        },
        "amnesia": {
            "wiki": "amnesia",
            "chars": ["Daniel", "Alexander of Brennenburg", "Agrippa"]
        },
        "outlast-2": {
            "wiki": "outlast",
            "chars": ["Blake Langermann", "Lynn Langermann", "Sullivan Knoth", "Val"]
        },
        "alien-isolation": {
            "wiki": "avp",
            "chars": ["Amanda Ripley", "Christopher Samuels", "Ricardo", "Working Joe"]
        },
        "evil-within-2": {
            "wiki": "theevilwithin",
            "chars": ["Sebastian Castellanos", "Juli Kidman", "Theodore Wallace", "Stefano Valentini"]
        },
        "alan-wake-2": {
            "wiki": "alanwake",
            "chars": ["Alan Wake", "Saga Anderson", "Alex Casey", "Mr. Door"]
        },
        "phasmophobia": {
            "wiki": "phasmophobia",
            "chars": ["Ghost Hunter", "Spirit", "Wraith", "Phantom"]
        },
        "until-dawn": {
            "wiki": "untildawn",
            "chars": ["Samantha Giddings", "Michael Munroe", "Joshua Washington", "Hannah Washington"]
        },
        "little-nightmares-2": {
            "wiki": "littlenightmares",
            "chars": ["Mono", "Six", "The Hunter", "The Teacher"]
        },
        "layers-of-fear": {
            "wiki": "layersoffear",
            "chars": ["The Painter", "The Musician", "The Artist's Daughter"]
        },
        "soma": {
            "wiki": "soma",
            "chars": ["Simon Jarrett", "Catherine Chun", "The WAU", "Brandon Wan"]
        },
        "fatal-frame": {
            "wiki": "fatalframe",
            "chars": ["Mio Amakura", "Mayu Amakura", "Sae Kurosawa"]
        },
        "dead-by-daylight": {
            "wiki": "deadbydaylight",
            "chars": ["Evan MacMillan", "Dwight Fairfield", "Meg Thomas", "Claudette Morel"]
        },
        "portal-2": {
            "wiki": "portal",
            "chars": ["Chell", "GLaDOS", "Wheatley", "Cave Johnson"]
        }
    }
    
    updated_games = {}
    
    for game_id, data in mapping.items():
        wiki = data['wiki']
        chars = data['chars']
        game_chars = []
        for char_name in chars:
            safe_name = char_name.replace(" ", "_").replace("\"", "")
            # Determine fandom wiki URL
            # Note: destinypedia is a different domain
            if wiki == "destinypedia":
                url = f"https://www.destinypedia.com/{safe_name}"
            elif wiki == "avp":
                 url = f"https://avp.fandom.com/wiki/{safe_name}"
            else:
                url = f"https://{wiki}.fandom.com/wiki/{safe_name}"
            
            img_url = get_fandom_image(url)
            if img_url:
                local_filename = f"{game_id}-{safe_name.lower()}.jpg"
                local_path = f"/assets/characters/{local_filename}"
                full_local_path = os.path.join(base_dir, local_filename)
                if download_image(img_url, full_local_path):
                    game_chars.append({"name": char_name, "image": local_path})
            else:
                print(f"Could not find image for {char_name} in {game_id}")
                # Add placeholder if not found
                game_chars.append({"name": char_name, "image": f"https://placehold.co/200x200?text={char_name.replace(' ', '+')}"})
        
        updated_games[game_id] = game_chars

    # Save mapping for JS update
    with open('/Users/user/Downloads/Vrezh/character_mapping.json', 'w') as f:
        json.dump(updated_games, f, indent=2)

if __name__ == "__main__":
    process()
