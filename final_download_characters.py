import os
import subprocess

def download_with_curl(url, save_path):
    # Skip if exists and has size
    if os.path.exists(save_path) and os.path.getsize(save_path) > 1000:
        return True
    try:
        cmd = [
            'curl', '-L',
            '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            '-e', 'https://www.google.com/',
            '-o', save_path,
            url
        ]
        subprocess.run(cmd, capture_output=True)
        return True
    except:
        return False

def process():
    base = '/Users/user/Downloads/Vrezh/public/assets/characters/'
    os.makedirs(base, exist_ok=True)
    
    # Comprehensive stable sources
    sources = [
        # Dead By Daylight
        ('https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6f/S01_DwightFairfield_Portrait.png/revision/latest', 'dead-by-daylight-dwight_fairfield.jpg'),
        ('https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3b/S02_MegThomas_Portrait.png/revision/latest', 'dead-by-daylight-meg_thomas.jpg'),
        ('https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/S03_ClaudetteMorel_Portrait.png/revision/latest', 'dead-by-daylight-claudette_morel.jpg'),
        ('https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1a/K01_TheTrapper_Portrait.png/revision/latest', 'dead-by-daylight-evan_macmillan.jpg'),
        # Dead Space Remake
        ('https://static.wikia.nocookie.net/deadspace/images/1/1a/Isaac_Clarke_Remake.png/revision/latest', 'dead-space-isaac_clarke.jpg'),
        ('https://static.wikia.nocookie.net/deadspace/images/b/b5/KendraRemake.png/revision/latest', 'dead-space-kendra_daniels.jpg'),
        ('https://static.wikia.nocookie.net/deadspace/images/1/12/NicoleRemake.png/revision/latest', 'dead-space-nicole_brennan.jpg'),
        ('https://static.wikia.nocookie.net/deadspace/images/8/8e/HammondRemake.png/revision/latest', 'dead-space-zach_hammond.jpg'),
        # Destiny 2
        ('https://destiny.wiki.gallery/images/f/f3/Destiny2-CommanderZavala-Ingame-Render.jpg', 'destiny-2-zavala.jpg'),
        ('https://destiny.wiki.gallery/images/2/27/D2_S21_Ikora_Rey_Artist_Reference.jpg', 'destiny-2-ikora_rey.jpg'),
        ('https://destiny.wiki.gallery/images/a/a2/Cayde_Face.jpg', 'destiny-2-cayde-6.jpg'),
        ('https://destiny.wiki.gallery/images/c/c1/Destiny_2_The_Witness_Portrait.png', 'destiny-2-the_witness.jpg'),
        # RDR2
        ('https://www.creativeuncut.com/gallery-34/art/rdr2-arthur-morgan-portrait.jpg', 'rdr2-arthur_morgan.jpg'),
        ('https://www.creativeuncut.com/gallery-34/art/rdr2-john-marston.jpg', 'rdr2-john_marston.jpg'),
        ('https://www.creativeuncut.com/gallery-34/art/rdr2-dutch-van-der-linde.jpg', 'rdr2-dutch_van_der_linde.jpg'),
        ('https://www.creativeuncut.com/gallery-34/art/rdr2-sadie-adler.jpg', 'rdr2-sadie_adler.jpg'),
        # FF7 Remake
        ('https://www.creativeuncut.com/gallery-46/art/ff7r-cloud-strife.jpg', 'ff7-remake-cloud_strife.jpg'),
        ('https://www.creativeuncut.com/gallery-46/art/ff7r-barret-wallace.jpg', 'ff7-remake-barret_wallace.jpg'),
        ('https://www.creativeuncut.com/gallery-46/art/ff7r-aerith-gainsborough.jpg', 'ff7-remake-aerith_gainsborough.jpg'),
        # Portal 2
        ('https://www.creativeuncut.com/gallery-16/art/p2-glados.jpg', 'portal-2-glados.jpg'),
        ('https://www.creativeuncut.com/gallery-16/art/p2-wheatley.jpg', 'portal-2-wheatley.jpg'),
        ('https://www.creativeuncut.com/gallery-16/art/p2-chell.jpg', 'portal-2-chell.jpg'),
        ('https://static.wikia.nocookie.net/portalwiki/images/6/6c/Cave_Johnson.png/revision/latest', 'portal-2-cave_johnson.jpg'),
        # Metro Exodus
        ('https://www.creativeuncut.com/gallery-35/art/me-artyom.jpg', 'metro-exodus-artyom.jpg'),
        ('https://www.creativeuncut.com/gallery-35/art/me-anna.jpg', 'metro-exodus-anna_mel\'nikova.jpg'),
        ('https://static.wikia.nocookie.net/metro/images/e/ed/Sams_story-portrait.png/revision/latest', 'metro-exodus-sam.jpg'),
        # Fallout 4
        ('https://www.creativeuncut.com/gallery-29/art/f4-paladin-danse.jpg', 'fallout-4-paladin_danse.jpg'),
        ('https://www.creativeuncut.com/gallery-29/art/f4-piper.jpg', 'fallout-4-piper_wright.jpg'),
        # Silent Hill 2
        ('https://www.creativeuncut.com/gallery-75/art/sh2r-james-sunderland.jpg', 'silent-hill-2-james_sunderland.jpg'),
        ('https://www.creativeuncut.com/gallery-75/art/sh2r-maria.jpg', 'silent-hill-2-maria.jpg'),
        ('https://static.wikia.nocookie.net/silent-hill/images/1/14/MarySH2R.png/revision/latest', 'silent-hill-2-mary_shepherd-sunderland.jpg'),
        ('https://static.wikia.nocookie.net/silent-hill/images/c/cf/AngelaSH2R.png/revision/latest', 'silent-hill-2-angela_orosco.jpg'),
        # CoD MW
        ('https://static.wikia.nocookie.net/callofduty/images/e/ec/Soap_Selection_MWII.png/revision/latest', 'cod-mw-john_mactavish_(reboot).jpg'),
        ('https://static.wikia.nocookie.net/callofduty/images/c/ca/Ghost_Selection_MWII.png/revision/latest', 'cod-mw-simon_riley_(reboot).jpg'),
        # Persona 5
        ('https://www.creativeuncut.com/gallery-31/art/p5-protagonist.jpg', 'persona-5-protagonist_(persona_5).jpg'),
        ('https://www.creativeuncut.com/gallery-31/art/p5-ann-takamaki.jpg', 'persona-5-ann_takamaki.jpg'),
        ('https://www.creativeuncut.com/gallery-31/art/p5-ryuji-sakamoto.jpg', 'persona-5-ryuji_sakamoto.jpg'),
        ('https://www.creativeuncut.com/gallery-31/art/p5-morgana.jpg', 'persona-5-morgana.jpg'),
        # Crysis
        ('https://static.wikia.nocookie.net/crysis/images/2/22/PsychoCrysis3.png/revision/latest', 'crysis-michael_psycho_sykes.jpg'),
        ('https://static.wikia.nocookie.net/crysis/images/e/ea/Prophet_Nano3.png/revision/latest', 'crysis-laurence_prophet_barnes.jpg'),
        # TLOU2
        ('https://www.creativeuncut.com/gallery-37/art/tlou2-ellie.jpg', 'tlou2-ellie_(the_last_of_us_part_ii).jpg'),
        # Wolfenstein 2
        ('https://www.creativeuncut.com/gallery-32/art/w2-seth-roth.jpg', 'wolfenstein-2-seth_roth.jpg'),
        # Others
        ('https://static.wikia.nocookie.net/soma/images/7/77/Wau_core_as_seen_ingame.jpg/revision/latest', 'soma-the_wau.jpg'),
        ('https://static.wikia.nocookie.net/phasmophobia/images/1/1a/Player_Character.png/revision/latest', 'phasmophobia-ghost_hunter.jpg'),
    ]

    for url, filename in sources:
        download_with_curl(url, os.path.join(base, filename))

if __name__ == "__main__":
    process()
