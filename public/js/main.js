// Configuration de l'API
const API_BASE_URL = 'https://es-parfumerie-backend.onrender.com';

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le dark mode
    initDarkMode();
    
    // Initialiser le changement de langue
    initLanguage();
    
    // Initialiser la navigation mobile
    initMobileMenu();
    
    // Initialiser les modales
    initModals();
    
    // Charger les produits vedettes
    loadFeaturedProducts();
    
    // Initialiser l'authentification
    initAuth();
    
    // Initialiser le panier
    initCart();
});

// Dark Mode
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Vérifier les préférences système ou les paramètres sauvegardés
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = prefersDarkScheme.matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
    }
    
    // Écouter le clic sur le bouton
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

// Navigation mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Gérer les dropdowns sur mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Modales
function initModals() {
    const loginModal = document.getElementById('login-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTriggers = document.querySelectorAll('[href="#login-modal"]');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const switchTabLinks = document.querySelectorAll('.switch-tab');
    
    // Ouvrir la modale
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer la modale
    modalClose.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Fermer en cliquant à l'extérieur
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Changer d'onglet
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Mettre à jour les boutons d'onglet
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Mettre à jour le contenu des onglets
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Changer d'onglet via les liens
    switchTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.dataset.tab;
            
            // Mettre à jour les boutons d'onglet
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
            
            // Mettre à jour le contenu des onglets
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Charger les produits vedettes
async function loadFeaturedProducts() {
    const productsGrid = document.getElementById('featuredProducts');
    
    try {
        // Simuler un appel API - À remplacer par l'appel réel
        // const response = await fetch(`${API_BASE_URL}/api/products/featured`);
        // const products = await response.json();
        
        // Pour l'instant, on simule des données
        const products = [
            {
                id: 1,
                name: "Noir Essentiel",
                category: "Homme",
                description: "Un parfum bois-ambré intense et mystérieux",
                price: 89.99,
                oldPrice: 109.99,
                image: "https://images.unsplash.com/photo-1590736969954-61afaa6d5955?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                badge: "Nouveau"
            },
            {
                id: 2,
                name: "Fleur de Soie",
                category: "Femme",
                description: "Une fragrance florale délicate et raffinée",
                price: 94.99,
                oldPrice: null,
                image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                badge: "Best-seller"
            },
            {
                id: 3,
                name: "Oud Impérial",
                category: "Unisex",
                description: "Un mélange rare d'oud et d'épices orientales",
                price: 149.99,
                oldPrice: 179.99,
                image: "https://images.unsplash.com/photo-1544455802-6d4d4c4feb4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                badge: "Luxury"
            },
            {
                id: 4,
                name: "Citron Vert",
                category: "Niche",
                description: "Une explosion fraîche et zestée d'agrumes",
                price: 79.99,
                oldPrice: null,
                image: "https://images.unsplash.com/photo-1590736969954-61afaa6d5955?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                badge: "Éco-responsable"
            }
        ];
        
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        productsGrid.innerHTML = `
            <div class="error-message">
                <p>Impossible de charger les produits. Veuillez réessayer plus tard.</p>
            </div>
        `;
    }
}

// Créer une carte produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    const oldPrice = product.oldPrice ? `<span class="old-price">${product.oldPrice}€</span>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${badge}
        </div>
        <div class="product-content">
            <p class="product-category">${product.category}</p>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <div>
                    ${oldPrice}
                    <span class="price">${product.price}€</span>
                </div>
            </div>
            <div class="product-actions">
                <button class="btn-cart" data-id="${product.id}">Ajouter au panier</button>
                <button class="btn-wishlist" data-id="${product.id}"><i class="far fa-heart"></i></button>
            </div>
        </div>
    `;
    
    // Ajouter les événements
    const cartBtn = card.querySelector('.btn-cart');
    const wishlistBtn = card.querySelector('.btn-wishlist');
    
    cartBtn.addEventListener('click', () => addToCart(product.id));
    wishlistBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') 
            ? '<i class="fas fa-heart"></i>' 
            : '<i class="far fa-heart"></i>';
    });
    
    return card;
}

// Gestion du panier
function initCart() {
    // Charger le panier depuis le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
    
    // Exposer la fonction addToCart globalement
    window.addToCart = function(productId) {
        // Vérifier si l'utilisateur est connecté
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            // Ouvrir la modale de connexion
            document.getElementById('login-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
            return;
        }
        
        // Ajouter au panier
        const productIndex = cart.findIndex(item => item.id === productId);
        
        if (productIndex > -1) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Afficher une notification
        showNotification('Produit ajouté au panier !');
    };
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Afficher une notification
function showNotification(message, type = 'success') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animer l'entrée
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Ajouter les styles pour les notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        color: white;
        font-weight: 600;
        z-index: 3000;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .notification.success {
        background-color: #2ecc71;
    }
    
    .notification.error {
        background-color: #e74c3c;
    }
    
    .notification.info {
        background-color: #3498db;
    }
`;
document.head.appendChild(notificationStyles);
