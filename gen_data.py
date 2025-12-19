
import json

def gen_books():
    books = [
        ("Atomic Habits", "Self-improvement", "James Clear", "atomic-habits.jpg"),
        ("Rich Dad Poor Dad", "Business", "Robert Kiyosaki", "rich-dad-poor-dad.jpg"),
        ("Sapiens", "Science", "Yuval Noah Harari", "sapiens.jpg"),
        ("The Alchemist", "Literature", "Paulo Coelho", "alchemist.jpg"),
        ("Zero to One", "Business", "Peter Thiel", "zero-to-one.jpg"),
        ("1984", "Literature", "George Orwell", "1984.jpg"),
        ("Deep Work", "Business", "Cal Newport", "deep-work.jpg"),
        ("Think and Grow Rich", "Self-improvement", "Napoleon Hill", "think-grow-rich.jpg"),
        ("The Psychology of Money", "Business", "Morgan Housel", "psy-money.jpg"),
        ("Shoe Dog", "Business", "Phil Knight", "shoe-dog.jpg"),
        ("Can't Hurt Me", "Sport", "David Goggins", "can-hurt-me.jpg"),
        ("Dune", "Literature", "Frank Herbert", "dune.jpg"),
        ("Cosmos", "Science", "Carl Sagan", "cosmos.jpg"),
        ("Brief Answers to Big Questions", "Science", "Stephen Hawking", "brief-answers.jpg"),
        ("The 7 Habits of Highly Effective People", "Self-improvement", "Stephen Covey", "7-habits.jpg"),
        ("How to Win Friends and Influence People", "Self-improvement", "Dale Carnegie", "win-friends.jpg"),
        ("The Subtle Art of Not Giving a F*ck", "Self-improvement", "Mark Manson", "subtle-art.jpg"),
        ("Mindset", "Self-improvement", "Carol Dweck", "mindset.jpg"),
        ("The Lean Startup", "Business", "Eric Ries", "lean-startup.jpg"),
        ("Mamba Mentality", "Sport", "Kobe Bryant", "mamba-mentality.jpg"),
        ("Influence", "Business", "Robert Cialdini", "influence.jpg"),
        ("Good to Great", "Business", "Jim Collins", "good-to-great.jpg"),
        ("The 4-Hour Workweek", "Business", "Tim Ferriss", "4-hour-workweek.jpg"),
        ("Grit", "Self-improvement", "Angela Duckworth", "grit.jpg"),
        ("Start with Why", "Business", "Simon Sinek", "start-with-why.jpg"),
        ("Man's Search for Meaning", "Self-improvement", "Viktor Frankl", "man-search-meaning.jpg"),
        ("Thinking, Fast and Slow", "Science", "Daniel Kahneman", "thinking-fast-slow.jpg"),
        ("Silent Spring", "Science", "Rachel Carson", "silent-spring.jpg"),
        ("The Selfish Gene", "Science", "Richard Dawkins", "selfish-gene.jpg"),
        ("Guns, Germs, and Steel", "Science", "Jared Diamond", "guns-germs-steel.jpg"),
        ("The Hobbit", "Literature", "J.R.R. Tolkien", "hobbit.jpg"),
        ("The Great Gatsby", "Literature", "F. Scott Fitzgerald", "great-gatsby.jpg"),
        ("To Kill a Mockingbird", "Literature", "Harper Lee", "to-kill-mockingbird.jpg"),
        ("The Catcher in the Rye", "Literature", "J.D. Salinger", "catcher-rye.jpg"),
        ("Brave New World", "Literature", "Aldous Huxley", "brave-new-world.jpg"),
        ("Pride and Prejudice", "Literature", "Jane Austen", "pride-prejudice.jpg"),
        ("Ulysses", "Literature", "James Joyce", "ulysses.jpg"),
        ("Lolita", "Literature", "Vladimir Nabokov", "lolita.jpg"),
        ("The Grapes of Wrath", "Literature", "John Steinbeck", "grapes-wrath.jpg"),
        ("Moby Dick", "Literature", "Herman Melville", "moby-dick.jpg"),
        ("Meditations", "Literature", "Marcus Aurelius", "meditations.jpg"),
        ("The Power of Now", "Self-improvement", "Eckhart Tolle", "power-now.jpg"),
        ("Extreme Ownership", "Business", "Jocko Willink", "extreme-ownership.jpg"),
        ("Daring Greatly", "Self-improvement", "Brené Brown", "daring-greatly.jpg"),
        ("Open", "Sport", "Andre Agassi", "open.jpg"),
        ("Relentless", "Sport", "Tim Grover", "relentless.jpg"),
        ("Eleven Rings", "Sport", "Phil Jackson", "eleven-rings.jpg"),
        ("The Jordan Rules", "Sport", "Sam Smith", "jordan-rules.jpg"),
        ("Finding Ultra", "Sport", "Rich Roll", "finding-ultra.jpg"),
        ("Born to Run", "Sport", "Christopher McDougall", "born-to-run.jpg")
    ]
    final_books = []
    for title, cat, author, img in books:
        final_books.append({
            "id": title.lower().replace(" ", "-").replace(",", ""),
            "title": title,
            "category": cat,
            "author": author,
            "image": f"/assets/books/{img}",
            "rating": "4.8/5",
            "description": f"A comprehensive guide to {title} by {author}.",
            "buyLink": "https://amazon.com"
        })
    return final_books

def gen_films():
    films = [
        ("Inception", "Sci-Fi", "2010", "inception.jpg"),
        ("Interstellar", "Sci-Fi", "2014", "interstellar.jpg"),
        ("The Dark Knight", "Thriller", "2008", "dark-knight.jpg"),
        ("The Matrix", "Sci-Fi", "1999", "matrix.jpg"),
        ("The Godfather", "Crime", "1972", "godfather.jpg"),
        ("Parasite", "Thriller", "2019", "parasite.jpg"),
        ("Pulp Fiction", "Crime", "1994", "pulp-fiction.jpg"),
        ("Avengers Endgame", "Sci-Fi", "2019", "avengers-endgame.jpg"),
        ("Fight Club", "Thriller", "1999", "fight-club.jpg"),
        ("Gladiator", "Thriller", "2000", "gladiator.jpg"),
        ("Get Out", "Horror", "2017", "get-out.jpg"),
        ("Hereditary", "Horror", "2018", "hereditary.jpg"),
        ("The Shining", "Horror", "1980", "shining.jpg"),
        ("The Fellowship of the Ring", "Fantasy", "2001", "lotr-fellowship.jpg"),
        ("Goodfellas", "Crime", "1990", "goodfellas.jpg"),
        ("Seven", "Thriller", "1995", "seven.jpg"),
        ("Silence of the Lambs", "Thriller", "1991", "silence-lambs.jpg"),
        ("Shutter Island", "Thriller", "2010", "shutter-island.jpg"),
        ("Gone Girl", "Thriller", "2014", "gone-girl.jpg"),
        ("Blade Runner 2049", "Sci-Fi", "2017", "blade-runner-2049.jpg"),
        ("Arrival", "Sci-Fi", "2016", "arrival.jpg"),
        ("Eternal Sunshine", "Sci-Fi", "2004", "eternal-sunshine.jpg"),
        ("Dune 2021", "Sci-Fi", "2021", "dune-2021.jpg"),
        ("Ex Machina", "Sci-Fi", "2014", "ex-machina.jpg"),
        ("Tenet", "Sci-Fi", "2020", "tenet.jpg"),
        ("Pan Labyrinth", "Fantasy", "2006", "pan-labyrinth.jpg"),
        ("Spirited Away", "Fantasy", "2001", "spirited-away.jpg"),
        ("Harry Potter", "Fantasy", "2001", "harry-potter-1.jpg"),
        ("The Princess Bride", "Fantasy", "1987", "princess-bride.jpg"),
        ("Stardust", "Fantasy", "2007", "stardust.jpg"),
        ("Psycho", "Horror", "1960", "psycho.jpg"),
        ("Alien", "Horror", "1979", "alien.jpg"),
        ("The Thing", "Horror", "1982", "the-thing.jpg"),
        ("Scream", "Horror", "1996", "scream.jpg"),
        ("Midsommar", "Horror", "2019", "midsommar.jpg"),
        ("The Conjuring", "Horror", "2013", "conjuring.jpg"),
        ("The Exorcist", "Horror", "1973", "exorcist.jpg"),
        ("The Departed", "Crime", "2006", "departed.jpg"),
        ("No Country for Old Men", "Crime", "2007", "no-country.jpg"),
        ("Usual Suspects", "Crime", "1995", "usual-suspects.jpg"),
        ("Casino", "Crime", "1995", "casino.jpg"),
        ("Reservoir Dogs", "Crime", "1992", "reservoir-dogs.jpg"),
        ("Zodiac", "Crime", "2007", "zodiac.jpg"),
        ("American Gangster", "Crime", "2007", "american-gangster.jpg"),
        ("Heat", "Crime", "1995", "heat.jpg"),
        ("Primal Fear", "Thriller", "1996", "primal-fear.jpg"),
        ("The Prestige", "Thriller", "2006", "the-prestige.jpg"),
        ("Memento", "Thriller", "2000", "memento.jpg"),
        ("Oldboy", "Thriller", "2003", "oldboy.jpg"),
        ("Joker", "Thriller", "2019", "joker.jpg")
    ]
    final_films = []
    for title, cat, year, img in films:
        final_films.append({
            "id": title.lower().replace(" ", "-"),
            "title": title,
            "category": cat,
            "year": year,
            "image": f"/assets/films/{img}",
            "rating": "8.5/10",
            "description": f"An epic {cat} story from {year}.",
            "buyLink": "https://kinopark.kz/en"
        })
    return final_films


def gen_games():
    games = [
        ("Elden Ring", "RPG", "FromSoftware", "elden-ring.jpg"),
        ("The Witcher 3", "RPG", "CD Projekt Red", "witcher-3.jpg"),
        ("God of War", "RPG", "Santa Monica", "god-of-war.jpg"),
        ("RDR2", "RPG", "Rockstar", "rdr2.jpg"),
        ("Doom Eternal", "FPS", "id Software", "doom-eternal.jpg"),
        ("Cyberpunk", "RPG", "CD Projekt Red", "cyberpunk.jpg"),
        ("RE Village", "Horror", "Capcom", "re-village.jpg"),
        ("Halo Infinite", "FPS", "343 Industries", "halo-infinite.jpg"),
        ("Bloodborne", "RPG", "FromSoftware", "bloodborne.jpg"),
        ("TLOU2", "Horror", "Naughty Dog", "tlou2.jpg"),
        ("Skyrim", "RPG", "Bethesda", "skyrim.jpg"),
        ("Fallout 4", "RPG", "Bethesda", "fallout4.jpg"),
        ("Mass Effect", "RPG", "BioWare", "mass-effect.jpg"),
        ("Persona 5", "RPG", "Atlus", "persona5.jpg"),
        ("Baldur's Gate 3", "RPG", "Larian", "bg3.jpg"),
        ("FF7 Remake", "RPG", "Square Enix", "ff7r.jpg"),
        ("Ghost of Tsushima", "RPG", "Sucker Punch", "ghost-tsushima.jpg"),
        ("Horizon Zero Dawn", "RPG", "Guerrilla", "horizon-zero-dawn.jpg"),
        ("Starfield", "RPG", "Bethesda", "starfield.jpg"),
        ("Disco Elysium", "RPG", "ZA/UM", "disco-elysium.jpg"),
        ("Destiny 2", "FPS", "Bungie", "destiny2.jpg"),
        ("Apex Legends", "FPS", "Respawn", "apex-legends.jpg"),
        ("Titanfall 2", "FPS", "Respawn", "titanfall2.jpg"),
        ("Half-Life 2", "FPS", "Valve", "half-life2.jpg"),
        ("Bioshock", "FPS", "Irrational", "bioshock.jpg"),
        ("Borderlands 3", "FPS", "Gearbox", "borderlands3.jpg"),
        ("Overwatch 2", "FPS", "Blizzard", "overwatch2.jpg"),
        ("Valorant", "FPS", "Riot", "valorant.jpg"),
        ("CoD MW", "FPS", "Infinity Ward", "cod-mw.jpg"),
        ("Battlefield 1", "FPS", "DICE", "battlefield1.jpg"),
        ("R6 Siege", "FPS", "Ubisoft", "r6-siege.jpg"),
        ("Far Cry 6", "FPS", "Ubisoft", "far-cry6.jpg"),
        ("Metro Exodus", "FPS", "4A Games", "metro-exodus.jpg"),
        ("Wolfenstein 2", "FPS", "MachineGames", "wolfenstein2.jpg"),
        ("Crysis", "FPS", "Crytek", "crysis.jpg"),
        ("Silent Hill 2", "Horror", "Bloober Team", "silent-hill2.jpg"),
        ("Dead Space", "Horror", "Motive", "dead-space.jpg"),
        ("Amnesia", "Horror", "Frictional", "amnesia.jpg"),
        ("Outlast 2", "Horror", "Red Barrels", "outlast2.jpg"),
        ("Alien Isolation", "Horror", "Creative Assembly", "alien-isolation.jpg"),
        ("Evil Within 2", "Horror", "Tango", "evil-within2.jpg"),
        ("Alan Wake 2", "Horror", "Remedy", "alan-wake2.jpg"),
        ("Phasmophobia", "Horror", "Kinetic", "phasmophobia.jpg"),
        ("Until Dawn", "Horror", "Supermassive", "until-dawn.jpg"),
        ("Little Nightmares 2", "Horror", "Tarsier", "little-nightmares2.jpg"),
        ("Layers of Fear", "Horror", "Bloober", "layers-of-fear.jpg"),
        ("SOMA", "Horror", "Frictional", "soma.jpg"),
        ("Fatal Frame", "Horror", "Koei Tecmo", "fatal-frame.jpg"),
        ("Dead by Daylight", "Horror", "Behaviour", "dead-by-daylight.jpg"),
        ("Portal 2", "FPS", "Valve", "portal2.jpg")
    ]
    final_games = []
    for title, cat, studio, img in games:
        final_games.append({
            "id": title.lower().replace(" ", "-"),
            "title": title,
            "category": cat,
            "studio": studio,
            "image": f"/assets/games/{img}",
            "rating": "9.0/10",
            "description": f"A ground-breaking {cat} experience from {studio}.",
            "lore": f"The world of {title} is rich with history and mystery.",
            "characters": [],
            "maps": []
        })
    return final_games

if __name__ == "__main__":
    data = {
        "books": gen_books(),
        "films": gen_films(),
        "games": gen_games()
    }
    with open("expanded_data.json", "w") as f:
        json.dump(data, f, indent=2)
    print("Generated 150 items in expanded_data.json")
