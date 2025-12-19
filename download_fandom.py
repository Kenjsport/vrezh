
import urllib.request
import ssl
import os
import re
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {'User-Agent': 'Mozilla/5.0'}

def get_og(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
            html = r.read().decode('utf-8', errors='ignore')
            m = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
            if m: return m.group(1).split('/revision')[0] # Strip revision to get clean img
            m2 = re.search(r'https://static\.wikia\.nocookie\.net/[^"]+', html)
            if m2: return m2.group(0).split('/revision')[0]
    except: pass
    return None

def download(url, path):
    if not url: return False
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
            with open(path, 'wb') as f: f.write(r.read())
        print(f"✅ {path}")
        return True
    except Exception as e:
        print(f"❌ {path} ({e})")
        return False

# FINAL LISTS
FILMS = [
    ("inception.jpg", "https://inception.fandom.com/wiki/Inception"),
    ("interstellar.jpg", "https://interstellarfilm.fandom.com/wiki/Interstellar"),
    ("dark-knight.jpg", "https://batman.fandom.com/wiki/The_Dark_Knight"),
    ("matrix.jpg", "https://matrix.fandom.com/wiki/The_Matrix"),
    ("godfather.jpg", "https://godfather.fandom.com/wiki/The_Godfather"),
    ("parasite.jpg", "https://parasite.fandom.com/wiki/Parasite"),
    ("pulp-fiction.jpg", "https://pulpfiction.fandom.com/wiki/Pulp_Fiction"),
    ("avengers-endgame.jpg", "https://marvelcinematicuniverse.fandom.com/wiki/Avengers:_Endgame"),
    ("fight-club.jpg", "https://fightclub.fandom.com/wiki/Fight_Club"),
    ("gladiator.jpg", "https://gladiator.fandom.com/wiki/Gladiator_(film)"),
    ("get-out.jpg", "https://getout.fandom.com/wiki/Get_Out"),
    ("hereditary.jpg", "https://hereditary.fandom.com/wiki/Hereditary"),
    ("shining.jpg", "https://theshining.fandom.com/wiki/The_Shining_(film)"),
    ("lotr-fellowship.jpg", "https://lotr.fandom.com/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring"),
    ("goodfellas.jpg", "https://goodfellas.fandom.com/wiki/Goodfellas"),
    ("seven.jpg", "https://seven.fandom.com/wiki/Seven"),
    ("silence-lambs.jpg", "https://silenceofthelambs.fandom.com/wiki/The_Silence_of_the_Lambs"),
    ("shutter-island.jpg", "https://shutterisland.fandom.com/wiki/Shutter_Island"),
    ("gone-girl.jpg", "https://gonegirl.fandom.com/wiki/Gone_Girl"),
    ("blade-runner-2049.jpg", "https://bladerunner.fandom.com/wiki/Blade_Runner_2049"),
    ("arrival.jpg", "https://arrivalpedia.fandom.com/wiki/Arrival"),
    ("eternal-sunshine.jpg", "https://movies.fandom.com/wiki/Eternal_Sunshine_of_the_Spotless_Mind"),
    ("dune-2021.jpg", "https://dune.fandom.com/wiki/Dune_(2021_film)"),
    ("ex-machina.jpg", "https://movies.fandom.com/wiki/Ex_Machina"),
    ("tenet.jpg", "https://tenet.fandom.com/wiki/Tenet"),
    ("pan-labyrinth.jpg", "https://panslabyrinth.fandom.com/wiki/Pan%27s_Labyrinth"),
    ("spirited-away.jpg", "https://ghibli.fandom.com/wiki/Spirited_Away"),
    ("harry-potter-1.jpg", "https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(film)"),
    ("princess-bride.jpg", "https://princessbride.fandom.com/wiki/The_Princess_Bride_(film)"),
    ("stardust.jpg", "https://stardust.fandom.com/wiki/Stardust_(film)"),
    ("psycho.jpg", "https://hitchcock.fandom.com/wiki/Psycho_(1960)"),
    ("alien.jpg", "https://avp.fandom.com/wiki/Alien_(film)"),
    ("the-thing.jpg", "https://thething.fandom.com/wiki/The_Thing_(1982_film)"),
    ("scream.jpg", "https://scream.fandom.com/wiki/Scream_(film)"),
    ("midsommar.jpg", "https://midsommar.fandom.com/wiki/Midsommar"),
    ("conjuring.jpg", "https://theconjuring.fandom.com/wiki/The_Conjuring"),
    ("exorcist.jpg", "https://theexorcist.fandom.com/wiki/The_Exorcist_(film)"),
    ("departed.jpg", "https://departed.fandom.com/wiki/The_Departed"),
    ("no-country.jpg", "https://movies.fandom.com/wiki/No_Country_for_Old_Men"),
    ("usual-suspects.jpg", "https://movies.fandom.com/wiki/The_Usual_Suspects"),
    ("casino.jpg", "https://casino-film.fandom.com/wiki/Casino"),
    ("reservoir-dogs.jpg", "https://movies.fandom.com/wiki/Reservoir_Dogs"),
    ("zodiac.jpg", "https://movies.fandom.com/wiki/Zodiac"),
    ("american-gangster.jpg", "https://movies.fandom.com/wiki/American_Gangster"),
    ("heat.jpg", "https://heat-movie.fandom.com/wiki/Heat"),
    ("primal-fear.jpg", "https://movies.fandom.com/wiki/Primal_Fear"),
    ("the-prestige.jpg", "https://movies.fandom.com/wiki/The_Prestige"),
    ("memento.jpg", "https://memento.fandom.com/wiki/Memento"),
    ("oldboy.jpg", "https://movies.fandom.com/wiki/Oldboy"),
    ("joker.jpg", "https://joker.fandom.com/wiki/Joker_(film)")
]

GAMES = [
    ("elden-ring.jpg", "https://eldenring.fandom.com/wiki/Elden_Ring"),
    ("witcher-3.jpg", "https://witcher.fandom.com/wiki/The_Witcher_3:_Wild_Hunt"),
    ("god-of-war.jpg", "https://godofwar.fandom.com/wiki/God_of_War_(2018)"),
    ("rdr2.jpg", "https://reddead.fandom.com/wiki/Red_Dead_Redemption_2"),
    ("doom-eternal.jpg", "https://doom.fandom.com/wiki/Doom_Eternal"),
    ("cyberpunk.jpg", "https://cyberpunk.fandom.com/wiki/Cyberpunk_2077"),
    ("re-village.jpg", "https://residentevil.fandom.com/wiki/Resident_Evil_Village"),
    ("halo-infinite.jpg", "https://halo.fandom.com/wiki/Halo_Infinite"),
    ("bloodborne.jpg", "https://bloodborne.fandom.com/wiki/Bloodborne"),
    ("tlou2.jpg", "https://thelastofus.fandom.com/wiki/The_Last_of_Us_Part_II")
    # rest are already downloaded via steam
]

def main():
    print("🎬 Extracting Films...")
    for f, url in FILMS:
        if not os.path.exists(f"public/assets/films/{f}"):
            img = get_og(url)
            download(img, f"public/assets/films/{f}")
            time.sleep(0.5)

    print("\n🎮 Extracting Games...")
    for f, url in GAMES:
        if not os.path.exists(f"public/assets/games/{f}"):
            img = get_og(url)
            download(img, f"public/assets/games/{f}")
            time.sleep(0.5)

if __name__ == "__main__":
    main()
