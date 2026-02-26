const PRODUCT_SLOTS = [
  { name: 'Espaço de Produto 01', price: 'R$ 89,90', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 02', price: 'R$ 59,90', image: 'https://images.unsplash.com/photo-1601758174625-6a54f2a1f62f?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 03', price: 'R$ 44,90', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 04', price: 'R$ 129,90', image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 05', price: 'R$ 34,90', image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 06', price: 'R$ 79,90', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 07', price: 'R$ 22,90', image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 08', price: 'R$ 199,90', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 09', price: 'R$ 69,90', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' },
  { name: 'Espaço de Produto 10', price: 'R$ 149,90', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', affiliateUrl: '#' }
];

function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  productsGrid.innerHTML = PRODUCT_SLOTS.map(
    (product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-content">
          <h3>${product.name}</h3>
          <div class="price">${product.price}</div>
          <a class="btn btn-primary" href="${product.affiliateUrl}" target="_blank" rel="noopener noreferrer" aria-label="Abrir oferta de ${product.name} na loja parceira">Comprar agora</a>
        </div>
      </article>
    `
  ).join('');
}

function updateYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initStorefront() {
  renderProducts();
  updateYear();
  setupMobileMenu();
}

function setupMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;

  const links = mobileMenu.querySelectorAll('a[href]');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.removeAttribute('open');
    });
  });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStorefront);
} else {
  initStorefront();
}
