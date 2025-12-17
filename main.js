// Data Store with Rich Content
const booksData = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    category: "Self-improvement",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    rating: "4.9/5",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves continually not because you don't want to change, but because you have the wrong system for change.",
    buyLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    category: "Business",
    author: "Robert Kiyosaki",
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    rating: "4.7/5",
    description: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    buyLink: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194"
  },
  {
    id: "sapiens",
    title: "Sapiens",
    category: "Science",
    author: "Yuval Noah Harari",
    image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    rating: "4.6/5",
    description: "One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? In this bold and provocative book, Dr. Yuval Noah Harari explores who we are, how we got here, and where we’re going. Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power, and our future.",
    buyLink: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095"
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    category: "Literature",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    rating: "4.8/5",
    description: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids. Early into his journey, he meets an old king named Melchizedek, or the King of Salem, who tells him to sell his sheep to travel to Egypt and introduces the idea of a Personal Legend.",
    buyLink: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    category: "Business",
    author: "Peter Thiel",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    rating: "4.5/5",
    description: "The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine. If you are copying these people, you aren't learning from them. Zero to One presents at once an optimistic view of the future of progress in America and a new way of thinking about innovation: it starts by learning to ask the questions that lead you to find value in unexpected places.",
    buyLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
  },
  {
    id: "1984",
    title: "1984",
    category: "Literature",
    author: "George Orwell",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    rating: "4.9/5",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience in modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell.",
    buyLink: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934"
  },
  {
    id: "deep-work",
    title: "Deep Work",
    category: "Business",
    author: "Cal Newport",
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    rating: "4.7/5",
    description: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep Work makes the case that in almost any profession, cultivating a deep work ethic will produce massive benefits. He then presents a rigorous training regimen, presented as a series of four \"rules,\" for transforming your mind and habits to support this skill.",
    buyLink: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692"
  },
  {
    id: "think-grow-rich",
    title: "Think and Grow Rich",
    category: "Self-improvement",
    author: "Napoleon Hill",
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
    rating: "4.6/5",
    description: "Think and Grow Rich has been called the \"Granddaddy of All Motivational Literature.\" It was the first book to boldly ask, \"What makes a winner?\" The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself. The most famous of all teachers of success spent a fortune and the better part of a lifetime of effort to produce the \"Law of Success\" philosophy that forms the basis of his books and that is so powerfully summarized in this one.",
    buyLink: "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331"
  },
  {
    id: "psy-money",
    title: "The Psychology of Money",
    category: "Business",
    author: "Morgan Housel",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    rating: "4.8/5",
    description: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together.",
    buyLink: "https://amazon.com"
  },
  {
    id: "shoe-dog",
    title: "Shoe Dog",
    category: "Business",
    author: "Phil Knight",
    image: "https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg",
    rating: "4.9/5",
    description: "In this candid and riveting memoir, for the first time ever, Nike founder and board chairman Phil Knight shares the inside story of the company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands.",
    buyLink: "https://amazon.com"
  },
  {
    id: "can-hurt-me",
    title: "Can't Hurt Me",
    category: "Sport",
    author: "David Goggins",
    image: "https://covers.openlibrary.org/b/isbn/9781544512273-L.jpg",
    rating: "4.9/5",
    description: "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes.",
    buyLink: "https://amazon.com"
  },
  {
    id: "dune",
    title: "Dune",
    category: "Literature",
    author: "Frank Herbert",
    image: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",
    rating: "4.8/5",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.",
    buyLink: "https://amazon.com"
  },
  {
    id: "cosmos",
    title: "Cosmos",
    category: "Science",
    author: "Carl Sagan",
    image: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
    rating: "4.9/5",
    description: "Cosmos is one of the bestselling science books of all time. In clear-eyed prose, Sagan reveals a jewel-like blue world inhabited by a life form that is just beginning to discover its own identity and to venture into the vast ocean of space.",
    buyLink: "https://amazon.com"
  },
  {
    id: "brief-answers",
    title: "Brief Answers to Big Questions",
    category: "Science",
    author: "Stephen Hawking",
    image: "https://covers.openlibrary.org/b/isbn/9781984819192-L.jpg",
    rating: "4.7/5",
    description: "In his final book, Stephen Hawking offers his most personal thoughts on the biggest questions facing humankind. Is God real? How did it all begin? Is there other intelligent life in the universe? Will artificial intelligence outsmart us?",
    buyLink: "https://amazon.com"
  },
  {
    id: "money-psych",
    title: "The Psychology of Money",
    category: "Business",
    author: "Morgan Housel",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    rating: "4.8/5",
    description: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.",
    buyLink: "https://amazon.com"
  }
];

const filmsData = [
  {
    id: "inception",
    title: "Inception",
    category: "Sci-Fi",
    year: "2010",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: "8.8/10",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    category: "Sci-Fi",
    year: "2014",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    rating: "8.7/10",
    description: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    category: "Thriller",
    year: "2008",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: "9.0/10",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "matrix",
    title: "The Matrix",
    category: "Sci-Fi",
    year: "1999",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: "8.7/10",
    description: "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "godfather",
    title: "The Godfather",
    category: "Crime",
    year: "1972",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: "9.2/10",
    description: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "parasite",
    title: "Parasite",
    category: "Thriller",
    year: "2019",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: "8.5/10",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Creating a new genre of its own, this dark comedy thriller tells the story of two families from opposite ends of the socioeconomic spectrum. A quintessential movie about the rich and poor, masters and servants, and the subtle lines that divide us all.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    category: "Crime",
    year: "1994",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: "8.9/10",
    description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny' (Amanda Plummer).",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    category: "Sci-Fi",
    year: "2019",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    rating: "8.4/10",
    description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "fight-club",
    title: "Fight Club",
    category: "Thriller",
    year: "1999",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
    rating: "8.8/10",
    description: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "gladiator",
    title: "Gladiator",
    category: "Thriller",
    year: "2000",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    rating: "8.5/10",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "get-out",
    title: "Get Out",
    category: "Horror",
    year: "2017",
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    rating: "7.7/10",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "hereditary",
    title: "Hereditary",
    category: "Horror",
    year: "2018",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
    rating: "7.3/10",
    description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "shining",
    title: "The Shining",
    category: "Horror",
    year: "1980",
    image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: "8.4/10",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "lotr-fellowship",
    title: "The Fellowship of the Ring",
    category: "Fantasy",
    year: "2001",
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    rating: "8.8/10",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    category: "Crime",
    year: "1990",
    image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    rating: "8.7/10",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    buyLink: "https://kinopark.kz/en"
  }
];

const gamesData = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    category: "RPG",
    studio: "FromSoftware",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    rating: "9.5/10",
    description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin, who provided the material for the game's setting. Players traverse the Lands Between, using their steed Torrent to explore a vast, seamless open world full of dungeons, catacombs, and colossal enemies.",
    lore: "The Golden Order has been broken. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will. Now, the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between.",
    characters: [
      { name: "Melina", image: "./assets/characters/melina.jpg" },
      { name: "Malenia", image: "./assets/characters/malenia.jpg" },
      { name: "Ranni", image: "./assets/characters/ranni.jpg" },
      { name: "Blaidd", image: "./assets/characters/blaidd.jpg" }
    ],
    maps: [
      { name: "Limgrave", image: "https://static.wikia.nocookie.net/eldenring/images/5/5e/Map_Limgrave_West.jpg" },
      { name: "Caelid", image: "https://static.wikia.nocookie.net/eldenring/images/4/4b/Map_Caelid.jpg" }
    ]
  },
  {
    id: "witcher-3",
    title: "The Witcher 3: Wild Hunt",
    category: "RPG",
    studio: "CD Projekt Red",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    rating: "9.8/10",
    description: "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as the professional monster hunter, Geralt of Rivia. Tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    lore: "The Conjunction of the Spheres traps creatures from other dimensions in our world. As the Northern Kingdoms bleed in the chaos of war, a far deadlier threat rises: The Wild Hunt, a spectral cavalcade of riders from another world, is on the hunt for Ciri, a child of the Elder Blood. Geralt of Rivia, a master monster slayer, must track her down before the Hunt can claim her powers to open the gates between worlds.",
    characters: [
      { name: "Geralt", image: "./assets/characters/geralt.jpg" },
      { name: "Ciri", image: "./assets/characters/ciri.jpg" },
      { name: "Yennefer", image: "./assets/characters/yennefer.jpg" }
    ],
    maps: [
      { name: "Velen", image: "https://static.wikia.nocookie.net/witcher/images/d/df/Map_of_Velen_%28The_Witcher_3%29.png" },
      { name: "Skellige", image: "https://static.wikia.nocookie.net/witcher/images/1/1b/Map_of_Skellige_%28The_Witcher_3%29.png" }
    ]
  },
  {
    id: "god-of-war",
    title: "God of War (2018)",
    category: "RPG",
    studio: "Santa Monica Studio",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    rating: "9.7/10",
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew.",
    lore: "Having left his vengeance against the gods of Olympus behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. But after burying his wife Faye, he finds himself thrust into a dangerous journey with his son Atreus to spread her ashes from the highest peak in all the realms. The duo must navigate the threats of the Aesir gods, including the relentless Baldur, while uncovering the truth of Atreus's giant heritage.",
    characters: [
      { name: "Kratos", image: "./assets/characters/kratos.jpg" },
      { name: "Atreus", image: "./assets/characters/atreus.jpg" }
    ],
    maps: [
      { name: "Midgard", image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Norwegian_exercise_Joint_Viking_in_Arctic_landscape_of_Finnmark_%281%29.jpg" }
    ]
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    category: "RPG",
    studio: "Rockstar Games",
    image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    rating: "9.8/10",
    description: "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
    lore: "The year is 1899. The era of the gunslinger and the outlaw is passing into history. After a botched ferry heist in Blackwater, the Van der Linde gang is forced to flee across the snowy mountains of Ambarino. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America to survive. Arthur Morgan must choose between his own ideals and loyalty to the gang who raised him.",
    characters: [
      { name: "Arthur Morgan", image: "./assets/characters/arthur.jpg" },
      { name: "Dutch", image: "./assets/characters/dutch.jpg" }
    ],
    maps: [
      { name: "The Heartlands", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Wild_Flowers_in_Utah_West_Desert_-_panoramio.jpg" }
    ]
  },
  {
    id: "doom-eternal",
    title: "Doom Eternal",
    category: "FPS",
    studio: "id Software",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
    rating: "9/10",
    description: "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. It is the sequel to Doom (2016). Experience the ultimate combination of speed and power as you rip and tear your way across dimensions with the next leap in push-forward, first-person combat.",
    lore: "The Khan Maykr has allied with Hell to consume Earth for its energy (Argent Energy). The Doom Slayer, a legendary warrior of the Night Sentinels, returns from his fortress in orbit to stop the demonic invasion that has already wiped out sixty percent of the planet's population. He must hunt down the three Hell Priests: Deag Nilox, Deag Ranak, and Deag Grav, to severe the connection between dimensions and save humanity from extinction.",
    characters: [
      { name: "Doom Slayer", image: "./assets/characters/doom_slayer.jpg" },
      { name: "Marauder", image: "./assets/characters/marauder.jpg" }
    ],
    maps: [
      { name: "Phobos", image: "https://static.wikia.nocookie.net/doom/images/7/74/Phobos.png" }
    ]
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk 2077",
    category: "RPG",
    studio: "CD Projekt Red",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    rating: "8.5/10",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and updated for next-gen consoles, it features new free additional content, customize your character and playstyle, take on jobs, build a reputation, and unlock upgrades.",
    lore: "In the dystopian megalopolis of Night City, ruled by corporations like Arasaka and Militech, power and body modification are everything. V, a mercenary outlaw, takes a job to steal a unique biochip known as the Relic to secure immortality. But the heist goes wrong, and the chip overwrites V's mind with the engram of long-dead rockerboy terrorist Johnny Silverhand. V must find a way to remove the chip before it kills them.",
    characters: [
      { name: "V", image: "./assets/characters/v.jpg" },
      { name: "Johnny Silverhand", image: "./assets/characters/johnny.jpg" }
    ],
    maps: [
      { name: "Night City", image: "https://static.wikia.nocookie.net/cyberpunk/images/e/e0/Night_City_Map_CP2077.png" }
    ]
  },
  {
    id: "re-village",
    title: "Resident Evil Village",
    category: "Horror",
    studio: "Capcom",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/library_600x900.jpg",
    rating: "8.8/10",
    description: "Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.",
    lore: "Three years after the Baker incident, Ethan Winters lives a peaceful life with his wife Mia and daughter Rose. But this peace is shattered when Chris Redfield attacks their home and kidnaps Rose. Ethan tracks them to a mysterious, snow-covered village in Eastern Europe, ruled by Mother Miranda and her four lords: Alcina Dimitrescu, Donna Beneviento, Salvatore Moreau, and Karl Heisenberg. Ethan must battle through their domains to save his daughter.",
    characters: [
      { name: "Ethan Winters", image: "./assets/characters/ethan.jpg" },
      { name: "Lady Dimitrescu", image: "./assets/characters/dimitrescu.jpg" }
    ],
    maps: [
      { name: "Castle Dimitrescu", image: "https://static.wikia.nocookie.net/residentevil/images/9/93/Map_Village_Castle.png" }
    ]
  },
  {
    id: "halo-infinite",
    title: "Halo Infinite",
    category: "FPS",
    studio: "343 Industries",
    image: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png",
    rating: "8.6/10",
    description: "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and experience the massive scale of the Halo ring.",
    lore: "Assuming control of the mysterious Zeta Halo, the Banished—a violent faction of mercenaries that broke away from the Covenant—have defeated the UNSC forces. The Master Chief, floating adrift in space, is recovered by a pilot and brought back to the ring. With a new AI, 'The Weapon', created to contain Cortana, Chief must unravel the mysteries of the ring, defeat the Banished leader Escharum, and find out what happened to his former companion.",
    characters: [
      { name: "Master Chief", image: "./assets/characters/master_chief.jpg" },
      { name: "Cortana", image: "./assets/characters/cortana.jpg" }
    ],
    maps: [
      { name: "Zeta Halo", image: "https://static.wikia.nocookie.net/halo/images/4/4f/Zeta_Halo_HInf.png" }
    ]
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    category: "RPG",
    studio: "FromSoftware",
    image: "https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg",
    rating: "9.6/10",
    description: "Hunt your nightmares as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.",
    lore: "Yharnam is a city famous for its blood ministration, a cure-all that has attracted many travelers. But the city is cursed with an endemic illness that turns its citizens into beasts. The source of the plague lies with the Healing Church and their worship of the Great Ones—cosmic entities from higher planes of existence. As a Hunter, you must navigate the night of the hunt, uncover the eldritch truths of the cosmos, and put an end to the nightmare.",
    characters: [
      { name: "The Hunter", image: "./assets/characters/hunter.jpg" },
      { name: "Gehrman", image: "./assets/characters/gehrman.jpg" }
    ],
    maps: [
      { name: "Yharnam", image: "https://static.wikia.nocookie.net/bloodborne/images/c/c5/Yharnam_Map.jpg" }
    ]
  },
  {
    id: "tlou2",
    title: "The Last of Us Part II",
    category: "Horror",
    studio: "Naughty Dog",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png",
    rating: "9.3/10",
    description: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.",
    lore: "In a post-apocalyptic world ravaged by the Cordyceps fungus, survivors kill for resources and ideology. After a traumatic event disrupts the peace of Jackson, Ellie sets out on a relentless journey of vengeance to Seattle. She finds herself in the middle of a brutal war between the Washington Liberation Front (WLF) and the religious zealots known as the Seraphites. The story explores the devastating cycle of violence and the cost of revenge.",
    characters: [
      { name: "Ellie", image: "./assets/characters/ellie.jpg" },
      { name: "Abby", image: "./assets/characters/abby.jpg" }
    ],
    maps: [
      { name: "Seattle", image: "https://static.wikia.nocookie.net/thelastofus/images/3/38/Seattle_Map.png" }
    ]
  }
];

// State
const state = {
  currentView: 'home',
  filters: { books: 'all', films: 'all', games: 'all' },
  history: []
};

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const detailView = document.getElementById('detail-view');
const detailContent = document.getElementById('detail-content');
const grids = {
  books: document.getElementById('books-grid'),
  films: document.getElementById('films-grid'),
  games: document.getElementById('games-grid')
};

function handleImageError(img, title) {
  img.onerror = null; // Prevent infinite loop
  img.style.display = 'none';
  const placeholder = document.createElement('div');
  placeholder.className = 'item-image placeholder';
  placeholder.style.display = 'flex';
  placeholder.style.alignItems = 'center';
  placeholder.style.justifyContent = 'center';
  placeholder.style.backgroundColor = '#334155';
  placeholder.style.color = '#fff';
  placeholder.style.textAlign = 'center';
  placeholder.style.padding = '1rem';
  placeholder.style.height = '100%';
  placeholder.style.width = '100%';
  placeholder.textContent = title;
  img.parentElement.appendChild(placeholder);
}

// Master Card Generators
function createBookCard(item) {
  return `
    <div class="item-card book-card" onclick="openDetail('books', '${item.id}')">
      <div class="image-wrapper">
         <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy"
              onerror="handleImageError(this, '${item.title}')">
      </div>
      <div class="item-content">
        <div class="item-title">${item.title}</div>
        <div class="item-subtitle">${item.author}</div>
        <div class="item-badge">${item.category}</div>
      </div>
    </div>
  `;
}

function createFilmCard(item) {
  return `
    <div class="item-card film-card" onclick="openDetail('films', '${item.id}')">
      <div class="image-wrapper">
         <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy"
              onerror="handleImageError(this, '${item.title}')">
      </div>
      <div class="item-content">
        <div class="item-title">${item.title}</div>
        <div class="item-subtitle">${item.year}</div>
        <div class="item-badge">${item.category}</div>
      </div>
    </div>
  `;
}

function createGameCard(item) {
  return `
    <div class="item-card game-card" onclick="openDetail('games', '${item.id}')">
      <div class="image-wrapper">
         <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy"
              onerror="handleImageError(this, '${item.title}')">
      </div>
      <div class="item-content">
        <div class="item-title">${item.title}</div>
        <div class="item-subtitle">${item.studio}</div>
        <div class="item-badge">${item.category}</div>
      </div>
    </div>
  `;
}

function renderGrid(type) {
  const grid = grids[type];
  if (!grid) return;

  const data = type === 'books' ? booksData : (type === 'films' ? filmsData : gamesData);
  const filter = state.filters[type];
  const filteredData = filter === 'all' ? data : data.filter(item => item.category === filter);

  let htmlContent = '';
  if (type === 'books') {
    htmlContent = filteredData.map(item => createBookCard(item)).join('');
  } else if (type === 'films') {
    htmlContent = filteredData.map(item => createFilmCard(item)).join('');
  } else if (type === 'games') {
    htmlContent = filteredData.map(item => createGameCard(item)).join('');
  }

  grid.innerHTML = htmlContent;
}

// Global scope for onclick
window.openDetail = function (type, id) {
  const data = type === 'books' ? booksData : (type === 'films' ? filmsData : gamesData);
  const item = data.find(i => i.id === id);
  if (!item) return;

  renderDetailView(item, type);
  switchView('detail-view');
};

function renderDetailView(item, type) {
  let extraContent = '';

  if (type === 'books') {
    extraContent = `
      <a href="${item.buyLink}" target="_blank" class="action-btn">Buy on Amazon</a>
    `;
  } else if (type === 'films') {
    extraContent = `
      <a href="${item.buyLink}" target="_blank" class="action-btn">Get Tickets (Kinopark)</a>
    `;
  } else if (type === 'games') {
    extraContent = `
      <div class="game-tabs">
        <div class="tab-buttons">
          <button class="tab-btn active" onclick="switchGameTab('lore')">Lore</button>
          <button class="tab-btn" onclick="switchGameTab('characters')">Characters</button>
          <button class="tab-btn" onclick="switchGameTab('maps')">Maps</button>
        </div>
        <div id="game-tab-content">
          <p style="color: #cbd5e1;">${item.lore}</p>
        </div>
      </div>
    `;
    // Store current item for tab switching
    state.currentGameItem = item;
  }

  detailContent.innerHTML = `
    <div class="detail-layout">
      <div class="detail-left">
        <img src="${item.image}" alt="${item.title}" class="detail-image" onerror="this.onerror=null;this.src='https://placehold.co/400x600/1e293b/FFF?text=${encodeURIComponent(item.title)}'">
      </div>
      <div class="detail-info">
        <h1>${item.title}</h1>
        <div class="detail-meta">
          <span class="rating-badge">★ ${item.rating}</span>
          <span>${item.category}</span>
          <span>${type === 'books' ? item.author : (type === 'films' ? item.year : item.studio)}</span>
        </div>
        <div class="detail-description">
          ${item.description}
        </div>
        ${extraContent}
      </div>
    </div>
  `;
}

window.switchGameTab = function (tabName) {
  const item = state.currentGameItem;
  if (!item) return;

  // Update Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === tabName);
  });

  const contentContainer = document.getElementById('game-tab-content');
  if (tabName === 'lore') {
    contentContainer.innerHTML = `<p style="color: #cbd5e1;">${item.lore}</p>`;
  } else if (tabName === 'characters') {
    if (item.characters.length === 0) contentContainer.innerHTML = '<p>No character info available.</p>';
    else {
      contentContainer.innerHTML = `
        <div class="game-grid-sub">
          ${item.characters.map(c => `
             <div class="sub-item">
               <img src="${c.image}" alt="${c.name}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/475569/FFF?text=${encodeURIComponent(c.name)}'">
               <p>${c.name}</p>
             </div>
          `).join('')}
        </div>
      `;
    }
  } else if (tabName === 'maps') {
    if (item.maps.length === 0) contentContainer.innerHTML = '<p>No maps available.</p>';
    else {
      contentContainer.innerHTML = `
        <div class="game-grid-sub" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">
          ${item.maps.map(m => `
             <div class="sub-item">
               <img src="${m.image}" alt="${m.name}" style="aspect-ratio: 16/9;" onerror="this.onerror=null;this.src='https://placehold.co/400x300/475569/FFF?text=${encodeURIComponent(m.name)}'">
               <p>${m.name}</p>
             </div>
          `).join('')}
        </div>
      `;
    }
  }
};

window.handleImageError = handleImageError; // Make it global

function switchView(viewId) {
  views.forEach(view => {
    if (view.id === viewId) {
      view.classList.add('active');
      view.classList.remove('hidden');
    } else {
      view.classList.remove('active');
      setTimeout(() => {
        if (!view.classList.contains('active')) view.classList.add('hidden');
      }, 500);
    }
  });

  if (viewId !== 'detail-view') {
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === viewId);
    });
    // Check if we need to render the grid
    if (['books', 'films', 'games'].includes(viewId)) renderGrid(viewId);
  } else {
    // If detail view, clear nav active state
    navItems.forEach(item => item.classList.remove('active'));
  }
}

// Event Listeners
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const tab = item.dataset.tab;
    // Handle home link acting as logo reset
    if (!tab) return;
    switchView(tab);
  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const section = btn.closest('section').id;
    const filter = btn.dataset.filter;

    btn.parentNode.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    state.filters[section] = filter;
    renderGrid(section);
  });
});

document.querySelector('.logo').addEventListener('click', () => switchView('home'));

document.querySelector('.back-btn').onclick = (e) => {
  e.preventDefault();
  switchView('home');
};


// Initial Render
switchView('home');
