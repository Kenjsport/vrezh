// Data Store with Rich Content
const booksData = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    category: "Self-improvement",
    author: "James Clear",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Atomic_habits.jpg/396px-Atomic_habits.jpg",
    rating: "4.8/5",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    buyLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    category: "Business",
    author: "Peter Thiel",
    image: "https://upload.wikimedia.org/wikipedia/en/2/22/Zero_to_One_book_cover.jpg",
    rating: "4.5/5",
    description: "The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine. If you are copying these people, you aren't learning from them. Zero to One presents at once an optimistic view of the future of progress in America and a new way of thinking about innovation.",
    buyLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
  },
  {
    id: "1984",
    title: "1984",
    category: "Literature",
    author: "George Orwell",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg",
    rating: "4.9/5",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
    buyLink: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934"
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `book-${i}`,
    title: `Book Title ${i + 4}`,
    category: ["Business", "Self-improvement", "Sport", "Literature", "Science"][i % 5],
    author: `Author ${i + 4}`,
    image: `https://placehold.co/400x600/1e293b/FFF?text=Book+${i + 4}`,
    rating: "4.0/5",
    description: "A fascinating generic book that explores deep themes and exciting concepts.",
    buyLink: "https://amazon.com"
  }))
];

const filmsData = [
  {
    id: "inception",
    title: "Inception",
    category: "Sci-Fi",
    year: "2010",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    rating: "8.8/10",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    buyLink: "https://kinopark.kz/en"
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    category: "Thriller",
    year: "2008",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    rating: "9.0/10",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    buyLink: "https://kinopark.kz/en"
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `film-${i}`,
    title: `Film Title ${i + 3}`,
    category: ["Thriller", "Sci-Fi", "Fantasy", "Horror", "Crime"][i % 5],
    year: `${2020 + i}`,
    image: `https://placehold.co/400x600/334155/FFF?text=Film+${i + 3}`,
    rating: "7.5/10",
    description: "An exciting film full of twists and turns.",
    buyLink: "https://kinopark.kz/en"
  }))
];

const gamesData = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    category: "RPG",
    studio: "FromSoftware",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_Art.jpg",
    rating: "9.5/10",
    description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin, who provided the material for the game's setting.",
    lore: "The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the Elden Ring and become the Elden Lord in the Lands Between.",
    characters: [
      { name: "Melina", image: "https://placehold.co/200x200/475569/FFF?text=Melina" },
      { name: "Ranni", image: "https://placehold.co/200x200/475569/FFF?text=Ranni" },
      { name: "Malenia", image: "https://placehold.co/200x200/475569/FFF?text=Malenia" }
    ],
    maps: [
      { name: "Limgrave", image: "https://placehold.co/400x300/475569/FFF?text=Limgrave" },
      { name: "Caelid", image: "https://placehold.co/400x300/475569/FFF?text=Caelid" }
    ]
  },
  {
    id: "doom-eternal",
    title: "Doom Eternal",
    category: "FPS",
    studio: "id Software",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
    rating: "9/10",
    description: "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. It is the sequel to Doom (2016).",
    lore: "The Doom Slayer returns to find Earth has suffered a demonic invasion. He must hunt down the Hell Priests to save humanity.",
    characters: [
      { name: "Doom Slayer", image: "https://placehold.co/200x200/991b1b/FFF?text=Slayer" },
      { name: "Marauder", image: "https://placehold.co/200x200/991b1b/FFF?text=Marauder" }
    ],
    maps: [
      { name: "Phobos", image: "https://placehold.co/400x300/991b1b/FFF?text=Phobos" }
    ]
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `game-${i}`,
    title: `Game Title ${i + 3}`,
    category: ["RPG", "FPS", "Horror"][i % 3],
    studio: `Studio ${i + 3}`,
    image: `https://placehold.co/400x600/0f172a/FFF?text=Game+${i + 3}`,
    rating: "8.0/10",
    description: "An immersive gaming experience.",
    lore: "Deep lore placeholder text.",
    characters: [],
    maps: []
  }))
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

// Functions
function renderCard(item, type) {
  const subtitle = type === 'books' ? item.author : (type === 'films' ? item.year : item.studio);
  return `
    <div class="item-card" onclick="openDetail('${type}', '${item.id}')">
      <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy">
      <div class="item-content">
        <div class="item-title">${item.title}</div>
        <div class="item-subtitle">${subtitle}</div>
        <div class="item-subtitle" style="font-size: 0.75rem; color: var(--primary-color); margin-top: 0.25rem;">${item.category}</div>
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
  grid.innerHTML = filteredData.map(item => renderCard(item, type)).join('');
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
        <img src="${item.image}" alt="${item.title}" class="detail-image">
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
               <img src="${c.image}" alt="${c.name}">
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
               <img src="${m.image}" alt="${m.name}" style="aspect-ratio: 16/9;">
               <p>${m.name}</p>
             </div>
          `).join('')}
        </div>
      `;
    }
  }
};

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

// Back button logic uses history.back() which works if we push state, 
// OR we can just simple back to last category. For simplicity, let's override the back button
// in the HTML to just go back to home or previous category? 
// The HTML has onclick="history.back()". This might not work in a purely hashless SPA without pushState.
// Let's fix the back button in HTML or here.
document.querySelector('.back-btn').onclick = (e) => {
  e.preventDefault();
  // Simple heuristic: go back to home, or if we recall where we came from.
  // For now, let's just go to 'home' or better yet, make it smart.
  // Actually, let's just make it go back to the list of the current type.
  // But we don't know the type easily unless we store it.
  // Let's just go Home for safety or try to restore the last view.
  switchView('home');
};


// Initial Render
switchView('home');
