/* ==========================================================================
   LU ZEEBRA - CLOTHING SHOWCASE & LOOKBOOK SCRIPT
   "Fashion Beyond Black and White"
   WhatsApp Orders: +94 78 999 9299
   ========================================================================== */

// 1. THE 18 OFFICIAL LU ZEEBRA CLOTHING SHOWCASE LOOKS
const SHOWCASE_LOOKS = [
  {
    id: 'lz-look-01',
    title: 'MEDITERRANEAN RESORT CHIC',
    category: 'resortwear',
    image: 'images/look1.jpg',
    description: 'A sun-kissed coastal ensemble featuring a sleek olive ribbed knit tank top contoured against a flowing high-waisted cream satin-linen midi skirt.',
    fabric: 'Contoured Ribbed Knit & Satin-Linen Blend',
    fit: 'High-Waist Tailored Contour',
    occasion: 'Daytime Villa & Resortwear'
  },
  {
    id: 'lz-look-02',
    title: 'URBAN SCRIPT GRAPHIC TEE & DENIM',
    category: 'casual',
    image: 'images/look2.jpg',
    description: 'Effortless street-style confidence combining Lu Zeebra signature black script graphic t-shirt with vintage-wash distressed light denim shorts.',
    fabric: '100% Organic Premium Cotton & Distressed Denim',
    fit: 'Relaxed Urban Fit',
    occasion: 'Daily Streetwear & Casual Chic'
  },
  {
    id: 'lz-look-03',
    title: 'STRUCTURED CROPPED SHIRT & TROUSERS',
    category: 'tailored',
    image: 'images/look3.jpg',
    description: 'Modern urban tailoring featuring a slate grey cropped blouse with puff sleeves and contrasting black lapels, paired with high-waist tapered black trousers.',
    fabric: 'Poplin Cotton & Fine Suiting Blend',
    fit: 'Cropped Structured Silhouette',
    occasion: 'Workwear & Urban Tailored'
  },
  {
    id: 'lz-look-04',
    title: 'EMBROIDERED ORGANZA TUNIC & PEARL EMBLEM',
    category: 'couture',
    image: 'images/look4.jpg',
    description: 'Exquisite haute couture sheer white tunic with intricate floral embroidery, mandarin collar, and a handcrafted pearl motif emblem over tailored white trousers.',
    fabric: 'Sheer Silk Organza with Handcraft Pearl Appliqué',
    fit: 'Fluid High-Low Tunic Cut',
    occasion: 'Garden Soirée & Couture Formal'
  },
  {
    id: 'lz-look-05',
    title: 'SCALLOPED LACE CARDIGAN & SATIN SLIP GOWN',
    category: 'couture',
    image: 'images/look5.jpg',
    description: 'An ethereal dual-layer ensemble featuring a silky white satin slip dress layered under a belted sheer scalloped lace long cardigan with short sleeves.',
    fabric: 'Delicate Corded Lace & Silk Satin Slip',
    fit: 'Tiered Belted Evening Silhouette',
    occasion: 'High Fashion & Formal Ceremonies'
  },
  {
    id: 'lz-look-06',
    title: 'GRAPHIC SUNBURST SMOCKED SUMMER DRESS',
    category: 'resortwear',
    image: 'images/look6.jpg',
    description: 'Vibrant yellow and monochrome sunburst geometric print mini dress featuring flutter sleeves, a ruffled collar, and an elasticated smocked waist.',
    fabric: 'Breathable Lightweight Cotton Poplin',
    fit: 'Smocked Waistband & A-Line Hem',
    occasion: 'Sun-Drenched Summer Parties'
  },
  {
    id: 'lz-look-07',
    title: 'CROP TANK & CYAN WIDE-LEG PALAZZO PANTS',
    category: 'casual',
    image: 'images/look7.jpg',
    description: 'Fresh summer relaxation pairing a classic white ribbed scoop-neck crop tank top with vibrant cyan blue drawstring wide-leg palazzo trousers.',
    fabric: 'Ribbed Stretch Cotton & Soft Rayon Jersey',
    fit: 'Fluid High-Rise Wide Leg',
    occasion: 'Vacation Lounge & Tropical Strolls'
  },
  {
    id: 'lz-look-08',
    title: 'FLORAL EMBROIDERED TIERED GARDEN DRESS',
    category: 'couture',
    image: 'images/look8.jpg',
    description: 'Romantic ivory midi dress with intricate tonal floral embroidery, elasticated puff sleeves, tie waist sash, and a delicate scalloped eyelet hem.',
    fabric: '100% Embroidered Cotton Broderie Anglaise',
    fit: 'Tiered A-Line Midi Silhouette',
    occasion: 'Outdoor Garden Parties & Weddings'
  },
  {
    id: 'lz-look-09',
    title: 'RED GINGHAM CROPPED SHIRT & WHITE SHORTS',
    category: 'casual',
    image: 'images/look9.jpg',
    description: 'Playful retro aesthetic featuring a red and white gingham plaid cropped collared shirt with white accent collar and chest pocket, paired with clean white denim shorts.',
    fabric: 'Woven Cotton Plaid & Denim',
    fit: 'Cropped Boxy Fit',
    occasion: 'Weekend Brunch & Picnic Days'
  },
  {
    id: 'lz-look-10',
    title: 'CRIMSON GLITTER TOP & PEARL COLLAR SKIRT',
    category: 'tailored',
    image: 'images/look10.jpg',
    description: 'Glamorous evening outfit featuring a shimmery crimson red long-sleeve knit top detailed with a pearl-beaded keyhole neckline, paired with a sleek black column midi skirt.',
    fabric: 'Metallic Shimmer Knit & Stretch Ottoman',
    fit: 'Fitted Column Silhouette',
    occasion: 'Cocktail Evenings & Formal Dinners'
  },
  {
    id: 'lz-look-11',
    title: 'CHERRY SUNSHINE TEE & WHITE SHORTS',
    category: 'casual',
    image: 'images/look11.jpg',
    description: 'Navy blue organic cotton t-shirt with sweet cherry sunshine graphic paired with high-waist white denim shorts for a relaxed sunny daytime look.',
    fabric: '100% Organic Soft Cotton & Stretch Denim',
    fit: 'Casual Tucked Silhouette',
    occasion: 'Daytime Outings & Beachside Walk'
  },
  {
    id: 'lz-look-12',
    title: 'BUNNY EMBROIDERED TEE & LIGHT JEANS',
    category: 'casual',
    image: 'images/look12.jpg',
    description: 'Off-white organic cotton t-shirt featuring subtle gold bunny graphic embroidery paired with high-waist light wash straight denim jeans.',
    fabric: 'Soft Combed Cotton & Vintage Denim',
    fit: 'Classic Straight Leg Fit',
    occasion: 'Everyday Casual Chic'
  },
  {
    id: 'lz-look-13',
    title: 'MONOCHROME ROSE PRINT LONG-SLEEVE GOWN',
    category: 'couture',
    image: 'images/look13.jpg',
    description: 'Ethereal cream and charcoal grey rose floral print empire waist gown with sheer long flared sleeves, keyhole neckline, and delicate drawstring waist.',
    fabric: 'Lightweight Chiffon & Silk Blend',
    fit: 'Empire Waist Tiered Gown',
    occasion: 'High Fashion & Garden Soirée'
  },
  {
    id: 'lz-look-14',
    title: 'POWDER BLUE SAILOR COLLAR MINI DRESS',
    category: 'resortwear',
    image: 'images/look14.jpg',
    description: 'Nautical-inspired powder blue A-line mini dress with dark navy sailor collar trim, square neckline, and polished gold buttons.',
    fabric: 'Structured Linen-Cotton Blend',
    fit: 'A-Line Tailored Fit',
    occasion: 'Coastal Promenade & Resort Wear'
  },
  {
    id: 'lz-look-15',
    title: 'NAVY ESSENTIAL TEE & WHITE LINEN PANTS',
    category: 'casual',
    image: 'images/look15.jpg',
    description: 'Clean coastal minimalism combining a solid dark navy crewneck cotton t-shirt with relaxed white linen wide-leg trousers.',
    fabric: '100% Premium Cotton & Pure Linen',
    fit: 'Relaxed Wide-Leg Fit',
    occasion: 'Harbor Walk & Seaside Lounging'
  },
  {
    id: 'lz-look-16',
    title: 'OFF-SHOULDER OLIVE ZEBRA STRIPE DRESS',
    category: 'resortwear',
    image: 'images/look16.jpg',
    description: 'Flirty off-shoulder ruffled mini dress featuring olive green and cream wavy zebra print pattern with ruffled neckline and waist sash.',
    fabric: 'Fluid Georgette Chiffon',
    fit: 'Off-Shoulder Fit & Flare',
    occasion: 'Summer Garden Party & Resort'
  },
  {
    id: 'lz-look-17',
    title: 'LIMITED EDITION OLIVE TEE & SHORTS',
    category: 'casual',
    image: 'images/look17.jpg',
    description: 'Casual olive green t-shirt featuring rolled cap sleeves and chest typography, paired with light wash distressed denim shorts.',
    fabric: 'Soft Washed Jersey & Denim',
    fit: 'Relaxed Cap Sleeve Fit',
    occasion: 'Urban Casual & Strolls'
  },
  {
    id: 'lz-look-18',
    title: 'DITSY FLORAL PEPLUM TOP & EYELET SKIRT',
    category: 'couture',
    image: 'images/look18.jpg',
    description: 'Romantic square-neck ditsy floral peplum blouse with back red bow sash, paired with a white eyelet broderie anglaise midi skirt.',
    fabric: 'Floral Printed Cotton & Eyelet Lace',
    fit: 'Peplum Waist & Tiered Skirt',
    occasion: 'Garden Afternoon & High Tea'
  }
];

// 2. STATE MANAGEMENT
let currentActiveLook = null;
let isSoundEnabled = true;

// 3. AUDIO FEEDBACK (Web Audio API)
function playTactileClick() {
  if (!isSoundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}

// 4. DOM ELEMENTS
const showcaseGrid = document.getElementById('showcaseGrid');
const filterCatBtns = document.querySelectorAll('.filter-cat-btn');
const gridViewBtns = document.querySelectorAll('.grid-view-btn');

// Drawer Elements
const menuOpenBtn = document.getElementById('menuOpenBtn');
const navDrawer = document.getElementById('navDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

// Garment Detail Modal Elements
const detailModalBackdrop = document.getElementById('detailModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const modalFabric = document.getElementById('modalFabric');
const modalFit = document.getElementById('modalFit');
const modalOccasion = document.getElementById('modalOccasion');
const modalEnquireBtn = document.getElementById('modalEnquireBtn');

// Search Elements
const searchOpenBtn = document.getElementById('searchOpenBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const searchInput = document.getElementById('searchInput');
const searchResultsGrid = document.getElementById('searchResultsGrid');

const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundStatusText = document.getElementById('soundStatusText');

// 5. RENDER SHOWCASE GRID (Pure Photographs - Names & Hover Reveal Only on Mouse Cursor Hover)
function renderShowcase(filter = 'all') {
  showcaseGrid.innerHTML = '';
  
  const filteredLooks = filter === 'all' 
    ? SHOWCASE_LOOKS 
    : SHOWCASE_LOOKS.filter(l => l.category === filter);

  filteredLooks.forEach(look => {
    const card = document.createElement('div');
    card.className = 'outfit-card';
    card.setAttribute('data-id', look.id);
    card.innerHTML = `
      <div class="outfit-img-container">
        <img src="${look.image}" alt="${look.title}" class="outfit-img">
        <div class="outfit-hover-overlay">
          <span class="hover-outfit-category">${look.category.toUpperCase()} COLLECTION</span>
          <h3 class="hover-outfit-title">${look.title}</h3>
          <div class="view-details-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            VIEW DETAILS & ORDER
          </div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      playTactileClick();
      openDetailModal(look.id);
    });
    showcaseGrid.appendChild(card);
  });
}

// 6. GRID SWITCHER
gridViewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    playTactileClick();
    gridViewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cols = btn.getAttribute('data-cols');
    showcaseGrid.className = `showcase-grid grid-cols-${cols}`;
  });
});

// 7. FILTER CATEGORIES & UNIFIED NAVIGATION SCROLL
filterCatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    playTactileClick();
    const cat = btn.getAttribute('data-category');
    filterCatBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderShowcase(cat);
    updateActiveDrawerLinks('#showcase', cat);
  });
});

function scrollToElement(targetEl, filter = null) {
  if (!targetEl) return;

  if (filter) {
    filterCatBtns.forEach(btn => {
      if (btn.getAttribute('data-category') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderShowcase(filter);
  }

  const targetId = `#${targetEl.id}`;
  updateActiveDrawerLinks(targetId, filter);

  const header = document.querySelector('.main-header');
  const headerHeight = header ? header.offsetHeight : 80;

  const rect = targetEl.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop - headerHeight;

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: 'smooth'
  });
}

function updateActiveDrawerLinks(targetId, filter = null) {
  document.querySelectorAll('.drawer-nav-list a').forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkFilter = link.getAttribute('data-filter');

    if (filter && linkFilter) {
      if (linkFilter === filter) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (!filter && linkHref === targetId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Universal Smooth Navigation Listener for all internal # anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();
    playTactileClick();

    closeNavDrawer();
    closeSearchOverlay();

    const filter = link.getAttribute('data-filter');
    const targetEl = document.querySelector(href);

    if (targetEl) {
      scrollToElement(targetEl, filter);
    }
  });
});

// 8. DRAWER CONTROLS
function openNavDrawer() {
  playTactileClick();
  navDrawer.classList.add('active');
  drawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNavDrawer() {
  playTactileClick();
  navDrawer.classList.remove('active');
  drawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuOpenBtn.addEventListener('click', openNavDrawer);
drawerCloseBtn.addEventListener('click', closeNavDrawer);
drawerOverlay.addEventListener('click', closeNavDrawer);

// 9. GARMENT DETAIL PRESENTATION MODAL
function openDetailModal(lookId) {
  const look = SHOWCASE_LOOKS.find(l => l.id === lookId);
  if (!look) return;

  currentActiveLook = look;
  modalImg.src = look.image;
  modalTitle.textContent = look.title;
  modalCategory.textContent = `${look.category.toUpperCase()} COLLECTION`;
  modalDesc.textContent = look.description;
  modalFabric.textContent = look.fabric;
  modalFit.textContent = look.fit;
  modalOccasion.textContent = look.occasion;

  detailModalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  playTactileClick();
  detailModalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeDetailModal);
detailModalBackdrop.addEventListener('click', (e) => {
  if (e.target === detailModalBackdrop) closeDetailModal();
});

// WHATSAPP ORDER TO +94 78 999 9299
modalEnquireBtn.addEventListener('click', () => {
  if (!currentActiveLook) return;
  playTactileClick();
  const text = encodeURIComponent(`Hello Lu Zeebra! I would like to place an order / inquire about: "${currentActiveLook.title}". Please share pricing and availability details.`);
  window.open(`https://wa.me/94789999299?text=${text}`, '_blank');
});

// 10. SEARCH OVERLAY
function openSearchOverlay() {
  playTactileClick();
  searchOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  searchInput.value = '';
  searchInput.focus();
  renderSearchResults('');
}

function closeSearchOverlay() {
  playTactileClick();
  searchOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

searchOpenBtn.addEventListener('click', openSearchOverlay);
searchCloseBtn.addEventListener('click', closeSearchOverlay);

function renderSearchResults(query) {
  searchResultsGrid.innerHTML = '';
  if (!query.trim()) return;

  const matches = SHOWCASE_LOOKS.filter(l => 
    l.title.toLowerCase().includes(query.toLowerCase()) || 
    l.category.toLowerCase().includes(query.toLowerCase()) ||
    l.description.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    searchResultsGrid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted); text-align: center;">NO LOOKS MATCHING "${query.toUpperCase()}"</p>`;
    return;
  }

  matches.forEach(look => {
    const card = document.createElement('div');
    card.className = 'outfit-card';
    card.innerHTML = `
      <div class="outfit-img-container">
        <img src="${look.image}" alt="${look.title}" class="outfit-img">
        <div class="outfit-hover-overlay">
          <h3 class="hover-outfit-title">${look.title}</h3>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      closeSearchOverlay();
      openDetailModal(look.id);
    });
    searchResultsGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  renderSearchResults(e.target.value);
});

// 11. HERO VIDEO CONTROLLER
const heroVideo = document.getElementById('heroVideo');
const videoPlayPauseBtn = document.getElementById('videoPlayPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playPauseText = document.getElementById('playPauseText');

if (videoPlayPauseBtn && heroVideo) {
  videoPlayPauseBtn.addEventListener('click', () => {
    playTactileClick();
    if (heroVideo.paused) {
      heroVideo.play();
      pauseIcon.style.display = 'inline';
      playIcon.style.display = 'none';
      playPauseText.textContent = 'PAUSE VIDEO';
    } else {
      heroVideo.pause();
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'inline';
      playPauseText.textContent = 'PLAY VIDEO';
    }
  });
}

// 12. SOUND TOGGLE
soundToggleBtn.addEventListener('click', () => {
  isSoundEnabled = !isSoundEnabled;
  soundStatusText.textContent = isSoundEnabled ? 'ON' : 'OFF';
  soundToggleBtn.style.opacity = isSoundEnabled ? '1' : '0.5';
  if (isSoundEnabled) playTactileClick();
});

// INITIALIZE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  renderShowcase('all');
  
  // Set 2-column view as default on Mobile and Tablet (< 1024px)
  if (window.innerWidth <= 1024 && showcaseGrid) {
    showcaseGrid.className = 'showcase-grid grid-cols-2';
    gridViewBtns.forEach(b => {
      if (b.getAttribute('data-cols') === '2') {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  if (heroVideo) {
    heroVideo.play().catch(() => {});
  }
});
