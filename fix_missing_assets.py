import os
import urllib.request
import ssl

def download_image(url, save_path):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        req = urllib.request.Request(url, headers=headers)
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context) as response, open(save_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Successfully downloaded {save_path}")
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def fix_final_five():
    missing = [
        ("https://cmsassets.rgpub.io/assets/v3/assets/bltb730eada453f19e6/blt62b66236b2b4bc66/65f2066d400277255152a51a/VALORANT_Logotype_V_Red.jpg", "/Users/user/Downloads/Vrezh/public/assets/games/valorant.jpg"),
        ("https://image.tmdb.org/t/p/w500/vGvG60Uv6B0S62Mh0Y39Y9o0LgC.jpg", "/Users/user/Downloads/Vrezh/public/assets/films/casino.jpg"),
        ("https://image.tmdb.org/t/p/w500/cu9Y0sJ8788fTpxX8qf0iLAn0vP.jpg", "/Users/user/Downloads/Vrezh/public/assets/films/pan-labyrinth.jpg"),
        ("https://image.tmdb.org/t/p/w500/1m3vH97HA9S78gtm97on7mJ1HLY.jpg", "/Users/user/Downloads/Vrezh/public/assets/films/scream.jpg"),
        ("https://image.tmdb.org/t/p/w500/7LEP9V9yisreYv08S97Sclm79pM.jpg", "/Users/user/Downloads/Vrezh/public/assets/films/midsommar.jpg")
    ]
    
    for url, save_path in missing:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        download_image(url, save_path)

if __name__ == "__main__":
    fix_final_five()
