
import urllib.request
import urllib.error
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Minimal representation of the data structure I observed in main.js
# I will just manually add the URLs I see in main.js or parse them if I could, but manual is safer for a quick check script
# actually, parsing main.js is hard with python without regex.
# I'll just list the character/map URLs I can see in the previously viewed file content or just assume.
# Wait, I viewed lines 308-484. I can see most of them.

assets = [
    # Elden Ring
    "https://static.wikia.nocookie.net/eldenring/images/d/d4/Melina-portrait.png",
    "https://static.wikia.nocookie.net/eldenring/images/9/90/Malenia%2C_Blade_of_Miquella_Concept_Art.jpg",
    "https://static.wikia.nocookie.net/eldenring/images/1/1a/Ranni_infobox.png",
    "https://static.wikia.nocookie.net/eldenring/images/7/7b/Blaidd_infobox.png",
    "https://static.wikia.nocookie.net/eldenring/images/5/5e/Map_Limgrave_West.jpg",
    "https://static.wikia.nocookie.net/eldenring/images/4/4b/Map_Caelid.jpg",
    # Witcher 3
    "https://static.wikia.nocookie.net/witcher/images/2/23/Tw3_geralt_of_rivia_new_render.png",
    "https://static.wikia.nocookie.net/witcher/images/b/b3/Tw3_journal_ciri.png",
    "https://static.wikia.nocookie.net/witcher/images/9/9a/Tw3_journal_yennefer.png",
    "https://static.wikia.nocookie.net/witcher/images/d/df/Map_of_Velen_%28The_Witcher_3%29.png",
    "https://static.wikia.nocookie.net/witcher/images/1/1b/Map_of_Skellige_%28The_Witcher_3%29.png",
    # God of War
    "https://static.wikia.nocookie.net/godofwar/images/a/a3/Kratos_GoW4.png",
    "https://static.wikia.nocookie.net/godofwar/images/e/e0/Atreus_GoW4.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Norwegian_exercise_Joint_Viking_in_Arctic_landscape_of_Finnmark_%281%29.jpg",
    # RDR2
    "https://static.wikia.nocookie.net/reddeadredemption/images/1/1a/ArthurMorgan.jpg",
    "https://static.wikia.nocookie.net/reddeadredemption/images/2/22/Dutch_van_der_Linde_RDR2_Profile.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Wild_Flowers_in_Utah_West_Desert_-_panoramio.jpg",
    # Doom Eternal
    "https://static.wikia.nocookie.net/doom/images/c/c5/Doom_Slayer_Eternal.png",
    "https://static.wikia.nocookie.net/doom/images/1/1b/DoomEternal_Marauder_Concept.png",
    "https://static.wikia.nocookie.net/doom/images/7/74/Phobos.png",
    # Cyberpunk
    "https://static.wikia.nocookie.net/cyberpunk/images/a/a2/V_Nomad_Male_Infobox_CP2077.png",
    "https://static.wikia.nocookie.net/cyberpunk/images/b/bb/Johnny_Silverhand_Infobox_CP2077.png",
    "https://static.wikia.nocookie.net/cyberpunk/images/e/e0/Night_City_Map_CP2077.png",
    # RE Village
    "https://static.wikia.nocookie.net/residentevil/images/e/e6/Ethan_Winters_Village.png",
    "https://static.wikia.nocookie.net/residentevil/images/3/3a/Alcina_Dimitrescu.png",
    "https://static.wikia.nocookie.net/residentevil/images/9/93/Map_Village_Castle.png",
    # Halo Infinite
    "https://static.wikia.nocookie.net/halo/images/1/15/HInf_MasterChief_Render_campaign.png",
    "https://static.wikia.nocookie.net/halo/images/7/77/HInf_TheWeapon.png",
    "https://static.wikia.nocookie.net/halo/images/4/4f/Zeta_Halo_HInf.png",
    # Bloodborne
    "https://static.wikia.nocookie.net/bloodborne/images/3/3b/Hunter_Set.png",
    "https://static.wikia.nocookie.net/bloodborne/images/0/01/Gehrman%2C_The_First_Hunter.jpg",
    "https://static.wikia.nocookie.net/bloodborne/images/c/c5/Yharnam_Map.jpg",
    # TLOU2
    "https://static.wikia.nocookie.net/thelastofus/images/d/d5/Ellie_Part_II_Infobox.png",
    "https://static.wikia.nocookie.net/thelastofus/images/8/86/Abby_Part_II_Infobox.png",
    "https://static.wikia.nocookie.net/thelastofus/images/3/38/Seattle_Map.png"
]

print("Checking All Game Assets...")
for url in assets:
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=5, context=ctx) as response:
            if response.status == 200:
                print(f"✅ FOUND: {url.split('/')[-1]}")
            else:
                print(f"❌ MISSING: {url.split('/')[-1]} ({response.status})")
    except urllib.error.HTTPError as e:
        print(f"❌ MISSING: {url.split('/')[-1]} ({e.code})")
    except Exception as e:
        print(f"❌ ERROR: {url.split('/')[-1]} - {e}")
