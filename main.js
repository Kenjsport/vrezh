// Data Store with Rich Content
const booksData = [
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "category": "Self-improvement",
    "author": "James Clear",
    "image": "/assets/books/atomic-habits.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Atomic Habits by James Clear.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "rich-dad-poor-dad",
    "title": "Rich Dad Poor Dad",
    "category": "Business",
    "author": "Robert Kiyosaki",
    "image": "/assets/books/rich-dad-poor-dad.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Rich Dad Poor Dad by Robert Kiyosaki.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "sapiens",
    "title": "Sapiens",
    "category": "Science",
    "author": "Yuval Noah Harari",
    "image": "/assets/books/sapiens.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Sapiens by Yuval Noah Harari.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-alchemist",
    "title": "The Alchemist",
    "category": "Literature",
    "author": "Paulo Coelho",
    "image": "/assets/books/alchemist.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Alchemist by Paulo Coelho.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "zero-to-one",
    "title": "Zero to One",
    "category": "Business",
    "author": "Peter Thiel",
    "image": "/assets/books/zero-to-one.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Zero to One by Peter Thiel.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "1984",
    "title": "1984",
    "category": "Literature",
    "author": "George Orwell",
    "image": "/assets/books/1984.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to 1984 by George Orwell.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "deep-work",
    "title": "Deep Work",
    "category": "Business",
    "author": "Cal Newport",
    "image": "/assets/books/deep-work.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Deep Work by Cal Newport.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "think-and-grow-rich",
    "title": "Think and Grow Rich",
    "category": "Self-improvement",
    "author": "Napoleon Hill",
    "image": "/assets/books/think-grow-rich.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Think and Grow Rich by Napoleon Hill.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-psychology-of-money",
    "title": "The Psychology of Money",
    "category": "Business",
    "author": "Morgan Housel",
    "image": "/assets/books/psy-money.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Psychology of Money by Morgan Housel.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "shoe-dog",
    "title": "Shoe Dog",
    "category": "Business",
    "author": "Phil Knight",
    "image": "/assets/books/shoe-dog.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Shoe Dog by Phil Knight.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "can't-hurt-me",
    "title": "Can't Hurt Me",
    "category": "Sport",
    "author": "David Goggins",
    "image": "/assets/books/can-hurt-me.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Can't Hurt Me by David Goggins.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "dune",
    "title": "Dune",
    "category": "Literature",
    "author": "Frank Herbert",
    "image": "/assets/books/dune.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Dune by Frank Herbert.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "cosmos",
    "title": "Cosmos",
    "category": "Science",
    "author": "Carl Sagan",
    "image": "/assets/books/cosmos.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Cosmos by Carl Sagan.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "brief-answers-to-big-questions",
    "title": "Brief Answers to Big Questions",
    "category": "Science",
    "author": "Stephen Hawking",
    "image": "/assets/books/brief-answers.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Brief Answers to Big Questions by Stephen Hawking.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-7-habits-of-highly-effective-people",
    "title": "The 7 Habits of Highly Effective People",
    "category": "Self-improvement",
    "author": "Stephen Covey",
    "image": "/assets/books/7-habits.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The 7 Habits of Highly Effective People by Stephen Covey.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "how-to-win-friends-and-influence-people",
    "title": "How to Win Friends and Influence People",
    "category": "Self-improvement",
    "author": "Dale Carnegie",
    "image": "/assets/books/win-friends.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to How to Win Friends and Influence People by Dale Carnegie.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-subtle-art-of-not-giving-a-f*ck",
    "title": "The Subtle Art of Not Giving a F*ck",
    "category": "Self-improvement",
    "author": "Mark Manson",
    "image": "/assets/books/subtle-art.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Subtle Art of Not Giving a F*ck by Mark Manson.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "mindset",
    "title": "Mindset",
    "category": "Self-improvement",
    "author": "Carol Dweck",
    "image": "/assets/books/mindset.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Mindset by Carol Dweck.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-lean-startup",
    "title": "The Lean Startup",
    "category": "Business",
    "author": "Eric Ries",
    "image": "/assets/books/lean-startup.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Lean Startup by Eric Ries.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "mamba-mentality",
    "title": "Mamba Mentality",
    "category": "Sport",
    "author": "Kobe Bryant",
    "image": "/assets/books/mamba-mentality.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Mamba Mentality by Kobe Bryant.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "influence",
    "title": "Influence",
    "category": "Business",
    "author": "Robert Cialdini",
    "image": "/assets/books/influence.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Influence by Robert Cialdini.",
    "buyLink": "https://amazon.com"
  },

  {
    "id": "the-4-hour-workweek",
    "title": "The 4-Hour Workweek",
    "category": "Business",
    "author": "Tim Ferriss",
    "image": "/assets/books/4-hour-workweek.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The 4-Hour Workweek by Tim Ferriss.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "grit",
    "title": "Grit",
    "category": "Self-improvement",
    "author": "Angela Duckworth",
    "image": "/assets/books/grit.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Grit by Angela Duckworth.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "start-with-why",
    "title": "Start with Why",
    "category": "Business",
    "author": "Simon Sinek",
    "image": "/assets/books/start-with-why.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Start with Why by Simon Sinek.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "man's-search-for-meaning",
    "title": "Man's Search for Meaning",
    "category": "Self-improvement",
    "author": "Viktor Frankl",
    "image": "/assets/books/man-search-meaning.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Man's Search for Meaning by Viktor Frankl.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "thinking-fast-and-slow",
    "title": "Thinking, Fast and Slow",
    "category": "Science",
    "author": "Daniel Kahneman",
    "image": "/assets/books/thinking-fast-slow.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Thinking, Fast and Slow by Daniel Kahneman.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "silent-spring",
    "title": "Silent Spring",
    "category": "Science",
    "author": "Rachel Carson",
    "image": "/assets/books/silent-spring.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Silent Spring by Rachel Carson.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-selfish-gene",
    "title": "The Selfish Gene",
    "category": "Science",
    "author": "Richard Dawkins",
    "image": "/assets/books/selfish-gene.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Selfish Gene by Richard Dawkins.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "guns-germs-and-steel",
    "title": "Guns, Germs, and Steel",
    "category": "Science",
    "author": "Jared Diamond",
    "image": "/assets/books/guns-germs-steel.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Guns, Germs, and Steel by Jared Diamond.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-hobbit",
    "title": "The Hobbit",
    "category": "Literature",
    "author": "J.R.R. Tolkien",
    "image": "/assets/books/hobbit.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Hobbit by J.R.R. Tolkien.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-great-gatsby",
    "title": "The Great Gatsby",
    "category": "Literature",
    "author": "F. Scott Fitzgerald",
    "image": "/assets/books/great-gatsby.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Great Gatsby by F. Scott Fitzgerald.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "to-kill-a-mockingbird",
    "title": "To Kill a Mockingbird",
    "category": "Literature",
    "author": "Harper Lee",
    "image": "/assets/books/to-kill-mockingbird.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to To Kill a Mockingbird by Harper Lee.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-catcher-in-the-rye",
    "title": "The Catcher in the Rye",
    "category": "Literature",
    "author": "J.D. Salinger",
    "image": "/assets/books/catcher-rye.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Catcher in the Rye by J.D. Salinger.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "brave-new-world",
    "title": "Brave New World",
    "category": "Literature",
    "author": "Aldous Huxley",
    "image": "/assets/books/brave-new-world.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Brave New World by Aldous Huxley.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "pride-and-prejudice",
    "title": "Pride and Prejudice",
    "category": "Literature",
    "author": "Jane Austen",
    "image": "/assets/books/pride-prejudice.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Pride and Prejudice by Jane Austen.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "ulysses",
    "title": "Ulysses",
    "category": "Literature",
    "author": "James Joyce",
    "image": "/assets/books/ulysses.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Ulysses by James Joyce.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "lolita",
    "title": "Lolita",
    "category": "Literature",
    "author": "Vladimir Nabokov",
    "image": "/assets/books/lolita.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Lolita by Vladimir Nabokov.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-grapes-of-wrath",
    "title": "The Grapes of Wrath",
    "category": "Literature",
    "author": "John Steinbeck",
    "image": "/assets/books/grapes-wrath.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Grapes of Wrath by John Steinbeck.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "moby-dick",
    "title": "Moby Dick",
    "category": "Literature",
    "author": "Herman Melville",
    "image": "/assets/books/moby-dick.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Moby Dick by Herman Melville.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "meditations",
    "title": "Meditations",
    "category": "Literature",
    "author": "Marcus Aurelius",
    "image": "/assets/books/meditations.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Meditations by Marcus Aurelius.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "the-power-of-now",
    "title": "The Power of Now",
    "category": "Self-improvement",
    "author": "Eckhart Tolle",
    "image": "/assets/books/power-now.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to The Power of Now by Eckhart Tolle.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "extreme-ownership",
    "title": "Extreme Ownership",
    "category": "Business",
    "author": "Jocko Willink",
    "image": "/assets/books/extreme-ownership.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Extreme Ownership by Jocko Willink.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "daring-greatly",
    "title": "Daring Greatly",
    "category": "Self-improvement",
    "author": "Bren\u00e9 Brown",
    "image": "/assets/books/daring-greatly.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Daring Greatly by Bren\u00e9 Brown.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "open",
    "title": "Open",
    "category": "Sport",
    "author": "Andre Agassi",
    "image": "/assets/books/open.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Open by Andre Agassi.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "relentless",
    "title": "Relentless",
    "category": "Sport",
    "author": "Tim Grover",
    "image": "/assets/books/relentless.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Relentless by Tim Grover.",
    "buyLink": "https://amazon.com"
  },
  {
    "id": "eleven-rings",
    "title": "Eleven Rings",
    "category": "Sport",
    "author": "Phil Jackson",
    "image": "/assets/books/eleven-rings.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Eleven Rings by Phil Jackson.",
    "buyLink": "https://amazon.com"
  },

  {
    "id": "born-to-run",
    "title": "Born to Run",
    "category": "Sport",
    "author": "Christopher McDougall",
    "image": "/assets/books/born-to-run.jpg",
    "rating": "4.8/5",
    "description": "A comprehensive guide to Born to Run by Christopher McDougall.",
    "buyLink": "https://amazon.com"
  }
];

const filmsData = [
  {
    "id": "inception",
    "title": "Inception",
    "category": "Sci-Fi",
    "year": "2010",
    "image": "/assets/films/inception.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2010.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "interstellar",
    "title": "Interstellar",
    "category": "Sci-Fi",
    "year": "2014",
    "image": "/assets/films/interstellar.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2014.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-dark-knight",
    "title": "The Dark Knight",
    "category": "Thriller",
    "year": "2008",
    "image": "/assets/films/dark-knight.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2008.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-matrix",
    "title": "The Matrix",
    "category": "Sci-Fi",
    "year": "1999",
    "image": "/assets/films/matrix.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 1999.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-godfather",
    "title": "The Godfather",
    "category": "Crime",
    "year": "1972",
    "image": "/assets/films/godfather.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1972.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "parasite",
    "title": "Parasite",
    "category": "Thriller",
    "year": "2019",
    "image": "/assets/films/parasite.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2019.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "pulp-fiction",
    "title": "Pulp Fiction",
    "category": "Crime",
    "year": "1994",
    "image": "/assets/films/pulp-fiction.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1994.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "avengers-endgame",
    "title": "Avengers Endgame",
    "category": "Sci-Fi",
    "year": "2019",
    "image": "/assets/films/avengers-endgame.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2019.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "fight-club",
    "title": "Fight Club",
    "category": "Thriller",
    "year": "1999",
    "image": "/assets/films/fight-club.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 1999.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "gladiator",
    "title": "Gladiator",
    "category": "Thriller",
    "year": "2000",
    "image": "/assets/films/gladiator.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2000.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "get-out",
    "title": "Get Out",
    "category": "Horror",
    "year": "2017",
    "image": "/assets/films/get-out.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 2017.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "hereditary",
    "title": "Hereditary",
    "category": "Horror",
    "year": "2018",
    "image": "/assets/films/hereditary.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 2018.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-shining",
    "title": "The Shining",
    "category": "Horror",
    "year": "1980",
    "image": "/assets/films/shining.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 1980.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-fellowship-of-the-ring",
    "title": "The Fellowship of the Ring",
    "category": "Fantasy",
    "year": "2001",
    "image": "/assets/films/lotr-fellowship.jpg",
    "rating": "8.5/10",
    "description": "An epic Fantasy story from 2001.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "goodfellas",
    "title": "Goodfellas",
    "category": "Crime",
    "year": "1990",
    "image": "/assets/films/goodfellas.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1990.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "seven",
    "title": "Seven",
    "category": "Thriller",
    "year": "1995",
    "image": "/assets/films/seven.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 1995.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "silence-of-the-lambs",
    "title": "Silence of the Lambs",
    "category": "Thriller",
    "year": "1991",
    "image": "/assets/films/silence-lambs.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 1991.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "shutter-island",
    "title": "Shutter Island",
    "category": "Thriller",
    "year": "2010",
    "image": "/assets/films/shutter-island.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2010.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "gone-girl",
    "title": "Gone Girl",
    "category": "Thriller",
    "year": "2014",
    "image": "/assets/films/gone-girl.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2014.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "blade-runner-2049",
    "title": "Blade Runner 2049",
    "category": "Sci-Fi",
    "year": "2017",
    "image": "/assets/films/blade-runner-2049.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2017.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "arrival",
    "title": "Arrival",
    "category": "Sci-Fi",
    "year": "2016",
    "image": "/assets/films/arrival.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2016.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "eternal-sunshine",
    "title": "Eternal Sunshine",
    "category": "Sci-Fi",
    "year": "2004",
    "image": "/assets/films/eternal-sunshine.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2004.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "dune-2021",
    "title": "Dune 2021",
    "category": "Sci-Fi",
    "year": "2021",
    "image": "/assets/films/dune-2021.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2021.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "ex-machina",
    "title": "Ex Machina",
    "category": "Sci-Fi",
    "year": "2014",
    "image": "/assets/films/ex-machina.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2014.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "tenet",
    "title": "Tenet",
    "category": "Sci-Fi",
    "year": "2020",
    "image": "/assets/films/tenet.jpg",
    "rating": "8.5/10",
    "description": "An epic Sci-Fi story from 2020.",
    "buyLink": "https://kinopark.kz/en"
  },

  {
    "id": "spirited-away",
    "title": "Spirited Away",
    "category": "Fantasy",
    "year": "2001",
    "image": "/assets/films/spirited-away.jpg",
    "rating": "8.5/10",
    "description": "An epic Fantasy story from 2001.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "harry-potter",
    "title": "Harry Potter",
    "category": "Fantasy",
    "year": "2001",
    "image": "/assets/films/harry-potter-1.jpg",
    "rating": "8.5/10",
    "description": "An epic Fantasy story from 2001.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-princess-bride",
    "title": "The Princess Bride",
    "category": "Fantasy",
    "year": "1987",
    "image": "/assets/films/princess-bride.jpg",
    "rating": "8.5/10",
    "description": "An epic Fantasy story from 1987.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "stardust",
    "title": "Stardust",
    "category": "Fantasy",
    "year": "2007",
    "image": "/assets/films/stardust.jpg",
    "rating": "8.5/10",
    "description": "An epic Fantasy story from 2007.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "psycho",
    "title": "Psycho",
    "category": "Horror",
    "year": "1960",
    "image": "/assets/films/psycho.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 1960.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "alien",
    "title": "Alien",
    "category": "Horror",
    "year": "1979",
    "image": "/assets/films/alien.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 1979.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-thing",
    "title": "The Thing",
    "category": "Horror",
    "year": "1982",
    "image": "/assets/films/the-thing.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 1982.",
    "buyLink": "https://kinopark.kz/en"
  },

  {
    "id": "the-conjuring",
    "title": "The Conjuring",
    "category": "Horror",
    "year": "2013",
    "image": "/assets/films/conjuring.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 2013.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-exorcist",
    "title": "The Exorcist",
    "category": "Horror",
    "year": "1973",
    "image": "/assets/films/exorcist.jpg",
    "rating": "8.5/10",
    "description": "An epic Horror story from 1973.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-departed",
    "title": "The Departed",
    "category": "Crime",
    "year": "2006",
    "image": "/assets/films/departed.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 2006.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "no-country-for-old-men",
    "title": "No Country for Old Men",
    "category": "Crime",
    "year": "2007",
    "image": "/assets/films/no-country.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 2007.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "usual-suspects",
    "title": "Usual Suspects",
    "category": "Crime",
    "year": "1995",
    "image": "/assets/films/usual-suspects.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1995.",
    "buyLink": "https://kinopark.kz/en"
  },

  {
    "id": "reservoir-dogs",
    "title": "Reservoir Dogs",
    "category": "Crime",
    "year": "1992",
    "image": "/assets/films/reservoir-dogs.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1992.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "zodiac",
    "title": "Zodiac",
    "category": "Crime",
    "year": "2007",
    "image": "/assets/films/zodiac.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 2007.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "american-gangster",
    "title": "American Gangster",
    "category": "Crime",
    "year": "2007",
    "image": "/assets/films/american-gangster.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 2007.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "heat",
    "title": "Heat",
    "category": "Crime",
    "year": "1995",
    "image": "/assets/films/heat.jpg",
    "rating": "8.5/10",
    "description": "An epic Crime story from 1995.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "primal-fear",
    "title": "Primal Fear",
    "category": "Thriller",
    "year": "1996",
    "image": "/assets/films/primal-fear.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 1996.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "the-prestige",
    "title": "The Prestige",
    "category": "Thriller",
    "year": "2006",
    "image": "/assets/films/the-prestige.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2006.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "memento",
    "title": "Memento",
    "category": "Thriller",
    "year": "2000",
    "image": "/assets/films/memento.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2000.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "oldboy",
    "title": "Oldboy",
    "category": "Thriller",
    "year": "2003",
    "image": "/assets/films/oldboy.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2003.",
    "buyLink": "https://kinopark.kz/en"
  },
  {
    "id": "joker",
    "title": "Joker",
    "category": "Thriller",
    "year": "2019",
    "image": "/assets/films/joker.jpg",
    "rating": "8.5/10",
    "description": "An epic Thriller story from 2019.",
    "buyLink": "https://kinopark.kz/en"
  }
];

const gamesData = [
  {
    "id": "elden-ring",
    "title": "Elden Ring",
    "category": "RPG",
    "studio": "FromSoftware",
    "image": "/assets/games/elden-ring.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from FromSoftware.",
    "lore": "The world of Elden Ring is rich with history and mystery.",
    "characters": [
      {
        "name": "Melina",
        "description": "A mysterious maiden who assists the Tarnished on their journey to becomes Elden Lord.",
        "image": "/assets/characters/elden-ring-melina.jpg"
      },
      {
        "name": "Malenia",
        "description": "The Goddess of Rot and one of the most powerful demigods in the Lands Between.",
        "image": "/assets/characters/elden-ring-malenia.jpg"
      },
      {
        "name": "Ranni",
        "description": "The Princess of the Carian Royal Family who seeks to bring an Age of Stars.",
        "image": "/assets/characters/elden-ring-ranni.jpg"
      },
      {
        "name": "Blaidd",
        "description": "A half-wolf warrior and loyal shadow to Ranni the Witch.",
        "image": "/assets/characters/elden-ring-blaidd.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "the-witcher-3",
    "title": "The Witcher 3",
    "category": "RPG",
    "studio": "CD Projekt Red",
    "image": "/assets/games/witcher-3.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from CD Projekt Red.",
    "lore": "The world of The Witcher 3 is rich with history and mystery.",
    "characters": [
      {
        "name": "Geralt of Rivia",
        "description": "A legendary Witcher known as the White Wolf, searching for his adopted daughter Ciri.",
        "image": "/assets/characters/the-witcher-3-geralt_of_rivia.jpg"
      },
      {
        "name": "Yennefer of Vengerberg",
        "description": "A powerful sorceress and the true love of Geralt, searching for Ciri through magical means.",
        "image": "/assets/characters/the-witcher-3-yennefer_of_vengerberg.jpg"
      },
      {
        "name": "Ciri",
        "description": "The Child of Destiny with the Elder Blood, capable of traveling between worlds.",
        "image": "/assets/characters/the-witcher-3-ciri.jpg"
      },
      {
        "name": "Triss Merigold",
        "description": "A talented sorceress and close ally to Geralt, known for her mastery of fire magic.",
        "image": "/assets/characters/the-witcher-3-triss_merigold.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "god-of-war",
    "title": "God of War",
    "category": "RPG",
    "studio": "Santa Monica",
    "image": "/assets/games/god-of-war.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Santa Monica.",
    "lore": "The world of God of War is rich with history and mystery.",
    "characters": [
      {
        "name": "Kratos",
        "description": "The former God of War who has retired to the Norse realms to raise his son Atreus.",
        "image": "/assets/characters/god-of-war-kratos.jpg"
      },
      {
        "name": "Atreus",
        "description": "Kratos's son, a skilled archer who is discovering his own divine heritage as Loki.",
        "image": "/assets/characters/god-of-war-atreus.jpg"
      },
      {
        "name": "Freya",
        "description": "A Vanir goddess and former Queen of the Valkyries who has a complex history with Kratos.",
        "image": "/assets/characters/god-of-war-freya.jpg"
      },
      {
        "name": "Baldur",
        "description": "An Aesir god and son of Odin, blessed (or cursed) with invulnerability to all physical and magical harm.",
        "image": "/assets/characters/god-of-war-baldur.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "rdr2",
    "title": "RDR2",
    "category": "RPG",
    "studio": "Rockstar",
    "image": "/assets/games/rdr2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Rockstar.",
    "lore": "The world of RDR2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Arthur Morgan",
        "description": "A high-ranking member of the van der Linde gang, a man of few words but deep internal conflict.",
        "image": "/assets/characters/rdr2-arthur_morgan.jpg"
      },
      {
        "name": "John Marston",
        "description": "A former outlaw trying to go straight, father to Jack and husband to Abigail.",
        "image": "/assets/characters/rdr2-john_marston.jpg"
      },
      {
        "name": "Dutch van der Linde",
        "description": "The idealistic and increasingly unstable leader of the van der Linde outlaw gang.",
        "image": "/assets/characters/rdr2-dutch_van_der_linde.jpg"
      },
      {
        "name": "Sadie Adler",
        "description": "A widow turned fierce bounty hunter and close confidant of Arthur Morgan.",
        "image": "/assets/characters/rdr2-sadie_adler.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "doom-eternal",
    "title": "Doom Eternal",
    "category": "FPS",
    "studio": "id Software",
    "image": "/assets/games/doom-eternal.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from id Software.",
    "lore": "The world of Doom Eternal is rich with history and mystery.",
    "characters": [
      {
        "name": "Doom Slayer",
        "description": "The legendary warrior fueled by rage, dedicated to the eternal slaughter of demonic forces.",
        "image": "/assets/characters/doom-eternal-doom_slayer.jpg"
      },
      {
        "name": "Samuel Hayden",
        "description": "An enigmatic cyborg and former director of the UAC who oversees the Slayer's mission.",
        "image": "/assets/characters/doom-eternal-samuel_hayden.jpg"
      },
      {
        "name": "Khan Maykr",
        "description": "The supreme leader of the Maykrs, seeking to save her people at any cost.",
        "image": "/assets/characters/doom-eternal-khan_maykr.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "cyberpunk",
    "title": "Cyberpunk",
    "category": "RPG",
    "studio": "CD Projekt Red",
    "image": "/assets/games/cyberpunk.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from CD Projekt Red.",
    "lore": "The world of Cyberpunk is rich with history and mystery.",
    "characters": [
      {
        "name": "V (Character)",
        "description": "A mercenary in Night City, dealing with a biochip containing the psyche of Johnny Silverhand.",
        "image": "/assets/characters/cyberpunk-v_(character).jpg"
      },
      {
        "name": "Johnny Silverhand",
        "description": "A legendary rockerboy and anti-establishment rebel whose mind is trapped inside V's head.",
        "image": "/assets/characters/cyberpunk-johnny_silverhand.jpg"
      },
      {
        "name": "Jackie Welles",
        "description": "A charismatic mercenary and V's best friend, dreaming of making it big in Night City.",
        "image": "/assets/characters/cyberpunk-jackie_welles.jpg"
      },
      {
        "name": "Judy Alvarez",
        "description": "A technical genius and braindance specialist who becomes a close ally to V.",
        "image": "/assets/characters/cyberpunk-judy_alvarez.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "re-village",
    "title": "RE Village",
    "category": "Horror",
    "studio": "Capcom",
    "image": "/assets/games/re-village.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Capcom.",
    "lore": "The world of RE Village is rich with history and mystery.",
    "characters": [
      {
        "name": "Ethan Winters",
        "description": "A father searching for his kidnapped daughter Rose in a mysterious and deadly village.",
        "image": "/assets/characters/re-village-ethan_winters.jpg"
      },
      {
        "name": "Alcina Dimitrescu",
        "description": "A giant noblewoman and one of the four lords of the village, known for her vampiric traits.",
        "image": "/assets/characters/re-village-alcina_dimitrescu.jpg"
      },
      {
        "name": "Mother Miranda",
        "description": "The enigmatic leader of the village who is worshiped by its inhabitants.",
        "image": "/assets/characters/re-village-mother_miranda.jpg"
      },
      {
        "name": "Chris Redfield",
        "description": "A veteran BSAA operative whose actions initially appear antagonistic to Ethan.",
        "image": "/assets/characters/re-village-chris_redfield.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "halo-infinite",
    "title": "Halo Infinite",
    "category": "FPS",
    "studio": "343 Industries",
    "image": "/assets/games/halo-infinite.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from 343 Industries.",
    "lore": "The world of Halo Infinite is rich with history and mystery.",
    "characters": [
      {
        "name": "John-117",
        "description": "The Master Chief, a legendary Spartan-II supersoldier and humanity's greatest hero.",
        "image": "/assets/characters/halo-infinite-john-117.jpg"
      },
      {
        "name": "Cortana",
        "description": "A highly advanced Al and former partner of the Master Chief, whose fate remains a mystery.",
        "image": "/assets/characters/halo-infinite-cortana.jpg"
      },
      {
        "name": "The Weapon",
        "description": "A new AI designed to replace Cortana and assist the Master Chief on Zeta Halo.",
        "image": "/assets/characters/halo-infinite-the_weapon.jpg"
      },
      {
        "name": "Escharum",
        "description": "The leader of the Banished, an older and highly skilled Brute warrior seeking a final battle.",
        "image": "/assets/characters/halo-infinite-escharum.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "bloodborne",
    "title": "Bloodborne",
    "category": "RPG",
    "studio": "FromSoftware",
    "image": "/assets/games/bloodborne.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from FromSoftware.",
    "lore": "The world of Bloodborne is rich with history and mystery.",
    "characters": [
      {
        "name": "The Hunter",
        "description": "A traveler who comes to Yharnam seeking Paleblood and becomes trapped in the Hunter's Dream.",
        "image": "/assets/characters/bloodborne-the_hunter.jpg"
      },
      {
        "name": "Plain Doll",
        "description": "An animated doll in the Hunter's Dream who assists the Hunter in leveling up.",
        "image": "/assets/characters/bloodborne-plain_doll.jpg"
      },
      {
        "name": "Gehrman",
        "description": "The first Hunter and the host of the Hunter's Dream, serving as a guide to newcomers.",
        "image": "/assets/characters/bloodborne-gehrman.jpg"
      },
      {
        "name": "Father Gascoigne",
        "description": "A former hunter of the church who has succumbed to the beast blood.",
        "image": "/assets/characters/bloodborne-father_gascoigne.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "tlou2",
    "title": "TLOU2",
    "category": "Horror",
    "studio": "Naughty Dog",
    "image": "/assets/games/tlou2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Naughty Dog.",
    "lore": "The world of TLOU2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Ellie (The Last of Us Part II)",
        "description": "A young woman seeking vengeance for a traumatic loss in a post-apocalyptic world.",
        "image": "/assets/characters/tlou2-ellie_(the_last_of_us_part_ii).jpg"
      },
      {
        "name": "Abby Anderson",
        "description": "A member of the WLF with her own tragic past, whose path crosses with Ellie's.",
        "image": "/assets/characters/tlou2-abby_anderson.jpg"
      },
      {
        "name": "Joel Miller",
        "description": "A father figure to Ellie, whose past decisions have far-reaching consequences.",
        "image": "/assets/characters/tlou2-joel_miller.jpg"
      },
      {
        "name": "Dina",
        "description": "Ellie's companion and love interest, who accompanies her on her mission to Seattle.",
        "image": "/assets/characters/tlou2-dina.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "skyrim",
    "title": "Skyrim",
    "category": "RPG",
    "studio": "Bethesda",
    "image": "/assets/games/skyrim.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Bethesda.",
    "lore": "The world of Skyrim is rich with history and mystery.",
    "characters": [
      {
        "name": "Last Dragonborn",
        "description": "The legendary hero with the soul of a dragon, destined to stop the world-eater Alduin.",
        "image": "/assets/characters/skyrim-last_dragonborn.jpg"
      },
      {
        "name": "Alduin",
        "description": "The World-Eater, a powerful dragon who seeks to bring about the end of the world.",
        "image": "/assets/characters/skyrim-alduin.jpg"
      },
      {
        "name": "Paarthurnax",
        "description": "An ancient dragon who helps the Dragonborn and leads the Greybeards.",
        "image": "/assets/characters/skyrim-paarthurnax.jpg"
      },
      {
        "name": "Balgruuf the Greater",
        "description": "The Jarl of Whiterun, a pragmatic leader during the Skyrim civil war.",
        "image": "/assets/characters/skyrim-balgruuf_the_greater.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "fallout-4",
    "title": "Fallout 4",
    "category": "RPG",
    "studio": "Bethesda",
    "image": "/assets/games/fallout4.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Bethesda.",
    "lore": "The world of Fallout 4 is rich with history and mystery.",
    "characters": [
      {
        "name": "Sole Survivor",
        "description": "A parent who emerges from Vault 111 into the Commonwealth wasteland to find their lost son.",
        "image": "/assets/characters/fallout-4-sole_survivor.jpg"
      },
      {
        "name": "Piper Wright",
        "description": "A determined journalist in Diamond City who becomes a companion to the Sole Survivor.",
        "image": "/assets/characters/fallout-4-piper_wright.jpg"
      },
      {
        "name": "Nick Valentine",
        "description": "A synth detective with the memories of a pre-war cop, operating a detective agency in Diamond City.",
        "image": "/assets/characters/fallout-4-nick_valentine.jpg"
      },
      {
        "name": "Paladin Danse",
        "description": "A dedicated officer of the Brotherhood of Steel, committed to their mission of technological preservation.",
        "image": "/assets/characters/fallout-4-paladin_danse.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "mass-effect",
    "title": "Mass Effect",
    "category": "RPG",
    "studio": "BioWare",
    "image": "/assets/games/mass-effect.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from BioWare.",
    "lore": "The world of Mass Effect is rich with history and mystery.",
    "characters": [
      {
        "name": "Commander Shepard",
        "description": "The first human Spectre and commander of the SSV Normandy, tasked with saving the galaxy.",
        "image": "/assets/characters/mass-effect-commander_shepard.jpg"
      },
      {
        "name": "Garrus Vakarian",
        "description": "A Turian former C-Sec officer and loyal companion to Shepard throughout the trilogy.",
        "image": "/assets/characters/mass-effect-garrus_vakarian.jpg"
      },
      {
        "name": "Liara T'Soni",
        "description": "An Asari archaeologist and biotic specialist who becomes an expert on the Protheans.",
        "image": "/assets/characters/mass-effect-liara_t'soni.jpg"
      },
      {
        "name": "Tali'Zorah",
        "description": "A Quarian technical genius on her Pilgrimage who joins Shepard's crew.",
        "image": "/assets/characters/mass-effect-tali'zorah.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "persona-5",
    "title": "Persona 5",
    "category": "RPG",
    "studio": "Atlus",
    "image": "/assets/games/persona5.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Atlus.",
    "lore": "The world of Persona 5 is rich with history and mystery.",
    "characters": [
      {
        "name": "Protagonist (Persona 5)",
        "description": "The leader of the Phantom Thieves of Hearts, code-named Joker.",
        "image": "/assets/characters/persona-5-protagonist_(persona_5).jpg"
      },
      {
        "name": "Morgana",
        "description": "A mysterious cat-like creature who serves as a guide to the Phantom Thieves.",
        "image": "/assets/characters/persona-5-morgana.jpg"
      },
      {
        "name": "Ryuji Sakamoto",
        "description": "A hot-headed former track star and founding member of the Phantom Thieves.",
        "image": "/assets/characters/persona-5-ryuji_sakamoto.jpg"
      },
      {
        "name": "Ann Takamaki",
        "description": "A kind-hearted girl and member of the Phantom Thieves who uses fire magic.",
        "image": "/assets/characters/persona-5-ann_takamaki.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "baldur's-gate-3",
    "title": "Baldur's Gate 3",
    "category": "RPG",
    "studio": "Larian",
    "image": "/assets/games/bg3.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Larian.",
    "lore": "The world of Baldur's Gate 3 is rich with history and mystery.",
    "characters": [
      {
        "name": "Shadowheart",
        "description": "A cleric of Shar with a mysterious object and a hidden past.",
        "image": "/assets/characters/baldur's-gate-3-shadowheart.jpg"
      },
      {
        "name": "Astarion",
        "description": "A high elf vampire spawn who has spent centuries as a slave to a cruel master.",
        "image": "/assets/characters/baldur's-gate-3-astarion.jpg"
      },
      {
        "name": "Gale",
        "description": "A human wizard with a dangerous magical condition and an ambitious past.",
        "image": "/assets/characters/baldur's-gate-3-gale.jpg"
      },
      {
        "name": "Lae'zel",
        "description": "A fierce Githyanki warrior dedicated to her people and their mission to hunt mind flayers.",
        "image": "/assets/characters/baldur's-gate-3-lae'zel.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "ff7-remake",
    "title": "FF7 Remake",
    "category": "RPG",
    "studio": "Square Enix",
    "image": "/assets/games/ff7r.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Square Enix.",
    "lore": "The world of FF7 Remake is rich with history and mystery.",
    "characters": [
      {
        "name": "Cloud Strife",
        "description": "A cold and distant mercenary and former member of SOLDIER, wielding the iconic Buster Sword.",
        "image": "/assets/characters/ff7-remake-cloud_strife.jpg"
      },
      {
        "name": "Tifa Lockhart",
        "description": "A master of martial arts and member of the anti-Shinra group AVALANCHE.",
        "image": "/assets/characters/ff7-remake-tifa_lockhart.jpg"
      },
      {
        "name": "Aerith Gainsborough",
        "description": "A flower girl from the Sector 5 slums with a mysterious connection to the planet.",
        "image": "/assets/characters/ff7-remake-aerith_gainsborough.jpg"
      },
      {
        "name": "Barret Wallace",
        "description": "The passionate leader of an AVALANCHE cell, fighting to save the planet from Shinra.",
        "image": "/assets/characters/ff7-remake-barret_wallace.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "ghost-of-tsushima",
    "title": "Ghost of Tsushima",
    "category": "RPG",
    "studio": "Sucker Punch",
    "image": "/assets/games/ghost-tsushima.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Sucker Punch.",
    "lore": "The world of Ghost of Tsushima is rich with history and mystery.",
    "characters": [
      {
        "name": "Jin Sakai",
        "description": "The last surviving member of Clan Sakai, who must choose between his samurai code and his home.",
        "image": "/assets/characters/ghost-of-tsushima-jin_sakai.jpg"
      },
      {
        "name": "Lord Shimura",
        "description": "The Jito of Tsushima and Jin's uncle, who values honor and the traditional way of the samurai.",
        "image": "/assets/characters/ghost-of-tsushima-lord_shimura.jpg"
      },
      {
        "name": "Yuna",
        "description": "A nimble thief who helps Jin adopt the methods of the Ghost to fight the Mongol invasion.",
        "image": "/assets/characters/ghost-of-tsushima-yuna.jpg"
      },
      {
        "name": "Khotun Khan",
        "description": "The ruthless leader of the Mongol invasion of Tsushima, a master tactician.",
        "image": "/assets/characters/ghost-of-tsushima-khotun_khan.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "horizon-zero-dawn",
    "title": "Horizon Zero Dawn",
    "category": "RPG",
    "studio": "Guerrilla",
    "image": "/assets/games/horizon-zero-dawn.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Guerrilla.",
    "lore": "The world of Horizon Zero Dawn is rich with history and mystery.",
    "characters": [
      {
        "name": "Aloy",
        "description": "A young hunter and outcast who discovers her origins and the true history of the world.",
        "image": "/assets/characters/horizon-zero-dawn-aloy.jpg"
      },
      {
        "name": "Sylens",
        "description": "A mysterious and highly intelligent wanderer who assists Aloy while pursuing his own agenda.",
        "image": "/assets/characters/horizon-zero-dawn-sylens.jpg"
      },
      {
        "name": "Rost",
        "description": "Aloy's adoptive father and a mentor who raised her in the wilds as an outcast.",
        "image": "/assets/characters/horizon-zero-dawn-rost.jpg"
      },
      {
        "name": "Erend",
        "description": "A captain of the Vanguard and a loyal ally to Aloy in her journey.",
        "image": "/assets/characters/horizon-zero-dawn-erend.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "starfield",
    "title": "Starfield",
    "category": "RPG",
    "studio": "Bethesda",
    "image": "/assets/games/starfield.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from Bethesda.",
    "lore": "The world of Starfield is rich with history and mystery.",
    "characters": [
      {
        "name": "Sarah Morgan",
        "description": "The leader of Constellation and a former soldier with a passion for exploration.",
        "image": "/assets/characters/starfield-sarah_morgan.jpg"
      },
      {
        "name": "Sam Coe",
        "description": "A skilled pilot and former Space Ranger with a deep connection to the Freestar Collective.",
        "image": "/assets/characters/starfield-sam_coe.jpg"
      },
      {
        "name": "Barrett",
        "description": "A brilliant scientist and explorer with a quick wit and a love for discovery.",
        "image": "/assets/characters/starfield-barrett.jpg"
      },
      {
        "name": "Andreja",
        "description": "A mysterious member of Constellation with a complex past and unique skills.",
        "image": "/assets/characters/starfield-andreja.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "disco-elysium",
    "title": "Disco Elysium",
    "category": "RPG",
    "studio": "ZA/UM",
    "image": "/assets/games/disco-elysium.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking RPG experience from ZA/UM.",
    "lore": "The world of Disco Elysium is rich with history and mystery.",
    "characters": [
      {
        "name": "Harrier Du Bois",
        "description": "A troubled detective trying to solve a murder while dealing with amnesia and his own internal voices.",
        "image": "/assets/characters/disco-elysium-harrier_du_bois.jpg"
      },
      {
        "name": "Kim Kitsuragi",
        "description": "Harry's patient and professional partner from another precinct, a steadying influence.",
        "image": "/assets/characters/disco-elysium-kim_kitsuragi.jpg"
      },
      {
        "name": "Klaasje Amandou",
        "description": "A mysterious woman and key witness in the murder investigation.",
        "image": "/assets/characters/disco-elysium-klaasje_amandou.jpg"
      },
      {
        "name": "Evrart Claire",
        "description": "The corrupt but influential leader of the dockworkers' union in Martinaise.",
        "image": "/assets/characters/disco-elysium-evrart_claire.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "destiny-2",
    "title": "Destiny 2",
    "category": "FPS",
    "studio": "Bungie",
    "image": "/assets/games/destiny2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Bungie.",
    "lore": "The world of Destiny 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Zavala",
        "description": "The Vanguard Commander and a Titan who has dedicated his life to protecting the Last City.",
        "image": "/assets/characters/destiny-2-zavala.jpg"
      },
      {
        "name": "Ikora Rey",
        "description": "The Vanguard for Warlocks and a powerful master of the Void.",
        "image": "/assets/characters/destiny-2-ikora_rey.jpg"
      },
      {
        "name": "Cayde-6",
        "description": "The former Hunter Vanguard known for his wit and adventurous spirit.",
        "image": "/assets/characters/destiny-2-cayde-6.jpg"
      },
      {
        "name": "The Witness",
        "description": "An ancient and powerful entity that is the ultimate antagonist of the Guardians.",
        "image": "/assets/characters/destiny-2-the_witness.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "apex-legends",
    "title": "Apex Legends",
    "category": "FPS",
    "studio": "Respawn",
    "image": "/assets/games/apex-legends.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Respawn.",
    "lore": "The world of Apex Legends is rich with history and mystery.",
    "characters": [
      {
        "name": "Wraith",
        "description": "A skirmisher with the ability to travel through dimensions and hear voices from other worlds.",
        "image": "/assets/characters/apex-legends-wraith.jpg"
      },
      {
        "name": "Bloodhound",
        "description": "A master tracker and legendary hunter, known for their connection to the Old Ways.",
        "image": "/assets/characters/apex-legends-bloodhound.jpg"
      },
      {
        "name": "Gibraltar",
        "description": "A defensive legend dedicated to protecting his teammates on the battlefield.",
        "image": "/assets/characters/apex-legends-gibraltar.jpg"
      },
      {
        "name": "Lifeline",
        "description": "A support legend and combat medic who uses her skills to save lives.",
        "image": "/assets/characters/apex-legends-lifeline.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "titanfall-2",
    "title": "Titanfall 2",
    "category": "FPS",
    "studio": "Respawn",
    "image": "/assets/games/titanfall2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Respawn.",
    "lore": "The world of Titanfall 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Jack Cooper",
        "description": "A frontiersman turned pilot who forms a bond with the Titan BT-7274.",
        "image": "/assets/characters/titanfall-2-jack_cooper.jpg"
      },
      {
        "name": "BT-7274",
        "description": "An Vanguard-class Titan and Jack Cooper's partner in their mission to stop the IMC.",
        "image": "/assets/characters/titanfall-2-bt-7274.jpg"
      },
      {
        "name": "Kuben Blisk",
        "description": "A ruthless mercenary leader and commander of the Apex Predators.",
        "image": "/assets/characters/titanfall-2-kuben_blisk.jpg"
      },
      {
        "name": "Ash",
        "description": "A simulacrum pilot and cold-blooded assassin who works for the Apex Predators.",
        "image": "/assets/characters/titanfall-2-ash.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "half-life-2",
    "title": "Half-Life 2",
    "category": "FPS",
    "studio": "Valve",
    "image": "/assets/games/half-life2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Valve.",
    "lore": "The world of Half-Life 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Gordon Freeman",
        "description": "The silent protagonist and theoretical physicist who becomes a icon of the resistance.",
        "image": "/assets/characters/half-life-2-gordon_freeman.jpg"
      },
      {
        "name": "Alyx Vance",
        "description": "A core member of the resistance and Gordon's close ally in his journey.",
        "image": "/assets/characters/half-life-2-alyx_vance.jpg"
      },
      {
        "name": "G-Man",
        "description": "An enigmatic and seemingly supernatural figure who monitors and manipulates Gordon.",
        "image": "/assets/characters/half-life-2-g-man.jpg"
      },
      {
        "name": "Barney Calhoun",
        "description": "A former Black Mesa security guard and undercover resistance member.",
        "image": "/assets/characters/half-life-2-barney_calhoun.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "bioshock",
    "title": "Bioshock",
    "category": "FPS",
    "studio": "Irrational",
    "image": "/assets/games/bioshock.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Irrational.",
    "lore": "The world of Bioshock is rich with history and mystery.",
    "characters": [
      {
        "name": "Jack (BioShock)",
        "description": "The protagonist who arrives in the underwater city of Rapture and discovers its dark secrets.",
        "image": "/assets/characters/bioshock-jack_(bioshock).jpg"
      },
      {
        "name": "Andrew Ryan",
        "description": "The visionary and megalomaniacal founder of Rapture, who believes in a society without limits.",
        "image": "/assets/characters/bioshock-andrew_ryan.jpg"
      },
      {
        "name": "Big Daddy",
        "description": "Protecters of the Little Sisters, genetically enhanced humans in deep-sea diving suits.",
        "image": "/assets/characters/bioshock-big_daddy.jpg"
      },
      {
        "name": "Little Sister",
        "description": "Genetically modified girls who harvest ADAM from corpses in the ruins of Rapture.",
        "image": "/assets/characters/bioshock-little_sister.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "borderlands-3",
    "title": "Borderlands 3",
    "category": "FPS",
    "studio": "Gearbox",
    "image": "/assets/games/borderlands3.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Gearbox.",
    "lore": "The world of Borderlands 3 is rich with history and mystery.",
    "characters": [
      {
        "name": "Lilith",
        "description": "The leader of the Crimson Raiders and a powerful Siren known as the Firehawk.",
        "image": "/assets/characters/borderlands-3-lilith.jpg"
      },
      {
        "name": "Claptrap",
        "description": "A wise-cracking and often annoying CL4P-TP general purpose robot.",
        "image": "/assets/characters/borderlands-3-claptrap.jpg"
      },
      {
        "name": "Zane",
        "description": "A semi-retired corporate hitman with multiple gadgets and a sharp tongue.",
        "image": "/assets/characters/borderlands-3-zane.jpg"
      },
      {
        "name": "Amara",
        "description": "A Siren and a champion of the people, capable of summoning powerful ethereal arms.",
        "image": "/assets/characters/borderlands-3-amara.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "overwatch-2",
    "title": "Overwatch 2",
    "category": "FPS",
    "studio": "Blizzard",
    "image": "/assets/games/overwatch2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Blizzard.",
    "lore": "The world of Overwatch 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Tracer",
        "description": "A time-traveling adventurer and former test pilot who uses her abilities to help others.",
        "image": "/assets/characters/overwatch-2-tracer.jpg"
      },
      {
        "name": "Winston",
        "description": "A brilliant genetically engineered gorilla and leader of the Overwatch team.",
        "image": "/assets/characters/overwatch-2-winston.jpg"
      },
      {
        "name": "Reaper",
        "description": "A vengeful assassin with phantom-like abilities, formerly an Overwatch associate.",
        "image": "/assets/characters/overwatch-2-reaper.jpg"
      },
      {
        "name": "Mei",
        "description": "A climatologist and adventurer who uses weather-altering technology to protect the environment.",
        "image": "/assets/characters/overwatch-2-mei.jpg"
      }
    ],
    "maps": []
  },

  {
    "id": "cod-mw",
    "title": "CoD MW",
    "category": "FPS",
    "studio": "Infinity Ward",
    "image": "/assets/games/cod-mw.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Infinity Ward.",
    "lore": "The world of CoD MW is rich with history and mystery.",
    "characters": [
      {
        "name": "John Price (Reboot)",
        "description": "A legendary SAS officer and leader of Task Force 141.",
        "image": "/assets/characters/cod-mw-john_price_(reboot).jpg"
      },
      {
        "name": "Simon Riley (Reboot)",
        "description": "The iconic and mysterious Ghost, a master of stealth and tactical operations.",
        "image": "/assets/characters/cod-mw-simon_riley_(reboot).jpg"
      },
      {
        "name": "John MacTavish (Reboot)",
        "description": "Soap, a highly skilled demolitions expert and sniper.",
        "image": "/assets/characters/cod-mw-john_mactavish_(reboot).jpg"
      },
      {
        "name": "Kyle Garrick",
        "description": "Gaz, a former police officer and key member of Task Force 141.",
        "image": "/assets/characters/cod-mw-kyle_garrick.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "battlefield-1",
    "title": "Battlefield 1",
    "category": "FPS",
    "studio": "DICE",
    "image": "/assets/games/battlefield1.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from DICE.",
    "lore": "The world of Battlefield 1 is rich with history and mystery.",
    "characters": [
      {
        "name": "Frederick Bishop",
        "description": "A grizzled veteran who mentors a young message runner during the Gallipoli campaign.",
        "image": "/assets/characters/battlefield-1-frederick_bishop.jpg"
      },
      {
        "name": "Danny Edwards",
        "description": "A young tank driver who learns the harsh realities of war on the Western Front.",
        "image": "/assets/characters/battlefield-1-danny_edwards.jpg"
      },
      {
        "name": "Luca Vincenzo Coccila",
        "description": "An Italian Arditi soldier reflecting on his experiences in the Alps.",
        "image": "/assets/characters/battlefield-1-luca_vincenzo_coccila.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "r6-siege",
    "title": "R6 Siege",
    "category": "FPS",
    "studio": "Ubisoft",
    "image": "/assets/games/r6-siege.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Ubisoft.",
    "lore": "The world of R6 Siege is rich with history and mystery.",
    "characters": [
      {
        "name": "Ash",
        "description": "An FBI SWAT operator known for her explosive entry capabilities.",
        "image": "/assets/characters/r6-siege-ash.jpg"
      },
      {
        "name": "J\u00e4ger",
        "description": "A GSG 9 operator who specializes in defense and trophy systems.",
        "image": "/assets/characters/r6-siege-jager.jpg"
      },
      {
        "name": "Thermite",
        "description": "An FBI SWAT operator with powerful exothermic charges for breaching.",
        "image": "/assets/characters/r6-siege-thermite.jpg"
      },
      {
        "name": "Thatcher",
        "description": "An SAS operator whose EMP grenades are essential for disabling enemy technology.",
        "image": "/assets/characters/r6-siege-thatcher.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "far-cry-6",
    "title": "Far Cry 6",
    "category": "FPS",
    "studio": "Ubisoft",
    "image": "/assets/games/far-cry6.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Ubisoft.",
    "lore": "The world of Far Cry 6 is rich with history and mystery.",
    "characters": [
      {
        "name": "Dani Rojas",
        "description": "The protagonist and revolutionary fighter seeking to liberate Yara from a dictator.",
        "image": "/assets/characters/far-cry-6-dani_rojas.jpg"
      },
      {
        "name": "Ant\u00f3n Castillo",
        "description": "The ruthless dictator of Yara who seeks to preserve his family's legacy.",
        "image": "/assets/characters/far-cry-6-anton_castillo.jpg"
      },
      {
        "name": "Guapo",
        "description": "Dani's loyal pet alligator and combat companion.",
        "image": "/assets/characters/far-cry-6-guapo.jpg"
      },
      {
        "name": "Juan Cortez",
        "description": "A legendary spymaster and revolutionary mentor to Dani.",
        "image": "/assets/characters/far-cry-6-juan_cortez.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "metro-exodus",
    "title": "Metro Exodus",
    "category": "FPS",
    "studio": "4A Games",
    "image": "/assets/games/metro-exodus.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from 4A Games.",
    "lore": "The world of Metro Exodus is rich with history and mystery.",
    "characters": [
      {
        "name": "Artyom",
        "description": "The protagonist who leads a group of survivors out of the Moscow Metro in search of a new home.",
        "image": "/assets/characters/metro-exodus-artyom.jpg"
      },
      {
        "name": "Anna Mel'nikova",
        "description": "Artyom's wife and a highly skilled sniper in the Spartan Order.",
        "image": "/assets/characters/metro-exodus-anna_mel'nikova.jpg"
      },
      {
        "name": "Miller",
        "description": "The leader of the Spartan Order and a fatherly figure to Artyom and Anna.",
        "image": "/assets/characters/metro-exodus-miller.jpg"
      },
      {
        "name": "Sam",
        "description": "A former US Marine and Spartan Ranger who dreams of returning to his homeland.",
        "image": "/assets/characters/metro-exodus-sam.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "wolfenstein-2",
    "title": "Wolfenstein 2",
    "category": "FPS",
    "studio": "MachineGames",
    "image": "/assets/games/wolfenstein2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from MachineGames.",
    "lore": "The world of Wolfenstein 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "William Joseph Blazkowicz",
        "description": "The legendary Nazi-slayer and leader of the American resistance.",
        "image": "/assets/characters/wolfenstein-2-william_joseph_blazkowicz.jpg"
      },
      {
        "name": "Anya Oliwa",
        "description": "Blazkowicz's wife and a vital member of the resistance intelligence network.",
        "image": "/assets/characters/wolfenstein-2-anya_oliwa.jpg"
      },
      {
        "name": "Frau Engel",
        "description": "A high-ranking and sadistic Nazi officer who is the primary antagonist.",
        "image": "/assets/characters/wolfenstein-2-frau_engel.jpg"
      },
      {
        "name": "Seth Roth",
        "description": "A brilliant Jewish scientist and inventor who provides advanced technology to the resistance.",
        "image": "/assets/characters/wolfenstein-2-seth_roth.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "crysis",
    "title": "Crysis",
    "category": "FPS",
    "studio": "Crytek",
    "image": "/assets/games/crysis.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Crytek.",
    "lore": "The world of Crysis is rich with history and mystery.",
    "characters": [
      {
        "name": "Laurence \"Prophet\" Barnes",
        "description": "The commander of Raptor Team and a veteran with a deep connection to the Nanosuit.",
        "image": "/assets/characters/crysis-laurence_prophet_barnes.jpg"
      },
      {
        "name": "Michael \"Psycho\" Sykes",
        "description": "A member of Raptor Team known for his aggressive and effective combat style.",
        "image": "/assets/characters/crysis-michael_psycho_sykes.jpg"
      },
      {
        "name": "Nomad",
        "description": "The protagonist of the first Crysis, a member of Raptor Team in a Nanosuit.",
        "image": "/assets/characters/crysis-nomad.jpg"
      },
      {
        "name": "Alcatraz",
        "description": "A Marine who becomes the host for Prophet's Nanosuit in Crysis 2.",
        "image": "/assets/characters/crysis-alcatraz.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "silent-hill-2",
    "title": "Silent Hill 2",
    "category": "Horror",
    "studio": "Bloober Team",
    "image": "/assets/games/silent-hill2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Bloober Team.",
    "lore": "The world of Silent Hill 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "James Sunderland",
        "description": "A man who travels to Silent Hill after receiving a letter from his deceased wife.",
        "image": "/assets/characters/silent-hill-2-james_sunderland.jpg"
      },
      {
        "name": "Mary Shepherd-Sunderland",
        "description": "James's wife who died of a long illness three years before the start of the game.",
        "image": "/assets/characters/silent-hill-2-mary_shepherd-sunderland.jpg"
      },
      {
        "name": "Maria",
        "description": "A mysterious woman James meets in Silent Hill who bear a striking resemblance to Mary.",
        "image": "/assets/characters/silent-hill-2-maria.jpg"
      },
      {
        "name": "Angela Orosco",
        "description": "A troubled young woman James encounter in Silent Hill, searching for her mother.",
        "image": "/assets/characters/silent-hill-2-angela_orosco.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "dead-space",
    "title": "Dead Space",
    "category": "Horror",
    "studio": "Motive",
    "image": "/assets/games/dead-space.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Motive.",
    "lore": "The world of Dead Space is rich with history and mystery.",
    "characters": [
      {
        "name": "Isaac Clarke",
        "description": "An engineer trapped on a spaceship infested with horrific necro-morphs.",
        "image": "/assets/characters/dead-space-isaac_clarke.jpg"
      },
      {
        "name": "Nicole Brennan",
        "description": "Isaac's girlfriend and a medical officer on the USG Ishimura.",
        "image": "/assets/characters/dead-space-nicole_brennan.jpg"
      },
      {
        "name": "Kendra Daniels",
        "description": "A computer specialist and member of the Ishimura search and rescue team.",
        "image": "/assets/characters/dead-space-kendra_daniels.jpg"
      },
      {
        "name": "Zach Hammond",
        "description": "The chief security officer and leader of the Search and Rescue mission.",
        "image": "/assets/characters/dead-space-zach_hammond.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "amnesia",
    "title": "Amnesia",
    "category": "Horror",
    "studio": "Frictional",
    "image": "/assets/games/amnesia.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Frictional.",
    "lore": "The world of Amnesia is rich with history and mystery.",
    "characters": [
      {
        "name": "Daniel",
        "description": "A man who awakens in a dark castle with no memories of his past, pursued by a shadowy presence.",
        "image": "/assets/characters/amnesia-daniel.jpg"
      },
      {
        "name": "Alexander of Brennenburg",
        "description": "The lord of the castle who has been performing dark rituals to prolong his life.",
        "image": "/assets/characters/amnesia-alexander_of_brennenburg.jpg"
      },
      {
        "name": "Agrippa",
        "description": "An ancient scholar trapped in the castle, who guides Daniel through the darkness.",
        "image": "/assets/characters/amnesia-agrippa.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "outlast-2",
    "title": "Outlast 2",
    "category": "Horror",
    "studio": "Red Barrels",
    "image": "/assets/games/outlast2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Red Barrels.",
    "lore": "The world of Outlast 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Blake Langermann",
        "description": "A cameraman and journalist who becomes stranded in a remote cultist-controlled village.",
        "image": "/assets/characters/outlast-2-blake_langermann.jpg"
      },
      {
        "name": "Lynn Langermann",
        "description": "Blake's wife and a journalist who is kidnapped by the cultists.",
        "image": "/assets/characters/outlast-2-lynn_langermann.jpg"
      },
      {
        "name": "Sullivan Knoth",
        "description": "The charismatic and fanatical leader of the cult in Temple Gate.",
        "image": "/assets/characters/outlast-2-sullivan_knoth.jpg"
      },
      {
        "name": "Val",
        "description": "The leader of the Heretics, a group that has broken away from Knoth's cult.",
        "image": "/assets/characters/outlast-2-val.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "alien-isolation",
    "title": "Alien Isolation",
    "category": "Horror",
    "studio": "Creative Assembly",
    "image": "/assets/games/alien-isolation.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Creative Assembly.",
    "lore": "The world of Alien Isolation is rich with history and mystery.",
    "characters": [
      {
        "name": "Amanda Ripley",
        "description": "The daughter of Ellen Ripley, searching for the truth about her mother's disappearance.",
        "image": "/assets/characters/alien-isolation-amanda_ripley.jpg"
      },
      {
        "name": "Christopher Samuels",
        "description": "A Weyland-Yutani synthetic who assists Amanda in her journey.",
        "image": "/assets/characters/alien-isolation-christopher_samuels.jpg"
      },
      {
        "name": "Ricardo",
        "description": "A security officer on Sevastopol Station who helps Amanda survive the Alien.",
        "image": "/assets/characters/alien-isolation-ricardo.jpg"
      },
      {
        "name": "Working Joe",
        "description": "Hostile synthetic assistants on Sevastopol Station who have turned on the crew.",
        "image": "/assets/characters/alien-isolation-working_joe.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "evil-within-2",
    "title": "Evil Within 2",
    "category": "Horror",
    "studio": "Tango",
    "image": "/assets/games/evil-within2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Tango.",
    "lore": "The world of Evil Within 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Sebastian Castellanos",
        "description": "A detective who enters a nightmarish simulated world to save his daughter Lily.",
        "image": "/assets/characters/evil-within-2-sebastian_castellanos.jpg"
      },
      {
        "name": "Juli Kidman",
        "description": "Sebastian's former partner and an agent of Mobius who assists him from the outside.",
        "image": "/assets/characters/evil-within-2-juli_kidman.jpg"
      },
      {
        "name": "Theodore Wallace",
        "description": "A manipulative cult leader who seek to control the STEM system.",
        "image": "/assets/characters/evil-within-2-theodore_wallace.jpg"
      },
      {
        "name": "Stefano Valentini",
        "description": "A sadistic artist who use the nightmarish creatures of STEM for his work.",
        "image": "/assets/characters/evil-within-2-stefano_valentini.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "alan-wake-2",
    "title": "Alan Wake 2",
    "category": "Horror",
    "studio": "Remedy",
    "image": "/assets/games/alan-wake2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Remedy.",
    "lore": "The world of Alan Wake 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Alan Wake",
        "description": "A best-selling horror writer who has been trapped in a dark dimension for thirteen years.",
        "image": "/assets/characters/alan-wake-2-alan_wake.jpg"
      },
      {
        "name": "Saga Anderson",
        "description": "An FBI profiler investigating a series of ritualistic murders in the Pacific Northwest.",
        "image": "/assets/characters/alan-wake-2-saga_anderson.jpg"
      },
      {
        "name": "Alex Casey",
        "description": "Saga's partner and an FBI agent who is also a character in Alan Wake's novels.",
        "image": "/assets/characters/alan-wake-2-alex_casey.jpg"
      },
      {
        "name": "Mr. Door",
        "description": "An enigmatic and powerful figure who exists in the dark dimension alongside Alan Wake.",
        "image": "/assets/characters/alan-wake-2-mr._door.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "phasmophobia",
    "title": "Phasmophobia",
    "category": "Horror",
    "studio": "Kinetic",
    "image": "/assets/games/phasmophobia.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Kinetic.",
    "lore": "The world of Phasmophobia is rich with history and mystery.",
    "characters": [
      {
        "name": "Ghost Hunter",
        "description": "The player character, a member of a team investigating paranormal activity.",
        "image": "/assets/characters/phasmophobia-ghost_hunter.jpg"
      },
      {
        "name": "Spirit",
        "description": "The most common ghost type, but still very dangerous to inexperienced hunters.",
        "image": "/assets/characters/phasmophobia-spirit.jpg"
      },
      {
        "name": "Wraith",
        "description": "A ethereal ghost that can travel through walls and tracks by sound.",
        "image": "/assets/characters/phasmophobia-wraith.jpg"
      },
      {
        "name": "Phantom",
        "description": "A ghost that can possess the living and cause deep fear in those who see it.",
        "image": "/assets/characters/phasmophobia-phantom.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "until-dawn",
    "title": "Until Dawn",
    "category": "Horror",
    "studio": "Supermassive",
    "image": "/assets/games/until-dawn.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Supermassive.",
    "lore": "The world of Until Dawn is rich with history and mystery.",
    "characters": [
      {
        "name": "Samantha Giddings",
        "description": "A kind and resourceful girl who becomes a key leader of the group.",
        "image": "/assets/characters/until-dawn-samantha_giddings.jpg"
      },
      {
        "name": "Michael Munroe",
        "description": "A charming and ambitious boy who must use his wits to survive the night.",
        "image": "/assets/characters/until-dawn-michael_munroe.jpg"
      },
      {
        "name": "Joshua Washington",
        "description": "A young man who has organized the winter getaway in memory of his sisters.",
        "image": "/assets/characters/until-dawn-joshua_washington.jpg"
      },
      {
        "name": "Hannah Washington",
        "description": "One of Josh's sisters whose disappearance a year earlier triggered the game's events.",
        "image": "/assets/characters/until-dawn-hannah_washington.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "little-nightmares-2",
    "title": "Little Nightmares 2",
    "category": "Horror",
    "studio": "Tarsier",
    "image": "/assets/games/little-nightmares2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Tarsier.",
    "lore": "The world of Little Nightmares 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Mono",
        "description": "A young boy with a paper bag over his head who must navigate a distorted world.",
        "image": "/assets/characters/little-nightmares-2-mono.jpg"
      },
      {
        "name": "Six",
        "description": "A girl in a yellow raincoat who becomes Mono's companion in his journey.",
        "image": "/assets/characters/little-nightmares-2-six.jpg"
      },
      {
        "name": "The Hunter",
        "description": "A giant and formidable hunter who pursues Mono and Six in the beginning.",
        "image": "/assets/characters/little-nightmares-2-the_hunter.jpg"
      },
      {
        "name": "The Teacher",
        "description": "A long-necked and terrifying teacher who guards the school.",
        "image": "/assets/characters/little-nightmares-2-the_teacher.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "layers-of-fear",
    "title": "Layers of Fear",
    "category": "Horror",
    "studio": "Bloober",
    "image": "/assets/games/layers-of-fear.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Bloober.",
    "lore": "The world of Layers of Fear is rich with history and mystery.",
    "characters": [
      {
        "name": "The Painter",
        "description": "The protagonist, a struggling artist whose descent into madness is the core of the game.",
        "image": "/assets/characters/layers-of-fear-the_painter.jpg"
      },
      {
        "name": "The Musician",
        "description": "The Painter's wife, a talented pianist whose career was cut short by a tragic accident.",
        "image": "/assets/characters/layers-of-fear-the_musician.jpg"
      },
      {
        "name": "The Artist's Daughter",
        "description": "A young girl caught in the middle of her parents' deteriorating relationship.",
        "image": "/assets/characters/layers-of-fear-the_artist's_daughter.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "soma",
    "title": "SOMA",
    "category": "Horror",
    "studio": "Frictional",
    "image": "/assets/games/soma.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Frictional.",
    "lore": "The world of SOMA is rich with history and mystery.",
    "characters": [
      {
        "name": "Simon Jarrett",
        "description": "A man who undergoes a brain scan and awakens in a decaying underwater research facility.",
        "image": "/assets/characters/soma-simon_jarrett.jpg"
      },
      {
        "name": "Catherine Chun",
        "description": "A scientist at the facility who guide Simon through the AI-controlled research center.",
        "image": "/assets/characters/soma-catherine_chun.jpg"
      },
      {
        "name": "The WAU",
        "description": "An artificial intelligence that has taken over the facility and corrupted the inhabitants.",
        "image": "/assets/characters/soma-the_wau.jpg"
      },
      {
        "name": "Brandon Wan",
        "description": "A former security chief who is now a semi-sentient corrupted being.",
        "image": "/assets/characters/soma-brandon_wan.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "fatal-frame",
    "title": "Fatal Frame",
    "category": "Horror",
    "studio": "Koei Tecmo",
    "image": "/assets/games/fatal-frame.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Koei Tecmo.",
    "lore": "The world of Fatal Frame is rich with history and mystery.",
    "characters": [
      {
        "name": "Mio Amakura",
        "description": "A young girl who visits a lost village where she is hunted by spirits.",
        "image": "/assets/characters/fatal-frame-mio_amakura.jpg"
      },
      {
        "name": "Mayu Amakura",
        "description": "Mio's twin sister who has a mysterious connection to the village's spirits.",
        "image": "/assets/characters/fatal-frame-mayu_amakura.jpg"
      },
      {
        "name": "Sae Kurosawa",
        "description": "The vengeful spirit of a girl who was sacrificed in a tragic ritual in the village.",
        "image": "/assets/characters/fatal-frame-sae_kurosawa.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "dead-by-daylight",
    "title": "Dead by Daylight",
    "category": "Horror",
    "studio": "Behaviour",
    "image": "/assets/games/dead-by-daylight.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking Horror experience from Behaviour.",
    "lore": "The world of Dead by Daylight is rich with history and mystery.",
    "characters": [
      {
        "name": "Evan MacMillan",
        "description": "The Trapper, a powerful and iconic killer who uses bear traps to hunt survivors.",
        "image": "/assets/characters/dead-by-daylight-evan_macmillan.jpg"
      },
      {
        "name": "Dwight Fairfield",
        "description": "A survivor who is known for his leadership skills and ability to hide.",
        "image": "/assets/characters/dead-by-daylight-dwight_fairfield.jpg"
      },
      {
        "name": "Meg Thomas",
        "description": "A fast and agile survivor who can outrun many killers.",
        "image": "/assets/characters/dead-by-daylight-meg_thomas.jpg"
      },
      {
        "name": "Claudette Morel",
        "description": "A survivor with deep knowledge of healing and medical supplies.",
        "image": "/assets/characters/dead-by-daylight-claudette_morel.jpg"
      }
    ],
    "maps": []
  },
  {
    "id": "portal-2",
    "title": "Portal 2",
    "category": "FPS",
    "studio": "Valve",
    "image": "/assets/games/portal2.jpg",
    "rating": "9.0/10",
    "description": "A ground-breaking FPS experience from Valve.",
    "lore": "The world of Portal 2 is rich with history and mystery.",
    "characters": [
      {
        "name": "Chell",
        "description": "The silent protagonist who must use the portal gun to escape the Aperture Science facility.",
        "image": "/assets/characters/portal-2-chell.jpg"
      },
      {
        "name": "GLaDOS",
        "description": "The cynical and manipulative AI that controls the testing chambers.",
        "image": "/assets/characters/portal-2-glados.jpg"
      },
      {
        "name": "Wheatley",
        "description": "A talkative and initially helpful personality core who has his own hidden agenda.",
        "image": "/assets/characters/portal-2-wheatley.jpg"
      },
      {
        "name": "Cave Johnson",
        "description": "The eccentric and ambitious founder of Aperture Science, heard through recordings.",
        "image": "/assets/characters/portal-2-cave_johnson.jpg"
      }
    ],
    "maps": []
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
               <div class="sub-item-info">
                 <h3>${c.name}</h3>
                 <p>${c.description}</p>
               </div>
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
