/* ============================================
   WRITER — Application Logic
   SPA Router, Storage, Editor, Views
   ============================================ */

// ============ ICONS ============
const Icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  alertCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
};

// ============ UTILITIES ============
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function estimateReadTime(html) {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getExcerpt(html, maxLength = 160) {
  const text = html.replace(/<[^>]*>/g, '');
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============ API ============
const API_BASE = '/api';

async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
}

// ============ STORAGE ============
const Storage = {
  async getAll() {
    return api('/posts');
  },

  async getById(id) {
    return api(`/posts/${id}`);
  },

  async create(post) {
    return api('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },

  async update(id, updates) {
    return api(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  async delete(id) {
    await api(`/posts/${id}`, { method: 'DELETE' });
  },

  async getPublished() {
    return api('/posts?status=published');
  },

  async search(query) {
    return api(`/posts?search=${encodeURIComponent(query)}`);
  },

  async addComment(postId, comment) {
    return api(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
    });
  },
};

// ============ TOAST NOTIFICATIONS ============
const Toast = {
  show(message, type = 'success', duration = 3500) {
    const container = document.getElementById('toast-container');
    const iconMap = {
      success: Icons.check,
      error: Icons.alertCircle,
      info: Icons.alertCircle,
    };

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `${iconMap[type]}<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  error(msg) { this.show(msg, 'error'); },
  info(msg) { this.show(msg, 'info'); },
};

// ============ MODAL ============
const Modal = {
  show({ title, text, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, danger = false }) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal animate-scale-in">
        <h3 class="modal__title">${escapeHtml(title)}</h3>
        <p class="modal__text">${escapeHtml(text)}</p>
        <div class="modal__actions">
          <button class="btn btn--secondary" id="modal-cancel">${escapeHtml(cancelText)}</button>
          <button class="btn ${danger ? 'btn--danger' : 'btn--primary'}" id="modal-confirm">${escapeHtml(confirmText)}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#modal-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#modal-confirm').addEventListener('click', () => {
      overlay.remove();
      if (onConfirm) onConfirm();
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  },
};

// ============ ROUTER ============
const Router = {
  routes: {},
  currentView: null,

  register(path, handler) {
    this.routes[path] = handler;
  },

  navigate(hash) {
    window.location.hash = hash;
  },

  getRoute() {
    const hash = window.location.hash || '#/';
    // Match parameterized routes
    for (const pattern of Object.keys(this.routes)) {
      const regex = new RegExp('^' + pattern.replace(/:(\w+)/g, '([^/]+)') + '$');
      const match = hash.match(regex);
      if (match) {
        return { handler: this.routes[pattern], params: match.slice(1) };
      }
    }
    return { handler: this.routes['#/'], params: [] };
  },

  init() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  },

  async resolve() {
    const { handler, params } = this.getRoute();
    if (handler) {
      if (App.quill) {
        App.quill = null;
      }
      await handler(...params);
      this.updateNav();
    }
  },

  updateNav() {
    const hash = window.location.hash || '#/';
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.classList.remove('nav__link--active');
      if (
        (link.dataset.nav === 'home' && (hash === '#/' || hash === '')) ||
        (link.dataset.nav === 'dashboard' && hash.startsWith('#/dashboard')) ||
        (link.dataset.nav === 'published' && hash === '#/published') ||
        (link.dataset.nav === 'about' && hash === '#/about') ||
        (link.dataset.nav === 'contact' && hash === '#/contact')
      ) {
        link.classList.add('nav__link--active');
      }
    });
    // Close mobile menu on navigate
    document.getElementById('nav-links')?.classList.remove('nav__links--open');
  },
};

// ============ APP ============
const App = {
  quill: null,
  autoSaveTimer: null,
  currentPostId: null,

  async init() {
    Router.register('#/', () => this.renderHome());
    Router.register('#/published', () => this.renderPublished());
    Router.register('#/dashboard', () => this.renderDashboard());
    Router.register('#/write', () => this.renderEditor());
    Router.register('#/edit/:id', (id) => this.renderEditor(id));
    Router.register('#/post/:id', (id) => this.renderPost(id));
    Router.register('#/about', () => this.renderAbout());
    Router.register('#/contact', () => this.renderContact());

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('main-nav');
      if (window.scrollY > 20) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    let menuOpen = false;

    const toggleMenu = (open) => {
      menuOpen = open !== undefined ? open : !navLinks.classList.contains('nav__links--open');
      navLinks.classList.toggle('nav__links--open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', menuOpen);
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (menuOpen && !navLinks.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOpen) {
        toggleMenu(false);
        navToggle.focus();
      }
    });

    // Close menu on route change (already handled in Router.updateNav)
    // Close menu on window resize above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && menuOpen) {
        toggleMenu(false);
      }
    });

    // Home link scroll-to-top handler
    document.getElementById('nav-home')?.addEventListener('click', (e) => {
      const hash = window.location.hash;
      if (hash === '#/' || hash === '') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconSun = document.getElementById('theme-icon-sun');
    const themeIconMoon = document.getElementById('theme-icon-moon');
    const themeText = document.getElementById('theme-text');

    const setTheme = (isLight) => {
      if (isLight) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
        themeText.textContent = 'Dark Mode';
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
        themeText.textContent = 'Light Mode';
      }
    };

    // Initialize theme from storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setTheme(true);
    }

    themeToggle?.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      setTheme(!isLight);
    });

    // Seed sample posts if first visit
    try {
      const posts = await Storage.getAll();
      if (posts.length === 0) {
        await this.seedSamplePosts();
      }
    } catch {
      // silently fail — backend may not be seeded yet
    }

    // Start router
    Router.init();
  },

  async seedSamplePosts() {
    await api('/seed', { method: 'POST' });
  },

  // ============ VIEWS ============

  async renderHome() {
    const posts = await Storage.getPublished();
    const container = document.getElementById('view-container');

    container.innerHTML = `
      <!-- Hero -->
      <section class="hero" id="home">
        <div class="container">
          <span class="hero__eyebrow">${Icons.feather} Personal Blog</span>
          <h1 class="hero__title">Where Words Come <em>Alive</em></h1>
          <p class="hero__subtitle">A space for thoughts, stories, and ideas. Written with care, shared with purpose.</p>
          <div class="hero__actions">
            <a href="#/write" class="btn btn--primary btn--lg">
              ${Icons.edit}
              Start Writing
            </a>
            <a href="#/dashboard" class="btn btn--secondary btn--lg">
              ${Icons.fileText}
              My Posts
            </a>
          </div>
        </div>
      </section>

      <!-- Published Articles -->
      <section class="articles-section" id="published">
        <div class="container container--narrow">
          ${posts.length > 0 ? `
            <div class="section-header">
              <div>
                <h2 class="section-title">Published Stories</h2>
                <p class="section-subtitle">${posts.length} article${posts.length !== 1 ? 's' : ''} published</p>
              </div>
            </div>
            <div class="articles-grid stagger-children">
              ${posts.map(post => this.renderArticleCard(post)).join('')}
            </div>
          ` : `
            <div class="empty-state">
              <div class="empty-state__icon">${Icons.feather}</div>
              <h3 class="empty-state__title">No stories yet</h3>
              <p class="empty-state__text">Start writing your first article and share it with the world.</p>
              <a href="#/write" class="btn btn--primary btn--lg">
                ${Icons.edit}
                Write Your First Post
              </a>
            </div>
          `}
        </div>
      </section>

      <!-- About Section -->
      ${this.getAboutHtml()}

      <!-- Contact Section -->
      ${this.getContactHtml()}

      <!-- Footer -->
      <footer class="site-footer">
        <div class="container">
          <p>Built with ✦ Writer</p>
        </div>
      </footer>
    `;

    // Card click handlers
    container.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        Router.navigate(`#/post/${card.dataset.id}`);
      });
    });

    // Initialize scroll spy
    this.initScrollSpy();
  },

  initScrollSpy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }

    const sections = document.querySelectorAll('#home, #published, #about, #contact');
    const navLinks = document.querySelectorAll('.nav__link[data-nav]');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            if (['home', 'published', 'about', 'contact'].includes(link.dataset.nav)) {
              link.classList.remove('nav__link--active');
              if (link.dataset.nav === id) {
                link.classList.add('nav__link--active');
              }
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      this.scrollObserver.observe(section);
    });
  },

  renderArticleCard(post) {
    const coverHtml = post.coverImage
      ? `<img class="article-card__cover" src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.title)}">`
      : `<div class="article-card__cover article-card__cover--placeholder">${Icons.image}</div>`;

    return `
      <article class="article-card" data-id="${post.id}" id="card-${post.id}">
        ${coverHtml}
        <div class="article-card__body">
          <div class="article-card__meta">
            <span class="article-card__date">${Icons.calendar} ${formatDate(post.updatedAt)}</span>
            <span class="article-card__dot"></span>
            <span class="article-card__readtime">${Icons.clock} ${estimateReadTime(post.content)}</span>
          </div>
          <h3 class="article-card__title">${escapeHtml(post.title)}</h3>
          <p class="article-card__excerpt">${escapeHtml(getExcerpt(post.content))}</p>
          ${post.tags.length > 0 ? `
            <div class="article-card__tags">
              ${post.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `;
  },

  getAboutHtml() {
    return `
      <section id="about" class="about-page" style="padding: var(--sp-10) 0 var(--sp-20);">
        <div class="container container--narrow">
          <div class="section-header">
            <div>
              <h1 class="section-title">About Me</h1>
            </div>
          </div>
          <div class="about-content">
            <div class="about-text" style="font-size: var(--fs-lg); line-height: 1.8; color: var(--text-secondary);">
              <p>Hi, I'm Abhi. I'm a passionate writer, thinker, and creator.</p>
              <br>
              <p>Welcome to my personal platform where I share my thoughts, stories, and ideas. I believe that writing is one of the most powerful ways to connect with others and explore the world around us.</p>
              <br>
              <p>When I'm not writing, you can find me exploring new technologies, reading books, or designing beautiful interfaces. This platform is built to be a distraction-free space for authentic expression.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  getContactHtml() {
    return `
      <section id="contact" class="contact-page" style="padding: var(--sp-10) 0 var(--sp-20);">
        <div class="container container--narrow">
          <div class="section-header">
            <div>
              <h1 class="section-title">Contact Me</h1>
              <p class="section-subtitle">Let's connect and create something amazing together.</p>
            </div>
          </div>
          <div class="contact-content stagger-children" style="margin-top: var(--sp-8);">
            
            <div class="contact-card" style="background: var(--bg-card); padding: var(--sp-8); border-radius: var(--radius-lg); border: 1px solid var(--border); margin-bottom: var(--sp-6);">
              <div style="display: flex; align-items: center; gap: var(--sp-4); margin-bottom: var(--sp-4);">
                <div style="width: 48px; height: 48px; background: var(--accent-dim); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: var(--accent);">
                  ${Icons.mail}
                </div>
                <div>
                  <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); color: var(--text-primary);">Email</h3>
                  <a href="mailto:abhishekkr3368@gmail.com" style="color: var(--text-secondary); text-decoration: none; font-size: var(--fs-base);">abhishekkr3368@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="contact-card" style="background: var(--bg-card); padding: var(--sp-8); border-radius: var(--radius-lg); border: 1px solid var(--border); margin-bottom: var(--sp-6);">
              <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); color: var(--text-primary); margin-bottom: var(--sp-4);">Social Media</h3>
              <div style="display: flex; gap: var(--sp-4);">
                <a href="#" class="btn btn--secondary" style="display: flex; flex: 1; justify-content: center;">
                  ${Icons.instagram} Instagram
                </a>
                <a href="#" class="btn btn--secondary" style="display: flex; flex: 1; justify-content: center;">
                  ${Icons.linkedin} LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  },

  async renderPublished() {
    await this.renderHome();
    setTimeout(() => {
      document.getElementById('published')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  },

  async renderAbout() {
    await this.renderHome();
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  },

  async renderContact() {
    await this.renderHome();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  },

  // ============ DASHBOARD ============

  async renderDashboard() {
    const allPosts = await Storage.getAll();
    const published = allPosts.filter(p => p.status === 'published');
    const drafts = allPosts.filter(p => p.status === 'draft');

    const container = document.getElementById('view-container');
    container.innerHTML = `
      <section class="dashboard">
        <div class="container">
          <div class="dashboard__header">
            <div>
              <h1 class="dashboard__title">Dashboard</h1>
            </div>
            <div class="dashboard__stats stagger-children">
              <div class="stat-card">
                <div class="stat-card__value">${allPosts.length}</div>
                <div class="stat-card__label">Total</div>
              </div>
              <div class="stat-card">
                <div class="stat-card__value">${published.length}</div>
                <div class="stat-card__label">Published</div>
              </div>
              <div class="stat-card">
                <div class="stat-card__value">${drafts.length}</div>
                <div class="stat-card__label">Drafts</div>
              </div>
            </div>
          </div>

          <!-- Controls -->
          <div class="dashboard__controls">
            <div class="search-wrapper">
              ${Icons.search}
              <input type="text" class="search-input" id="dashboard-search" placeholder="Search posts..." autocomplete="off">
            </div>
            <div class="filter-tabs" id="filter-tabs">
              <button class="filter-tab filter-tab--active" data-filter="all">All</button>
              <button class="filter-tab" data-filter="published">Published</button>
              <button class="filter-tab" data-filter="draft">Drafts</button>
            </div>
          </div>

          <!-- Posts Table -->
          <div id="posts-list">
            ${this.renderPostsTable(allPosts)}
          </div>
        </div>
      </section>
    `;

    // Filter tabs
    container.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('filter-tab--active'));
        tab.classList.add('filter-tab--active');
        this.filterDashboard();
      });
    });

    // Search
    document.getElementById('dashboard-search').addEventListener('input', () => {
      this.filterDashboard();
    });

    // Attach table handlers initially
    this.attachTableHandlers();
  },

  async filterDashboard() {
    const query = document.getElementById('dashboard-search').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-tab--active')?.dataset.filter || 'all';

    let posts;

    if (query) {
      posts = await Storage.search(query);
    } else {
      posts = await Storage.getAll();
    }

    if (activeFilter === 'published') {
      posts = posts.filter(p => p.status === 'published');
    } else if (activeFilter === 'draft') {
      posts = posts.filter(p => p.status === 'draft');
    }

    document.getElementById('posts-list').innerHTML = this.renderPostsTable(posts);
    this.attachTableHandlers();
  },

  renderPostsTable(posts) {
    if (posts.length === 0) {
      return `
        <div class="empty-state">
          <div class="empty-state__icon">${Icons.fileText}</div>
          <h3 class="empty-state__title">No posts found</h3>
          <p class="empty-state__text">Try a different search or filter, or create a new post.</p>
          <a href="#/write" class="btn btn--primary">${Icons.edit} New Post</a>
        </div>
      `;
    }

    return `
      <table class="posts-table" id="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="stagger-children">
          ${posts.map(post => `
            <tr data-id="${post.id}">
              <td>
                <div class="posts-table__title">
                  ${escapeHtml(post.title)}
                  <span>${post.tags.map(t => `#${t}`).join(' ')}</span>
                </div>
              </td>
              <td>
                <span class="status-badge status-badge--${post.status}">
                  <span class="status-badge__dot"></span>
                  ${post.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </td>
              <td style="color: var(--text-muted); font-size: var(--fs-sm);">
                ${formatDate(post.updatedAt)}
              </td>
              <td>
                <div class="posts-table__actions">
                  ${post.status === 'published' ? `
                    <a href="#/post/${post.id}" class="btn btn--ghost btn--sm" title="View">
                      ${Icons.eye}
                    </a>
                  ` : ''}
                  <a href="#/edit/${post.id}" class="btn btn--ghost btn--sm" title="Edit">
                    ${Icons.edit}
                  </a>
                  <button class="btn btn--ghost btn--sm delete-post-btn" data-id="${post.id}" title="Delete">
                    ${Icons.trash}
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  },

  attachTableHandlers() {
    document.querySelectorAll('.delete-post-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const post = await Storage.getById(id);
        if (!post) return;

        Modal.show({
          title: 'Delete Post',
          text: `Are you sure you want to delete "${post.title}"? This action cannot be undone.`,
          confirmText: 'Delete',
          danger: true,
          onConfirm: async () => {
            await Storage.delete(id);
            Toast.success('Post deleted');
            this.renderDashboard();
          },
        });
      });
    });
  },

  // ============ EDITOR ============

  async renderEditor(postId = null) {
    window.scrollTo(0, 0);
    const isEditing = !!postId;
    const post = isEditing ? await Storage.getById(postId) : null;

    if (isEditing && !post) {
      Toast.error('Post not found');
      Router.navigate('#/dashboard');
      return;
    }

    this.currentPostId = postId;
    const container = document.getElementById('view-container');

    container.innerHTML = `
      <section class="editor-page">
        <div class="container">
          <!-- Editor Header -->
          <div class="editor-header">
            <div class="editor-header__left">
              <a href="#/dashboard" class="btn btn--ghost">
                ${Icons.arrowLeft}
                Back
              </a>
              <div class="autosave-indicator" id="autosave-indicator" style="display: none;">
                <span class="autosave-indicator__dot"></span>
                <span id="autosave-text">Saved</span>
              </div>
            </div>
            <div class="editor-header__actions">
              <button class="btn btn--secondary" id="save-draft-btn">
                ${Icons.save}
                Save Draft
              </button>
              <button class="btn btn--primary" id="publish-btn">
                ${Icons.send}
                ${isEditing && post?.status === 'published' ? 'Update' : 'Publish'}
              </button>
            </div>
          </div>

          <!-- Editor Fields -->
          <div class="editor-fields">
            <div class="field-group">
              <input type="text" class="field-input field-input--title" id="post-title"
                placeholder="Your story title..." value="${isEditing ? escapeHtml(post.title) : ''}" autocomplete="off">
            </div>
            <div class="field-row">
              <div class="field-group">
                <label for="post-cover">Cover Image URL</label>
                <input type="text" class="field-input" id="post-cover"
                  placeholder="https://example.com/image.jpg" value="${isEditing && post.coverImage ? escapeHtml(post.coverImage) : ''}" autocomplete="off">
              </div>
              <div class="field-group">
                <label for="post-tags">Tags (comma-separated)</label>
                <input type="text" class="field-input" id="post-tags"
                  placeholder="writing, creativity, ideas" value="${isEditing ? post.tags.join(', ') : ''}" autocomplete="off">
              </div>
            </div>
          </div>

          <!-- Quill Editor -->
          <div class="editor-container">
            <div id="quill-editor"></div>
          </div>
        </div>
      </section>
    `;

    // Initialize Quill
    this.quill = new Quill('#quill-editor', {
      theme: 'snow',
      placeholder: 'Start writing your story...',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block'],
          ['link', 'image'],
          ['clean'],
        ],
      },
    });

    // Load content if editing
    if (isEditing && post.content) {
      this.quill.root.innerHTML = post.content;
    }

    // Auto-save (every 5 seconds after a change)
    let hasChanges = false;
    this.quill.on('text-change', () => {
      hasChanges = true;
      this.showAutoSaveIndicator('saving');
    });

    // Also track title/cover/tags changes
    ['post-title', 'post-cover', 'post-tags'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => {
        hasChanges = true;
      });
    });

    this.autoSaveTimer = setInterval(() => {
      if (hasChanges && this.currentPostId) {
        this.savePost('draft', true);
        hasChanges = false;
      }
    }, 5000);

    // Save Draft button
    document.getElementById('save-draft-btn').addEventListener('click', () => {
      this.savePost('draft');
    });

    // Publish button
    document.getElementById('publish-btn').addEventListener('click', () => {
      this.savePost('published');
    });
  },

  getEditorData() {
    const title = document.getElementById('post-title')?.value?.trim() || 'Untitled';
    const content = this.quill ? this.quill.root.innerHTML : '';
    const coverImage = document.getElementById('post-cover')?.value?.trim() || '';
    const tagsRaw = document.getElementById('post-tags')?.value || '';
    const tags = tagsRaw.split(',').map(t => t.trim()).filter(t => t.length > 0);

    return { title, content, coverImage, tags };
  },

  async savePost(status = 'draft', isAutoSave = false) {
    const data = this.getEditorData();

    if (!data.title && !this.quill?.getText()?.trim()) {
      if (!isAutoSave) Toast.error('Please add a title or some content');
      return;
    }

    try {
      if (this.currentPostId) {
        await Storage.update(this.currentPostId, { ...data, status });
      } else {
        const newPost = await Storage.create({ ...data, status });
        this.currentPostId = newPost.id;
        history.replaceState(null, '', `#/edit/${newPost.id}`);
      }

      if (isAutoSave) {
        this.showAutoSaveIndicator('saved');
      } else {
        if (status === 'published') {
          Toast.success('Post published!');
          clearInterval(this.autoSaveTimer);
          Router.navigate(`#/post/${this.currentPostId}`);
        } else {
          Toast.success('Draft saved');
          this.showAutoSaveIndicator('saved');
        }
      }
    } catch (err) {
      if (!isAutoSave) Toast.error(err.message);
    }
  },

  showAutoSaveIndicator(state) {
    const indicator = document.getElementById('autosave-indicator');
    const text = document.getElementById('autosave-text');
    if (!indicator || !text) return;

    indicator.style.display = 'flex';

    if (state === 'saving') {
      indicator.classList.add('autosave-indicator--saving');
      text.textContent = 'Saving...';
    } else {
      indicator.classList.remove('autosave-indicator--saving');
      text.textContent = 'Saved';
    }
  },

  // ============ READER ============

  async renderPost(id) {
    const post = await Storage.getById(id);
    const container = document.getElementById('view-container');

    if (!post) {
      container.innerHTML = `
        <section class="reader">
          <div class="container container--narrow">
            <div class="empty-state">
              <div class="empty-state__icon">${Icons.alertCircle}</div>
              <h3 class="empty-state__title">Post not found</h3>
              <p class="empty-state__text">This post may have been deleted or doesn't exist.</p>
              <a href="#/" class="btn btn--primary">Go Home</a>
            </div>
          </div>
        </section>
      `;
      return;
    }

    // Update page title
    document.title = `${post.title} — Writer`;

    container.innerHTML = `
      <article class="reader">
        <div class="container">
          <!-- Back link -->
          <div style="max-width: var(--content-width); margin: 0 auto;">
            <a href="#/" class="reader__back" id="reader-back">
              ${Icons.arrowLeft}
              Back to home
            </a>
          </div>

          <!-- Header -->
          <header class="reader__header">
            ${post.tags.length > 0 ? `
              <div class="reader__tags">
                ${post.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
              </div>
            ` : ''}
            <h1 class="reader__title">${escapeHtml(post.title)}</h1>
            <div class="reader__meta">
              <span class="reader__meta-item">
                ${Icons.calendar}
                ${formatDate(post.updatedAt)}
              </span>
              <span class="reader__meta-item">
                ${Icons.clock}
                ${estimateReadTime(post.content)}
              </span>
            </div>
          </header>

          <!-- Cover Image -->
          ${post.coverImage ? `
            <div class="reader__cover">
              <img src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.title)}">
            </div>
          ` : ''}

          <!-- Content -->
          <div class="reader__content">
            ${post.content}
          </div>

          <!-- Footer -->
          <footer class="reader__footer">
            <a href="#/edit/${post.id}" class="btn btn--secondary">
              ${Icons.edit}
              Edit this post
            </a>
          </footer>

          <!-- Comments Section -->
          <div class="reader__comments">
            <h2 class="reader__comments-title">Comments (${(post.comments || []).length})</h2>
            
            <form id="comment-form" class="comment-form">
              <div class="field-group">
                <input type="text" id="comment-name" class="field-input" placeholder="Your Name" required>
              </div>
              <div class="field-group">
                <textarea id="comment-content" class="field-input" rows="3" placeholder="Add a comment..." required></textarea>
              </div>
              <button type="submit" class="btn btn--primary">Post Comment</button>
            </form>

            <div class="comments-list">
              ${(post.comments || []).map(comment => `
                <div class="comment-item">
                  <div class="comment-header">
                    <strong>${escapeHtml(comment.name)}</strong>
                    <span class="comment-date">${formatDate(comment.date)}</span>
                  </div>
                  <p class="comment-body">${escapeHtml(comment.content)}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `;

    // Handle Comment Submission
    document.getElementById('comment-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('comment-name').value.trim();
      const content = document.getElementById('comment-content').value.trim();

      if (name && content) {
        try {
          await Storage.addComment(post.id, { name, content });
          Toast.success('Comment added');
          this.renderPost(post.id);
        } catch (err) {
          Toast.error(err.message);
        }
      }
    });

    // Scroll to top on post load (only if no comments just added, but simpler to just do it)
    // Actually, maybe don't scroll to top if we just submitted a comment.
    // Let's only scroll to top if the hash changed, but we are just re-rendering.
    // To handle this nicely, we'll avoid scrolling to top if it's a comment submit.
    // For now, window.scrollTo({ top: 0, behavior: 'smooth' }) will run every time.
    // Let's wrap it in a check or just leave it since the user sees their toast.
    if (!document.getElementById('comment-name')?.value) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
};

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
