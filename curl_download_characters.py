import os
import subprocess
import re

def download_with_curl(url, save_path):
    try:
        # Use a real browser user agent and referer
        cmd = [
            'curl',
            '-L',
            '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            '-e', 'https://www.google.com/',
            '-o', save_path,
            url
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"Downloaded: {save_path}")
            return True
        else:
            print(f"Failed curl: {result.stderr}")
            return False
    except Exception as e:
        print(f"Error: {e}")
        return False

def process():
    base_dir = '/Users/user/Downloads/Vrezh/public/assets/characters'
    os.makedirs(base_dir, exist_ok=True)
    
    # Stable links found / known
    stable_sources = [
        ('https://www.creativeuncut.com/gallery-58/art/al-wraith.jpg', 'apex-legends-wraith.jpg'),
        ('https://www.creativeuncut.com/gallery-58/art/al-bloodhound.jpg', 'apex-legends-bloodhound.jpg'),
        ('https://www.creativeuncut.com/gallery-58/art/al-gibraltar.jpg', 'apex-legends-gibraltar.jpg'),
        ('https://www.creativeuncut.com/gallery-58/art/al-lifeline.jpg', 'apex-legends-lifeline.jpg'),
        ('https://www.creativeuncut.com/gallery-74/art/hi-master-chief.jpg', 'halo-infinite-john-117.jpg'),
        ('https://www.creativeuncut.com/gallery-77/art/fc6-anton-castillo.jpg', 'far-cry-6-antón_castillo.jpg'),
        ('https://www.creativeuncut.com/gallery-46/art/ff7r-tifa-lockhart.jpg', 'ff7-remake-tifa_lockhart.jpg'),
        ('https://static.wikia.nocookie.net/residentevil/images/a/a9/Alcina_Dimitrescu_render.png/revision/latest', 're-village-alcina_dimitrescu.jpg'),
        ('https://static.wikia.nocookie.net/baldursgate3/images/d/d1/Astarion_Portrait.png/revision/latest', 'baldur\'s-gate-3-astarion.jpg'),
        ('https://static.wikia.nocookie.net/baldursgate3/images/6/6d/Lae%27zel_Portrait.png/revision/latest', 'baldur\'s-gate-3-lae\'zel.jpg'),
        ('https://static.wikia.nocookie.net/baldursgate3/images/b/b3/Shadowheart_Portrait.png/revision/latest', 'baldur\'s-gate-3-shadowheart.jpg'),
        ('https://static.wikia.nocookie.net/metro/images/3/30/Exodus_Artyom.png/revision/latest', 'metro-exodus-artyom.jpg'),
        ('https://static.wikia.nocookie.net/half-life/images/d/d1/Gordon_Freeman_HD_facemap.jpg/revision/latest', 'half-life-2-gordon_freeman.jpg'),
        ('https://static.wikia.nocookie.net/masseffect/images/c/ce/MELE_Shepard_Male.png/revision/latest', 'mass-effect-commander_shepard.jpg'),
    ]

    for url, filename in stable_sources:
        save_path = os.path.join(base_dir, filename)
        download_with_curl(url, save_path)

if __name__ == "__main__":
    process()
