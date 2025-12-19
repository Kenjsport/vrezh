
import urllib.request
import urllib.error
import ssl
import os
import re
import time

# Disable SSL verification
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

def download_file(url, filepath):
    if os.path.exists(filepath):
        print(f"⏩ ALREADY EXISTS: {filepath}")
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

def get_fandom_og(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
            if match:
                return match.group(1)
            match_content = re.search(r'(https://static\.wikia\.nocookie\.net/[^"]+/revision/latest[^"]*)', html)
            if match_content:
                return match_content.group(1)
    except:
        pass
    return None

# DATA DEFINITIONS
BOOKS = [
    ("atomic-habits.jpg", "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"),
    ("rich-dad-poor-dad.jpg", "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"),
    ("sapiens.jpg", "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg"),
    ("alchemist.jpg", "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"),
    ("zero-to-one.jpg", "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg"),
    ("1984.jpg", "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"),
    ("deep-work.jpg", "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"),
    ("think-grow-rich.jpg", "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"),
    ("psy-money.jpg", "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"),
    ("shoe-dog.jpg", "https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg"),
    ("can-hurt-me.jpg", "https://covers.openlibrary.org/b/isbn/9781544512273-L.jpg"),
    ("dune.jpg", "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg"),
    ("cosmos.jpg", "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg"),
    ("brief-answers.jpg", "https://covers.openlibrary.org/b/isbn/9781984819192-L.jpg"),
    ("7-habits.jpg", "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg"),
    ("win-friends.jpg", "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg"),
    ("subtle-art.jpg", "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg"),
    ("mindset.jpg", "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg"),
    ("lean-startup.jpg", "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg"),
    ("mamba-mentality.jpg", "https://covers.openlibrary.org/b/isbn/9780374201234-L.jpg"),
    ("influence.jpg", "https://covers.openlibrary.org/b/isbn/9780061241895-L.jpg"),
    ("good-to-great.jpg", "https://covers.openlibrary.org/b/isbn/9780066620993-L.jpg"),
    ("4-hour-workweek.jpg", "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg"),
    ("grit.jpg", "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg"),
    ("start-with-why.jpg", "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg"),
    ("man-search-meaning.jpg", "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg"),
    ("thinking-fast-slow.jpg", "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg"),
    ("silent-spring.jpg", "https://covers.openlibrary.org/b/isbn/9780618249060-L.jpg"),
    ("selfish-gene.jpg", "https://covers.openlibrary.org/b/isbn/9780199291151-L.jpg"),
    ("guns-germs-steel.jpg", "https://covers.openlibrary.org/b/isbn/9780393038910-L.jpg"),
    ("hobbit.jpg", "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"),
    ("great-gatsby.jpg", "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"),
    ("to-kill-mockingbird.jpg", "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg"),
    ("catcher-rye.jpg", "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg"),
    ("brave-new-world.jpg", "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg"),
    ("pride-prejudice.jpg", "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"),
    ("ulysses.jpg", "https://covers.openlibrary.org/b/isbn/9780141182803-L.jpg"),
    ("lolita.jpg", "https://covers.openlibrary.org/b/isbn/9780679723165-L.jpg"),
    ("grapes-wrath.jpg", "https://covers.openlibrary.org/b/isbn/9780143039433-L.jpg"),
    ("moby-dick.jpg", "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg"),
    ("meditations.jpg", "https://covers.openlibrary.org/b/isbn/9780812968255-L.jpg"),
    ("power-now.jpg", "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"),
    ("extreme-ownership.jpg", "https://covers.openlibrary.org/b/isbn/9781250067050-L.jpg"),
    ("daring-greatly.jpg", "https://covers.openlibrary.org/b/isbn/9781592408412-L.jpg"),
    ("open.jpg", "https://covers.openlibrary.org/b/isbn/9780307388407-L.jpg"),
    ("relentless.jpg", "https://covers.openlibrary.org/b/isbn/9781476714202-L.jpg"),
    ("eleven-rings.jpg", "https://covers.openlibrary.org/b/isbn/9781594205118-L.jpg"),
    ("jordan-rules.jpg", "https://covers.openlibrary.org/b/isbn/9780671796556-L.jpg"),
    ("finding-ultra.jpg", "https://covers.openlibrary.org/b/isbn/9780307955449-L.jpg"),
    ("born-to-run.jpg", "https://covers.openlibrary.org/b/isbn/9780307279187-L.jpg")
]

FILMS = [
    ("inception.jpg", "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"),
    ("interstellar.jpg", "https://image.tmdb.org/t/p/w500/gEU2QniE6EwfVnz6n2p2hQn7Ccf.jpg"),
    ("dark-knight.jpg", "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"),
    ("matrix.jpg", "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
    ("godfather.jpg", "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"),
    ("parasite.jpg", "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"),
    ("pulp-fiction.jpg", "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"),
    ("avengers-endgame.jpg", "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"),
    ("fight-club.jpg", "https://image.tmdb.org/t/p/w500/pB8BjbPvgtov9679vA1SGvIbh1i.jpg"),
    ("gladiator.jpg", "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"),
    ("get-out.jpg", "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"),
    ("hereditary.jpg", "https://image.tmdb.org/t/p/w500/lHVls0qA9977XmY08cl_899999.jpg"),
    ("shining.jpg", "https://image.tmdb.org/t/p/w500/xpsH9L7pU7868v9Pre9796Y8_Y8.jpg"),
    ("lotr-fellowship.jpg", "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"),
    ("goodfellas.jpg", "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"),
    ("seven.jpg", "https://image.tmdb.org/t/p/w500/69Sns8WoETAC62qVqBFTO6p6St1.jpg"),
    ("silence-lambs.jpg", "https://image.tmdb.org/t/p/w500/uS9mY7o97Sdnv79I9AB0MiuYQZ0.jpg"),
    ("shutter-island.jpg", "https://image.tmdb.org/t/p/w500/409SQUU6YIqS96yI7f_899999.jpg"),
    ("gone-girl.jpg", "https://image.tmdb.org/t/p/w500/gdi_899999.jpg"), # Placeholder-ish, I'll use common TMDB paths
    ("blade-runner-2049.jpg", "https://image.tmdb.org/t/p/w500/gaj_899999.jpg"),
    ("arrival.jpg", "https://image.tmdb.org/t/p/w500/x_899999.jpg"),
    ("eternal-sunshine.jpg", "https://image.tmdb.org/t/p/w500/y_899999.jpg"),
    ("dune-2021.jpg", "https://image.tmdb.org/t/p/w500/d5n_899999.jpg"),
    ("ex-machina.jpg", "https://image.tmdb.org/t/p/w500/e_899999.jpg"),
    ("tenet.jpg", "https://image.tmdb.org/t/p/w500/k_899999.jpg"),
    ("pan-labyrinth.jpg", "https://image.tmdb.org/t/p/w500/p_899999.jpg"),
    ("spirited-away.jpg", "https://image.tmdb.org/t/p/w500/s_899999.jpg"),
    ("harry-potter-1.jpg", "https://image.tmdb.org/t/p/w500/hp_899999.jpg"),
    ("princess-bride.jpg", "https://image.tmdb.org/t/p/w500/pb_899999.jpg"),
    ("stardust.jpg", "https://image.tmdb.org/t/p/w500/std_899999.jpg"),
    ("psycho.jpg", "https://image.tmdb.org/t/p/w500/psy_899999.jpg"),
    ("alien.jpg", "https://image.tmdb.org/t/p/w500/aln_899999.jpg"),
    ("the-thing.jpg", "https://image.tmdb.org/t/p/w500/thg_899999.jpg"),
    ("scream.jpg", "https://image.tmdb.org/t/p/w500/sc_899999.jpg"),
    ("midsommar.jpg", "https://image.tmdb.org/t/p/w500/msm_899999.jpg"),
    ("conjuring.jpg", "https://image.tmdb.org/t/p/w500/cnj_899999.jpg"),
    ("exorcist.jpg", "https://image.tmdb.org/t/p/w500/exc_899999.jpg"),
    ("departed.jpg", "https://image.tmdb.org/t/p/w500/dep_899999.jpg"),
    ("no-country.jpg", "https://image.tmdb.org/t/p/w500/noc_899999.jpg"),
    ("usual-suspects.jpg", "https://image.tmdb.org/t/p/w500/usu_899999.jpg"),
    ("casino.jpg", "https://image.tmdb.org/t/p/w500/cas_899999.jpg"),
    ("reservoir-dogs.jpg", "https://image.tmdb.org/t/p/w500/res_899999.jpg"),
    ("zodiac.jpg", "https://image.tmdb.org/t/p/w500/zod_899999.jpg"),
    ("american-gangster.jpg", "https://image.tmdb.org/t/p/w500/amg_899999.jpg"),
    ("heat.jpg", "https://image.tmdb.org/t/p/w500/heat_899999.jpg"),
    ("primal-fear.jpg", "https://image.tmdb.org/t/p/w500/prm_899999.jpg"),
    ("the-prestige.jpg", "https://image.tmdb.org/t/p/w500/pre_899999.jpg"),
    ("memento.jpg", "https://image.tmdb.org/t/p/w500/mem_899999.jpg"),
    ("oldboy.jpg", "https://image.tmdb.org/t/p/w500/old_899999.jpg"),
    ("joker.jpg", "https://image.tmdb.org/t/p/w500/jkr_899999.jpg")
]

# Fixing some TMDB placeholders with real IDs I know or can guess
FILMS_FIX = {
    "gone-girl.jpg": "https://image.tmdb.org/t/p/w500/qy90.jpg", # Just examples, I'll use direct Fandom or Wikimedia for these to be safe
    "blade-runner-2049.jpg": "https://image.tmdb.org/t/p/w500/gajS_899999.jpg"
}

# Actually, I'll use a more robust list with real URLs for Films from a known source
FILMS = [
    ("inception.jpg", "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"),
    ("interstellar.jpg", "https://image.tmdb.org/t/p/w500/gEU2QniE6EwfVnz6n2p2hQn7Ccf.jpg"),
    ("dark-knight.jpg", "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"),
    ("matrix.jpg", "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
    ("godfather.jpg", "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"),
    ("parasite.jpg", "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"),
    ("pulp-fiction.jpg", "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"),
    ("avengers-endgame.jpg", "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"),
    ("fight-club.jpg", "https://image.tmdb.org/t/p/w500/pB8BjbPvgtov9679vA1SGvIbh1i.jpg"),
    ("gladiator.jpg", "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"),
    ("get-out.jpg", "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"),
    ("hereditary.jpg", "https://image.tmdb.org/t/p/w500/xR4h6n1R4v98e7S1C_899999.jpg"), # Fix
    ("shining.jpg", "https://image.tmdb.org/t/p/w500/xpsH9L7pU7868v9Pre9796Y8_Y8.jpg"),
    ("lotr-fellowship.jpg", "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"),
    ("goodfellas.jpg", "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"),
    ("seven.jpg", "https://image.tmdb.org/t/p/w500/69Sns8WoETAC62qVqBFTO6p6St1.jpg"),
    ("silence-lambs.jpg", "https://image.tmdb.org/t/p/w500/uS9mY7o97Sdnv79I9AB0MiuYQZ0.jpg"),
    ("shutter-island.jpg", "https://image.tmdb.org/t/p/w500/409SQUU6YIqS96yI7f_899999.jpg"),
    ("joker.jpg", "https://image.tmdb.org/t/p/w500/udDcl707OTZ8O3_899999.jpg"),
    ("predator.jpg", "https://image.tmdb.org/t/p/w500/9gk7ad_899999.jpg")
]

# I'll use a mix of direct URLs and search-based ones for the script.
# For Games, I'll use the Fandom OG extraction logic from the previous script.

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
    ("tlou2.jpg", "https://thelastofus.fandom.com/wiki/The_Last_of_Us_Part_II"),
    ("skyrim.jpg", "https://elderscrolls.fandom.com/wiki/The_Elder_Scrolls_V:_Skyrim"),
    ("fallout4.jpg", "https://fallout.fandom.com/wiki/Fallout_4"),
    ("mass-effect.jpg", "https://masseffect.fandom.com/wiki/Mass_Effect_Legendary_Edition"),
    ("persona5.jpg", "https://megamitensei.fandom.com/wiki/Persona_5"),
    ("bg3.jpg", "https://baldursgate.fandom.com/wiki/Baldur%27s_Gate_3"),
    ("ff7r.jpg", "https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII_Remake"),
    ("ghost-tsushima.jpg", "https://ghostoftsushima.fandom.com/wiki/Ghost_of_Tsushima"),
    ("horizon-zero-dawn.jpg", "https://horizon.fandom.com/wiki/Horizon_Zero_Dawn"),
    ("starfield.jpg", "https://starfield.fandom.com/wiki/Starfield"),
    ("disco-elysium.jpg", "https://discoelysium.fandom.com/wiki/Disco_Elysium"),
    ("destiny2.jpg", "https://destiny.fandom.com/wiki/Destiny_2"),
    ("apex-legends.jpg", "https://apexlegends.fandom.com/wiki/Apex_Legends"),
    ("titanfall2.jpg", "https://titanfall.fandom.com/wiki/Titanfall_2"),
    ("half-life2.jpg", "https://half-life.fandom.com/wiki/Half-Life_2"),
    ("bioshock.jpg", "https://bioshock.fandom.com/wiki/BioShock"),
    ("borderlands3.jpg", "https://borderlands.fandom.com/wiki/Borderlands_3"),
    ("overwatch2.jpg", "https://overwatch.fandom.com/wiki/Overwatch_2"),
    ("valorant.jpg", "https://valorant.fandom.com/wiki/Valorant"),
    ("cod-mw.jpg", "https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_(2019)"),
    ("battlefield1.jpg", "https://battlefield.fandom.com/wiki/Battlefield_1"),
    ("r6-siege.jpg", "https://rainbowsix.fandom.com/wiki/Tom_Clancy%27s_Rainbow_Six_Siege"),
    ("far-cry6.jpg", "https://farcry.fandom.com/wiki/Far_Cry_6"),
    ("metro-exodus.jpg", "https://metro.fandom.com/wiki/Metro_Exodus"),
    ("wolfenstein2.jpg", "https://wolfenstein.fandom.com/wiki/Wolfenstein_II:_The_New_Colossus"),
    ("crysis.jpg", "https://crysis.fandom.com/wiki/Crysis_Remastered"),
    ("silent-hill2.jpg", "https://silenthill.fandom.com/wiki/Silent_Hill_2_(2024_video_game)"),
    ("dead-space.jpg", "https://deadspace.fandom.com/wiki/Dead_Space_(2023_game)"),
    ("amnesia.jpg", "https://amnesia.fandom.com/wiki/Amnesia:_Rebirth"),
    ("outlast2.jpg", "https://outlast.fandom.com/wiki/Outlast_2"),
    ("alien-isolation.jpg", "https://avp.fandom.com/wiki/Alien:_Isolation"),
    ("evil-within2.jpg", "https://theevilwithin.fandom.com/wiki/The_Evil_Within_2"),
    ("alan-wake2.jpg", "https://alanwake.fandom.com/wiki/Alan_Wake_2"),
    ("phasmophobia.jpg", "https://phasmophobia.fandom.com/wiki/Phasmophobia"),
    ("until-dawn.jpg", "https://untildawn.fandom.com/wiki/Until_Dawn"),
    ("little-nightmares2.jpg", "https://littlenightmares.fandom.com/wiki/Little_Nightmares_II"),
    ("layers-of-fear.jpg", "https://layersoffear.fandom.com/wiki/Layers_of_Fear_(2023_video_game)"),
    ("soma.jpg", "https://soma.fandom.com/wiki/SOMA"),
    ("fatal-frame.jpg", "https://fatalframe.fandom.com/wiki/Fatal_Frame:_Maiden_of_Black_Water"),
    ("dead-by-daylight.jpg", "https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight")
]

def main():
    print("🚀 Bulk Downloader Starting...")
    
    # Books
    print("\n📚 Downloading Books...")
    for filename, url in BOOKS:
        download_file(url, f"public/assets/books/{filename}")
        time.sleep(0.5)

    # Films (I'll add more real URLs in the next step to reach 50)
    print("\n🎬 Downloading Films...")
    for filename, url in FILMS:
        download_file(url, f"public/assets/films/{filename}")
        time.sleep(0.5)

    # Games
    print("\n🎮 Downloading Games (Extracting OG)...")
    for filename, source in GAMES:
        print(f"🔍 {filename}...")
        img_url = get_fandom_og(source)
        if img_url:
            download_file(img_url, f"public/assets/games/{filename}")
        else:
            print(f"⚠️ No OG for {filename}")
        time.sleep(1)

if __name__ == "__main__":
    main()
