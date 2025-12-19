import json

def generate_descriptions():
    mapping_path = '/Users/user/Downloads/Vrezh/character_mapping.json'
    
    # Base character set from the previous script
    mapping = {
        "elden-ring": {
            "Melina": "A mysterious maiden who assists the Tarnished on their journey to becomes Elden Lord.",
            "Malenia": "The Goddess of Rot and one of the most powerful demigods in the Lands Between.",
            "Ranni": "The Princess of the Carian Royal Family who seeks to bring an Age of Stars.",
            "Blaidd": "A half-wolf warrior and loyal shadow to Ranni the Witch."
        },
        "the-witcher-3": {
            "Geralt of Rivia": "A legendary Witcher known as the White Wolf, searching for his adopted daughter Ciri.",
            "Yennefer of Vengerberg": "A powerful sorceress and the true love of Geralt, searching for Ciri through magical means.",
            "Ciri": "The Child of Destiny with the Elder Blood, capable of traveling between worlds.",
            "Triss Merigold": "A talented sorceress and close ally to Geralt, known for her mastery of fire magic."
        },
        "god-of-war": {
            "Kratos": "The former God of War who has retired to the Norse realms to raise his son Atreus.",
            "Atreus": "Kratos's son, a skilled archer who is discovering his own divine heritage as Loki.",
            "Freya": "A Vanir goddess and former Queen of the Valkyries who has a complex history with Kratos.",
            "Baldur": "An Aesir god and son of Odin, blessed (or cursed) with invulnerability to all physical and magical harm."
        },
        "rdr2": {
            "Arthur Morgan": "A high-ranking member of the van der Linde gang, a man of few words but deep internal conflict.",
            "John Marston": "A former outlaw trying to go straight, father to Jack and husband to Abigail.",
            "Dutch van der Linde": "The idealistic and increasingly unstable leader of the van der Linde outlaw gang.",
            "Sadie Adler": "A widow turned fierce bounty hunter and close confidant of Arthur Morgan."
        },
        "doom-eternal": {
            "Doom Slayer": "The legendary warrior fueled by rage, dedicated to the eternal slaughter of demonic forces.",
            "Samuel Hayden": "An enigmatic cyborg and former director of the UAC who oversees the Slayer's mission.",
            "Khan Maykr": "The supreme leader of the Maykrs, seeking to save her people at any cost."
        },
        "cyberpunk": {
            "V (Character)": "A mercenary in Night City, dealing with a biochip containing the psyche of Johnny Silverhand.",
            "Johnny Silverhand": "A legendary rockerboy and anti-establishment rebel whose mind is trapped inside V's head.",
            "Jackie Welles": "A charismatic mercenary and V's best friend, dreaming of making it big in Night City.",
            "Judy Alvarez": "A technical genius and braindance specialist who becomes a close ally to V."
        },
        "re-village": {
            "Ethan Winters": "A father searching for his kidnapped daughter Rose in a mysterious and deadly village.",
            "Alcina Dimitrescu": "A giant noblewoman and one of the four lords of the village, known for her vampiric traits.",
            "Mother Miranda": "The enigmatic leader of the village who is worshiped by its inhabitants.",
            "Chris Redfield": "A veteran BSAA operative whose actions initially appear antagonistic to Ethan."
        },
        "halo-infinite": {
            "John-117": "The Master Chief, a legendary Spartan-II supersoldier and humanity's greatest hero.",
            "Cortana": "A highly advanced Al and former partner of the Master Chief, whose fate remains a mystery.",
            "The Weapon": "A new AI designed to replace Cortana and assist the Master Chief on Zeta Halo.",
            "Escharum": "The leader of the Banished, an older and highly skilled Brute warrior seeking a final battle."
        },
        "bloodborne": {
            "The Hunter": "A traveler who comes to Yharnam seeking Paleblood and becomes trapped in the Hunter's Dream.",
            "Plain Doll": "An animated doll in the Hunter's Dream who assists the Hunter in leveling up.",
            "Gehrman": "The first Hunter and the host of the Hunter's Dream, serving as a guide to newcomers.",
            "Father Gascoigne": "A former hunter of the church who has succumbed to the beast blood."
        },
        "tlou2": {
            "Ellie (The Last of Us Part II)": "A young woman seeking vengeance for a traumatic loss in a post-apocalyptic world.",
            "Abby Anderson": "A member of the WLF with her own tragic past, whose path crosses with Ellie's.",
            "Joel Miller": "A father figure to Ellie, whose past decisions have far-reaching consequences.",
            "Dina": "Ellie's companion and love interest, who accompanies her on her mission to Seattle."
        },
        "skyrim": {
            "Last Dragonborn": "The legendary hero with the soul of a dragon, destined to stop the world-eater Alduin.",
            "Alduin": "The World-Eater, a powerful dragon who seeks to bring about the end of the world.",
            "Paarthurnax": "An ancient dragon who helps the Dragonborn and leads the Greybeards.",
            "Balgruuf the Greater": "The Jarl of Whiterun, a pragmatic leader during the Skyrim civil war."
        },
        "fallout-4": {
            "Sole Survivor": "A parent who emerges from Vault 111 into the Commonwealth wasteland to find their lost son.",
            "Piper Wright": "A determined journalist in Diamond City who becomes a companion to the Sole Survivor.",
            "Nick Valentine": "A synth detective with the memories of a pre-war cop, operating a detective agency in Diamond City.",
            "Paladin Danse": "A dedicated officer of the Brotherhood of Steel, committed to their mission of technological preservation."
        },
        "mass-effect": {
            "Commander Shepard": "The first human Spectre and commander of the SSV Normandy, tasked with saving the galaxy.",
            "Garrus Vakarian": "A Turian former C-Sec officer and loyal companion to Shepard throughout the trilogy.",
            "Liara T'Soni": "An Asari archaeologist and biotic specialist who becomes an expert on the Protheans.",
            "Tali'Zorah": "A Quarian technical genius on her Pilgrimage who joins Shepard's crew."
        },
        "persona-5": {
            "Protagonist (Persona 5)": "The leader of the Phantom Thieves of Hearts, code-named Joker.",
            "Morgana": "A mysterious cat-like creature who serves as a guide to the Phantom Thieves.",
            "Ryuji Sakamoto": "A hot-headed former track star and founding member of the Phantom Thieves.",
            "Ann Takamaki": "A kind-hearted girl and member of the Phantom Thieves who uses fire magic."
        },
        "baldur's-gate-3": {
            "Shadowheart": "A cleric of Shar with a mysterious object and a hidden past.",
            "Astarion": "A high elf vampire spawn who has spent centuries as a slave to a cruel master.",
            "Gale": "A human wizard with a dangerous magical condition and an ambitious past.",
            "Lae'zel": "A fierce Githyanki warrior dedicated to her people and their mission to hunt mind flayers."
        },
        "ff7-remake": {
            "Cloud Strife": "A cold and distant mercenary and former member of SOLDIER, wielding the iconic Buster Sword.",
            "Tifa Lockhart": "A master of martial arts and member of the anti-Shinra group AVALANCHE.",
            "Aerith Gainsborough": "A flower girl from the Sector 5 slums with a mysterious connection to the planet.",
            "Barret Wallace": "The passionate leader of an AVALANCHE cell, fighting to save the planet from Shinra."
        },
        "ghost-of-tsushima": {
            "Jin Sakai": "The last surviving member of Clan Sakai, who must choose between his samurai code and his home.",
            "Lord Shimura": "The Jito of Tsushima and Jin's uncle, who values honor and the traditional way of the samurai.",
            "Yuna": "A nimble thief who helps Jin adopt the methods of the Ghost to fight the Mongol invasion.",
            "Khotun Khan": "The ruthless leader of the Mongol invasion of Tsushima, a master tactician."
        },
        "horizon-zero-dawn": {
            "Aloy": "A young hunter and outcast who discovers her origins and the true history of the world.",
            "Sylens": "A mysterious and highly intelligent wanderer who assists Aloy while pursuing his own agenda.",
            "Rost": "Aloy's adoptive father and a mentor who raised her in the wilds as an outcast.",
            "Erend": "A captain of the Vanguard and a loyal ally to Aloy in her journey."
        },
        "starfield": {
            "Sarah Morgan": "The leader of Constellation and a former soldier with a passion for exploration.",
            "Sam Coe": "A skilled pilot and former Space Ranger with a deep connection to the Freestar Collective.",
            "Barrett": "A brilliant scientist and explorer with a quick wit and a love for discovery.",
            "Andreja": "A mysterious member of Constellation with a complex past and unique skills."
        },
        "disco-elysium": {
            "Harrier Du Bois": "A troubled detective trying to solve a murder while dealing with amnesia and his own internal voices.",
            "Kim Kitsuragi": "Harry's patient and professional partner from another precinct, a steadying influence.",
            "Klaasje Amandou": "A mysterious woman and key witness in the murder investigation.",
            "Evrart Claire": "The corrupt but influential leader of the dockworkers' union in Martinaise."
        },
        "destiny-2": {
            "Zavala": "The Vanguard Commander and a Titan who has dedicated his life to protecting the Last City.",
            "Ikora Rey": "The Vanguard for Warlocks and a powerful master of the Void.",
            "Cayde-6": "The former Hunter Vanguard known for his wit and adventurous spirit.",
            "The Witness": "An ancient and powerful entity that is the ultimate antagonist of the Guardians."
        },
        "apex-legends": {
            "Wraith": "A skirmisher with the ability to travel through dimensions and hear voices from other worlds.",
            "Bloodhound": "A master tracker and legendary hunter, known for their connection to the Old Ways.",
            "Gibraltar": "A defensive legend dedicated to protecting his teammates on the battlefield.",
            "Lifeline": "A support legend and combat medic who uses her skills to save lives."
        },
        "titanfall-2": {
            "Jack Cooper": "A frontiersman turned pilot who forms a bond with the Titan BT-7274.",
            "BT-7274": "An Vanguard-class Titan and Jack Cooper's partner in their mission to stop the IMC.",
            "Kuben Blisk": "A ruthless mercenary leader and commander of the Apex Predators.",
            "Ash": "A simulacrum pilot and cold-blooded assassin who works for the Apex Predators."
        },
        "half-life-2": {
            "Gordon Freeman": "The silent protagonist and theoretical physicist who becomes a icon of the resistance.",
            "Alyx Vance": "A core member of the resistance and Gordon's close ally in his journey.",
            "G-Man": "An enigmatic and seemingly supernatural figure who monitors and manipulates Gordon.",
            "Barney Calhoun": "A former Black Mesa security guard and undercover resistance member."
        },
        "bioshock": {
            "Jack (BioShock)": "The protagonist who arrives in the underwater city of Rapture and discovers its dark secrets.",
            "Andrew Ryan": "The visionary and megalomaniacal founder of Rapture, who believes in a society without limits.",
            "Big Daddy": "Protecters of the Little Sisters, genetically enhanced humans in deep-sea diving suits.",
            "Little Sister": "Genetically modified girls who harvest ADAM from corpses in the ruins of Rapture."
        },
        "borderlands-3": {
            "Lilith": "The leader of the Crimson Raiders and a powerful Siren known as the Firehawk.",
            "Claptrap": "A wise-cracking and often annoying CL4P-TP general purpose robot.",
            "Zane": "A semi-retired corporate hitman with multiple gadgets and a sharp tongue.",
            "Amara": "A Siren and a champion of the people, capable of summoning powerful ethereal arms."
        },
        "overwatch-2": {
            "Tracer": "A time-traveling adventurer and former test pilot who uses her abilities to help others.",
            "Winston": "A brilliant genetically engineered gorilla and leader of the Overwatch team.",
            "Reaper": "A vengeful assassin with phantom-like abilities, formerly an Overwatch associate.",
            "Mei": "A climatologist and adventurer who uses weather-altering technology to protect the environment."
        },
        "cod-mw": {
            "John Price (Reboot)": "A legendary SAS officer and leader of Task Force 141.",
            "Simon Riley (Reboot)": "The iconic and mysterious Ghost, a master of stealth and tactical operations.",
            "John MacTavish (Reboot)": "Soap, a highly skilled demolitions expert and sniper.",
            "Kyle Garrick": "Gaz, a former police officer and key member of Task Force 141."
        },
        "battlefield-1": {
            "Frederick Bishop": "A grizzled veteran who mentors a young message runner during the Gallipoli campaign.",
            "Danny Edwards": "A young tank driver who learns the harsh realities of war on the Western Front.",
            "Luca Vincenzo Coccila": "An Italian Arditi soldier reflecting on his experiences in the Alps."
        },
        "r6-siege": {
            "Ash": "An FBI SWAT operator known for her explosive entry capabilities.",
            "Jäger": "A GSG 9 operator who specializes in defense and trophy systems.",
            "Thermite": "An FBI SWAT operator with powerful exothermic charges for breaching.",
            "Thatcher": "An SAS operator whose EMP grenades are essential for disabling enemy technology."
        },
        "far-cry-6": {
            "Dani Rojas": "The protagonist and revolutionary fighter seeking to liberate Yara from a dictator.",
            "Antón Castillo": "The ruthless dictator of Yara who seeks to preserve his family's legacy.",
            "Guapo": "Dani's loyal pet alligator and combat companion.",
            "Juan Cortez": "A legendary spymaster and revolutionary mentor to Dani."
        },
        "metro-exodus": {
            "Artyom": "The protagonist who leads a group of survivors out of the Moscow Metro in search of a new home.",
            "Anna Mel'nikova": "Artyom's wife and a highly skilled sniper in the Spartan Order.",
            "Miller": "The leader of the Spartan Order and a fatherly figure to Artyom and Anna.",
            "Sam": "A former US Marine and Spartan Ranger who dreams of returning to his homeland."
        },
        "wolfenstein-2": {
            "William Joseph Blazkowicz": "The legendary Nazi-slayer and leader of the American resistance.",
            "Anya Oliwa": "Blazkowicz's wife and a vital member of the resistance intelligence network.",
            "Frau Engel": "A high-ranking and sadistic Nazi officer who is the primary antagonist.",
            "Seth Roth": "A brilliant Jewish scientist and inventor who provides advanced technology to the resistance."
        },
        "crysis": {
            "Laurence \"Prophet\" Barnes": "The commander of Raptor Team and a veteran with a deep connection to the Nanosuit.",
            "Michael \"Psycho\" Sykes": "A member of Raptor Team known for his aggressive and effective combat style.",
            "Nomad": "The protagonist of the first Crysis, a member of Raptor Team in a Nanosuit.",
            "Alcatraz": "A Marine who becomes the host for Prophet's Nanosuit in Crysis 2."
        },
        "silent-hill-2": {
            "James Sunderland": "A man who travels to Silent Hill after receiving a letter from his deceased wife.",
            "Mary Shepherd-Sunderland": "James's wife who died of a long illness three years before the start of the game.",
            "Maria": "A mysterious woman James meets in Silent Hill who bear a striking resemblance to Mary.",
            "Angela Orosco": "A troubled young woman James encounter in Silent Hill, searching for her mother."
        },
        "dead-space": {
            "Isaac Clarke": "An engineer trapped on a spaceship infested with horrific necro-morphs.",
            "Nicole Brennan": "Isaac's girlfriend and a medical officer on the USG Ishimura.",
            "Kendra Daniels": "A computer specialist and member of the Ishimura search and rescue team.",
            "Zach Hammond": "The chief security officer and leader of the Search and Rescue mission."
        },
        "amnesia": {
            "Daniel": "A man who awakens in a dark castle with no memories of his past, pursued by a shadowy presence.",
            "Alexander of Brennenburg": "The lord of the castle who has been performing dark rituals to prolong his life.",
            "Agrippa": "An ancient scholar trapped in the castle, who guides Daniel through the darkness."
        },
        "outlast-2": {
            "Blake Langermann": "A cameraman and journalist who becomes stranded in a remote cultist-controlled village.",
            "Lynn Langermann": "Blake's wife and a journalist who is kidnapped by the cultists.",
            "Sullivan Knoth": "The charismatic and fanatical leader of the cult in Temple Gate.",
            "Val": "The leader of the Heretics, a group that has broken away from Knoth's cult."
        },
        "alien-isolation": {
            "Amanda Ripley": "The daughter of Ellen Ripley, searching for the truth about her mother's disappearance.",
            "Christopher Samuels": "A Weyland-Yutani synthetic who assists Amanda in her journey.",
            "Ricardo": "A security officer on Sevastopol Station who helps Amanda survive the Alien.",
            "Working Joe": "Hostile synthetic assistants on Sevastopol Station who have turned on the crew."
        },
        "evil-within-2": {
            "Sebastian Castellanos": "A detective who enters a nightmarish simulated world to save his daughter Lily.",
            "Juli Kidman": "Sebastian's former partner and an agent of Mobius who assists him from the outside.",
            "Theodore Wallace": "A manipulative cult leader who seek to control the STEM system.",
            "Stefano Valentini": "A sadistic artist who use the nightmarish creatures of STEM for his work."
        },
        "alan-wake-2": {
            "Alan Wake": "A best-selling horror writer who has been trapped in a dark dimension for thirteen years.",
            "Saga Anderson": "An FBI profiler investigating a series of ritualistic murders in the Pacific Northwest.",
            "Alex Casey": "Saga's partner and an FBI agent who is also a character in Alan Wake's novels.",
            "Mr. Door": "An enigmatic and powerful figure who exists in the dark dimension alongside Alan Wake."
        },
        "phasmophobia": {
            "Ghost Hunter": "The player character, a member of a team investigating paranormal activity.",
            "Spirit": "The most common ghost type, but still very dangerous to inexperienced hunters.",
            "Wraith": "A ethereal ghost that can travel through walls and tracks by sound.",
            "Phantom": "A ghost that can possess the living and cause deep fear in those who see it."
        },
        "until-dawn": {
            "Samantha Giddings": "A kind and resourceful girl who becomes a key leader of the group.",
            "Michael Munroe": "A charming and ambitious boy who must use his wits to survive the night.",
            "Joshua Washington": "A young man who has organized the winter getaway in memory of his sisters.",
            "Hannah Washington": "One of Josh's sisters whose disappearance a year earlier triggered the game's events."
        },
        "little-nightmares-2": {
            "Mono": "A young boy with a paper bag over his head who must navigate a distorted world.",
            "Six": "A girl in a yellow raincoat who becomes Mono's companion in his journey.",
            "The Hunter": "A giant and formidable hunter who pursues Mono and Six in the beginning.",
            "The Teacher": "A long-necked and terrifying teacher who guards the school."
        },
        "layers-of-fear": {
            "The Painter": "The protagonist, a struggling artist whose descent into madness is the core of the game.",
            "The Musician": "The Painter's wife, a talented pianist whose career was cut short by a tragic accident.",
            "The Artist's Daughter": "A young girl caught in the middle of her parents' deteriorating relationship."
        },
        "soma": {
            "Simon Jarrett": "A man who undergoes a brain scan and awakens in a decaying underwater research facility.",
            "Catherine Chun": "A scientist at the facility who guide Simon through the AI-controlled research center.",
            "The WAU": "An artificial intelligence that has taken over the facility and corrupted the inhabitants.",
            "Brandon Wan": "A former security chief who is now a semi-sentient corrupted being."
        },
        "fatal-frame": {
            "Mio Amakura": "A young girl who visits a lost village where she is hunted by spirits.",
            "Mayu Amakura": "Mio's twin sister who has a mysterious connection to the village's spirits.",
            "Sae Kurosawa": "The vengeful spirit of a girl who was sacrificed in a tragic ritual in the village."
        },
        "dead-by-daylight": {
            "Evan MacMillan": "The Trapper, a powerful and iconic killer who uses bear traps to hunt survivors.",
            "Dwight Fairfield": "A survivor who is known for his leadership skills and ability to hide.",
            "Meg Thomas": "A fast and agile survivor who can outrun many killers.",
            "Claudette Morel": "A survivor with deep knowledge of healing and medical supplies."
        },
        "portal-2": {
            "Chell": "The silent protagonist who must use the portal gun to escape the Aperture Science facility.",
            "GLaDOS": "The cynical and manipulative AI that controls the testing chambers.",
            "Wheatley": "A talkative and initially helpful personality core who has his own hidden agenda.",
            "Cave Johnson": "The eccentric and ambitious founder of Aperture Science, heard through recordings."
        }
    }

    final_data = {}
    for game_id, characters in mapping.items():
        char_list = []
        for name, desc in characters.items():
            char_list.append({
                "name": name,
                "description": desc,
                "image": f"/assets/characters/{game_id}-{name.replace(' ', '_').replace('\"', '').lower()}.jpg"
            })
        final_data[game_id] = char_list

    with open('/Users/user/Downloads/Vrezh/character_descriptions_mapping.json', 'w') as f:
        json.dump(final_data, f, indent=2)
    print("Successfully generated detailed character descriptions.")

if __name__ == "__main__":
    generate_descriptions()
