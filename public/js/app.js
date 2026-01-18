// ES Parfumerie - Application JavaScript

// Configuration de l'API
const API_BASE_URL = 'https://es-parfumerie-backend.onrender.com';

// État global de l'application
const AppState = {
    currentUser: null,
    products: [],
    cart: [],
    language: 'fr',
    darkMode: false,
    currentSection: 'home'
};

// Dictionnaires de traduction
const translations = {
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.products': 'Produits',
        'nav.contact': 'Contact',
        'nav.profile': 'Profil',
        'nav.settings': 'Paramètres',
        'nav.login': 'Connexion',
        'nav.signup': 'Inscription',
        'hero.title': 'L\'art de la fragrance',
        'hero.subtitle': 'Découvrez notre collection exclusive de parfums pour homme et femme. Des senteurs uniques qui racontent votre histoire.',
        'hero.shop': 'Découvrir la collection',
        'hero.learn': 'En savoir plus',
        'about.title': 'À propos de ES Parfumerie',
        'about.text1': 'Depuis 2010, ES Parfumerie offre une sélection rigoureuse des plus belles fragrances du monde. Notre passion pour les parfums nous pousse à rechercher constamment l\'excellence et l\'authenticité.',
        'about.text2': 'Nous collaborons avec les meilleurs nez et maisons de parfum pour vous proposer des senteurs uniques, alliant tradition et innovation.',
        'about.feature1.title': 'Qualité Premium',
        'about.feature1.text': 'Sélection des meilleurs ingrédients',
        'about.feature2.title': 'Ingrédients Naturels',
        'about.feature2.text': 'Formules respectueuses de l\'environnement',
        'about.feature3.title': 'Livraison Rapide',
        'about.feature3.text': 'Expédition sous 48h en France',
        'products.title': 'Nos Parfums',
        'products.subtitle': 'Découvrez notre collection exclusive.',
        'products.all': 'Tous',
        'products.men': 'Homme',
        'products.women': 'Femme',
        'products.unisex': 'Unisex',
        'products.empty': 'Aucun produit disponible',
        'products.emptyDesc': 'Notre collection sera bientôt disponible. Revenez plus tard !',
        'products.add': 'Ajouter un produit',
        'products.addToCart': 'Ajouter au panier',
        'products.viewDetails': 'Voir détails',
        'products.outOfStock': 'Rupture de stock',
        'contact.title': 'Contactez-nous',
        'contact.address': 'Adresse',
        'contact.phone': 'Téléphone',
        'contact.email': 'Email',
        'contact.hours': 'Horaires d\'ouverture',
        'contact.hoursDetail': 'Lun-Ven: 10h-19h<br>Samedi: 10h-20h<br>Dimanche: 11h-18h',
        'contact.formName': 'Nom complet',
        'contact.formEmail': 'Adresse email',
        'contact.formSubject': 'Sujet (optionnel)',
        'contact.formMessage': 'Votre message',
        'contact.send': 'Envoyer le message',
        'profile.title': 'Mon Profil',
        'profile.info': 'Informations',
        'profile.orders': 'Commandes',
        'profile.wishlist': 'Liste de souhaits',
        'profile.addresses': 'Adresses',
        'profile.settings': 'Paramètres',
        'profile.firstName': 'Prénom',
        'profile.lastName': 'Nom',
        'profile.email': 'Email',
        'profile.phone': 'Téléphone',
        'profile.edit': 'Modifier le profil',
        'profile.save': 'Enregistrer',
        'profile.noOrders': 'Vous n\'avez pas encore passé de commande',
        'profile.shopNow': 'Acheter maintenant',
        'profile.noWishlist': 'Votre liste de souhaits est vide',
        'profile.browse': 'Parcourir les produits',
        'profile.noAddresses': 'Aucune adresse enregistrée',
        'profile.addAddress': 'Ajouter une adresse',
        'settings.title': 'Paramètres',
        'settings.notifications': 'Notifications',
        'settings.notificationsDesc': 'Recevoir des emails promotionnels et des mises à jour',
        'settings.darkMode': 'Mode sombre',
        'settings.darkModeDesc': 'Activer/désactiver le thème sombre',
        'settings.language': 'Langue',
        'settings.languageDesc': 'Changer la langue du site',
        'settings.danger': 'Zone dangereuse',
        'settings.deleteAccount': 'Supprimer mon compte',
        'login.title': 'Connexion',
        'login.email': 'Adresse email',
        'login.password': 'Mot de passe',
        'login.remember': 'Se souvenir de moi',
        'login.forgot': 'Mot de passe oublié?',
        'login.submit': 'Se connecter',
        'login.noAccount': 'Pas encore de compte?',
        'login.createAccount': 'Créer un compte',
        'signup.title': 'Créer un compte',
        'signup.firstName': 'Prénom',
        'signup.lastName': 'Nom',
        'signup.email': 'Adresse email',
        'signup.password': 'Mot de passe',
        'signup.confirm': 'Confirmer le mot de passe',
        'signup.terms': 'J\'accepte les <a href="#">conditions d\'utilisation</a>',
        'signup.submit': 'Créer mon compte',
        'signup.haveAccount': 'Vous avez déjà un compte?',
        'signup.login': 'Se connecter',
        'product.addTitle': 'Ajouter un nouveau produit',
        'product.name': 'Nom du produit',
        'product.description': 'Description',
        'product.price': 'Prix (€)',
        'product.stock': 'Stock',
        'product.selectCategory': 'Sélectionner une catégorie',
        'product.image': 'Image URL',
        'product.features': 'Caractéristiques (une par ligne)',
        'product.add': 'Ajouter le produit',
        'footer.description': 'Votre destination pour des parfums d\'exception depuis 2010.',
        'footer.links': 'Liens rapides',
        'footer.services': 'Services',
        'footer.service1': 'Conseils personnalisés',
        'footer.service2': 'Cadeaux & coffrets',
        'footer.service3': 'Échantillons gratuits',
        'footer.service4': 'Retours gratuits',
        'footer.contact': 'Contact',
        'footer.rights': 'Tous droits réservés.',
        'footer.privacy': 'Politique de confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.cookies': 'Politique des cookies'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        'nav.profile': 'Profile',
        'nav.settings': 'Settings',
        'nav.login': 'Login',
        'nav.signup': 'Sign Up',
        'hero.title': 'The Art of Fragrance',
        'hero.subtitle': 'Discover our exclusive collection of perfumes for men and women. Unique scents that tell your story.',
        'hero.shop': 'Discover the collection',
        'hero.learn': 'Learn more',
        'about.title': 'About ES Parfumerie',
        'about.text1': 'Since 2010, ES Parfumerie has offered a rigorous selection of the world\'s finest fragrances. Our passion for perfumes drives us to constantly seek excellence and authenticity.',
        'about.text2': 'We collaborate with the best perfumers and perfume houses to offer you unique scents, combining tradition and innovation.',
        'about.feature1.title': 'Premium Quality',
        'about.feature1.text': 'Selection of the finest ingredients',
        'about.feature2.title': 'Natural Ingredients',
        'about.feature2.text': 'Environmentally friendly formulas',
        'about.feature3.title': 'Fast Delivery',
        'about.feature3.text': 'Shipping within 48h in France',
        'products.title': 'Our Perfumes',
        'products.subtitle': 'Discover our exclusive collection.',
        'products.all': 'All',
        'products.men': 'Men',
        'products.women': 'Women',
        'products.unisex': 'Unisex',
        'products.empty': 'No products available',
        'products.emptyDesc': 'Our collection will be available soon. Come back later!',
        'products.add': 'Add a product',
        'products.addToCart': 'Add to cart',
        'products.viewDetails': 'View details',
        'products.outOfStock': 'Out of stock',
        'contact.title': 'Contact Us',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Opening Hours',
        'contact.hoursDetail': 'Mon-Fri: 10am-7pm<br>Saturday: 10am-8pm<br>Sunday: 11am-6pm',
        'contact.formName': 'Full name',
        'contact.formEmail': 'Email address',
        'contact.formSubject': 'Subject (optional)',
        'contact.formMessage': 'Your message',
        'contact.send': 'Send message',
        'profile.title': 'My Profile',
        'profile.info': 'Information',
        'profile.orders': 'Orders',
        'profile.wishlist': 'Wishlist',
        'profile.addresses': 'Addresses',
        'profile.settings': 'Settings',
        'profile.firstName': 'First name',
        'profile.lastName': 'Last name',
        'profile.email': 'Email',
        'profile.phone': 'Phone',
        'profile.edit': 'Edit profile',
        'profile.save': 'Save',
        'profile.noOrders': 'You haven\'t placed any orders yet',
        'profile.shopNow': 'Shop now',
        'profile.noWishlist': 'Your wishlist is empty',
        'profile.browse': 'Browse products',
        'profile.noAddresses': 'No addresses saved',
        'profile.addAddress': 'Add an address',
        'settings.title': 'Settings',
        'settings.notifications': 'Notifications',
        'settings.notificationsDesc': 'Receive promotional emails and updates',
        'settings.darkMode': 'Dark mode',
        'settings.darkModeDesc': 'Enable/disable dark theme',
        'settings.language': 'Language',
        'settings.languageDesc': 'Change website language',
        'settings.danger': 'Danger zone',
        'settings.deleteAccount': 'Delete my account',
        'login.title': 'Login',
        'login.email': 'Email address',
        'login.password': 'Password',
        'login.remember': 'Remember me',
        'login.forgot': 'Forgot password?',
        'login.submit': 'Login',
        'login.noAccount': 'Don\'t have an account?',
        'login.createAccount': 'Create account',
        'signup.title': 'Create Account',
        'signup.firstName': 'First name',
        'signup.lastName': 'Last name',
        'signup.email': 'Email address',
        'signup.password': 'Password',
        'signup.confirm': 'Confirm password',
        'signup.terms': 'I accept the <a href="#">terms of use</a>',
        'signup.submit': 'Create my account',
        'signup.haveAccount': 'Already have an account?',
        'signup.login': 'Login',
        'product.addTitle': 'Add a new product',
        'product.name': 'Product name',
        'product.description': 'Description',
        'product.price': 'Price (€)',
        'product.stock': 'Stock',
        'product.selectCategory': 'Select a category',
        'product.image': 'Image URL',
        'product.features': 'Features (one per line)',
        'product.add': 'Add product',
        'footer.description': 'Your destination for exceptional perfumes since 2010.',
        'footer.links': 'Quick Links',
        'footer.services': 'Services',
        'footer.service1': 'Personalized advice',
        'footer.service2': 'Gifts & sets',
        'footer.service3': 'Free samples',
        'footer.service4': 'Free returns',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.cookies': 'Cookie Policy'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.products': 'Productos',
        'nav.contact': 'Contacto',
        'nav.profile': 'Perfil',
        'nav.settings': 'Configuración',
        'nav.login': 'Iniciar sesión',
        'nav.signup': 'Registrarse',
        'hero.title': 'El arte de la fragancia',
        'hero.subtitle': 'Descubra nuestra exclusiva colección de perfumes para hombre y mujer. Aromas únicos que cuentan tu historia.',
        'hero.shop': 'Descubrir la colección',
        'hero.learn': 'Saber más',
        'about.title': 'Acerca de ES Parfumerie',
        'about.text1': 'Desde 2010, ES Parfumerie ofrece una selección rigurosa de las fragancias más finas del mundo. Nuestra pasión por los perfumes nos impulsa a buscar constantemente la excelencia y la autenticidad.',
        'about.text2': 'Colaboramos con los mejores perfumistas y casas de perfume para ofrecerle aromas únicos, combinando tradición e innovación.',
        'about.feature1.title': 'Calidad Premium',
        'about.feature1.text': 'Selección de los mejores ingredientes',
        'about.feature2.title': 'Ingredientes Naturales',
        'about.feature2.text': 'Fórmulas respetuosas con el medio ambiente',
        'about.feature3.title': 'Entrega Rápida',
        'about.feature3.text': 'Envío en 48h en Francia',
        'products.title': 'Nuestros Perfumes',
        'products.subtitle': 'Descubra nuestra exclusiva colección.',
        'products.all': 'Todos',
        'products.men': 'Hombre',
        'products.women': 'Mujer',
        'products.unisex': 'Unisex',
        'products.empty': 'No hay productos disponibles',
        'products.emptyDesc': 'Nuestra colección estará disponible pronto. ¡Vuelva más tarde!',
        'products.add': 'Añadir producto',
        'products.addToCart': 'Añadir al carrito',
        'products.viewDetails': 'Ver detalles',
        'products.outOfStock': 'Agotado',
        'contact.title': 'Contáctenos',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Correo electrónico',
        'contact.hours': 'Horario de apertura',
        'contact.hoursDetail': 'Lun-Vie: 10h-19h<br>Sábado: 10h-20h<br>Domingo: 11h-18h',
        'contact.formName': 'Nombre completo',
        'contact.formEmail': 'Correo electrónico',
        'contact.formSubject': 'Asunto (opcional)',
        'contact.formMessage': 'Su mensaje',
        'contact.send': 'Enviar mensaje',
        'profile.title': 'Mi Perfil',
        'profile.info': 'Información',
        'profile.orders': 'Pedidos',
        'profile.wishlist': 'Lista de deseos',
        'profile.addresses': 'Direcciones',
        'profile.settings': 'Configuración',
        'profile.firstName': 'Nombre',
        'profile.lastName': 'Apellido',
        'profile.email': 'Correo electrónico',
        'profile.phone': 'Teléfono',
        'profile.edit': 'Editar perfil',
        'profile.save': 'Guardar',
        'profile.noOrders': 'Aún no ha realizado ningún pedido',
        'profile.shopNow': 'Comprar ahora',
        'profile.noWishlist': 'Su lista de deseos está vacía',
        'profile.browse': 'Explorar productos',
        'profile.noAddresses': 'No hay direcciones guardadas',
        'profile.addAddress': 'Añadir dirección',
        'settings.title': 'Configuración',
        'settings.notifications': 'Notificaciones',
        'settings.notificationsDesc': 'Recibir correos promocionales y actualizaciones',
        'settings.darkMode': 'Modo oscuro',
        'settings.darkModeDesc': 'Activar/desactivar tema oscuro',
        'settings.language': 'Idioma',
        'settings.languageDesc': 'Cambiar idioma del sitio',
        'settings.danger': 'Zona peligrosa',
        'settings.deleteAccount': 'Eliminar mi cuenta',
        'login.title': 'Iniciar sesión',
        'login.email': 'Correo electrónico',
        'login.password': 'Contraseña',
        'login.remember': 'Recordarme',
        'login.forgot': '¿Olvidó su contraseña?',
        'login.submit': 'Iniciar sesión',
        'login.noAccount': '¿No tiene una cuenta?',
        'login.createAccount': 'Crear cuenta',
        'signup.title': 'Crear Cuenta',
        'signup.firstName': 'Nombre',
        'signup.lastName': 'Apellido',
        'signup.email': 'Correo electrónico',
        'signup.password': 'Contraseña',
        'signup.confirm': 'Confirmar contraseña',
        'signup.terms': 'Acepto los <a href="#">términos de uso</a>',
        'signup.submit': 'Crear mi cuenta',
        'signup.haveAccount': '¿Ya tiene una cuenta?',
        'signup.login': 'Iniciar sesión',
        'product.addTitle': 'Añadir un nuevo producto',
        'product.name': 'Nombre del producto',
        'product.description': 'Descripción',
        'product.price': 'Precio (€)',
        'product.stock': 'Stock',
        'product.selectCategory': 'Seleccionar una categoría',
        'product.image': 'URL de la imagen',
        'product.features': 'Características (una por línea)',
        'product.add': 'Añadir producto',
        'footer.description': 'Su destino para perfumes excepcionales desde 2010.',
        'footer.links': 'Enlaces rápidos',
        'footer.services': 'Servicios',
        'footer.service1': 'Consejos personalizados',
        'footer.service2': 'Regalos y juegos',
        'footer.service3': 'Muestras gratuitas',
        'footer.service4': 'Devoluciones gratuitas',
        'footer.contact': 'Contacto',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.privacy': 'Política de privacidad',
        'footer.terms': 'Términos de uso',
        'footer.cookies': 'Política de cookies'
    }
};

// Gestion du panier
const CartManager = {
    // Sauvegarder le panier
    saveCart: function() {
        const cartData = {
            items: AppState.cart.map(item => ({
                productId: item.product.id,
                quantity: item.quantity
            })),
            timestamp: new Date().getTime()
        };
        
        localStorage.setItem('es-parfumerie-cart', JSON.stringify(cartData));
        this.updateCartCount();
    },

    // Charger le panier depuis localStorage et récupérer les produits depuis l'API
    loadCart: async function() {
        const cartData = localStorage.getItem('es-parfumerie-cart');
        
        if (!cartData) {
            AppState.cart = [];
            return;
        }

        try {
            const parsedData = JSON.parse(cartData);
            const cartItems = parsedData.items || [];
            
            if (cartItems.length === 0) {
                AppState.cart = [];
                return;
            }

            // Récupérer les IDs des produits
            const productIds = cartItems.map(item => item.productId);
            
            // Récupérer les produits depuis l'API
            const response = await fetch(`${API_BASE_URL}/api/products/by-ids`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: productIds })
            });

            if (response.ok) {
                const data = await response.json();
                const products = data.products || [];
                
                // Reconstruire le panier
                AppState.cart = cartItems.map(cartItem => {
                    const product = products.find(p => p.id == cartItem.productId);
                    if (product) {
                        return {
                            product: product,
                            quantity: cartItem.quantity
                        };
                    }
                    return null;
                }).filter(item => item !== null);
                
                console.log('🛒 Panier chargé:', AppState.cart.length, 'articles');
            } else {
                AppState.cart = [];
            }
        } catch (error) {
            console.error('❌ Erreur lors du chargement du panier:', error);
            AppState.cart = [];
        }
        
        this.updateCartCount();
    },

    // Mettre à jour le compteur
    updateCartCount: function() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const totalItems = AppState.cart.reduce((total, item) => total + item.quantity, 0);
        
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    },

    // Ajouter au panier
    addToCart: async function(productId, quantity = 1) {
        try {
            // Récupérer le produit depuis l'API
            const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
            
            if (!response.ok) {
                throw new Error('Produit non trouvé');
            }

            const data = await response.json();
            const product = data.product;

            if (!product) {
                throw new Error('Produit non trouvé');
            }

            // Vérifier le stock
            if (product.stock <= 0) {
                showNotification('Ce produit est en rupture de stock', 'error');
                return false;
            }

            // Chercher si le produit est déjà dans le panier
            const existingItem = AppState.cart.find(item => item.product.id == productId);

            if (existingItem) {
                // Vérifier si on dépasse le stock
                if (existingItem.quantity + quantity > product.stock) {
                    showNotification(`Stock insuffisant. Il reste ${product.stock} unités.`, 'error');
                    return false;
                }
                existingItem.quantity += quantity;
            } else {
                // Vérifier si on dépasse le stock
                if (quantity > product.stock) {
                    showNotification(`Stock insuffisant. Il reste ${product.stock} unités.`, 'error');
                    return false;
                }
                AppState.cart.push({
                    product: product,
                    quantity: quantity
                });
            }

            // Sauvegarder le panier
            this.saveCart();
            
            // Afficher une notification
            showNotification(`${product.name} ajouté au panier`, 'success');
            
            return true;

        } catch (error) {
            console.error('❌ Erreur lors de l\'ajout au panier:', error);
            showNotification('Erreur lors de l\'ajout au panier', 'error');
            return false;
        }
    },

    // Supprimer du panier
    removeFromCart: function(productId) {
        AppState.cart = AppState.cart.filter(item => item.product.id != productId);
        this.saveCart();
        showNotification('Produit retiré du panier', 'info');
    },

    // Mettre à jour la quantité
    updateQuantity: function(productId, quantity) {
        const item = AppState.cart.find(item => item.product.id == productId);
        
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else if (quantity > item.product.stock) {
                showNotification(`Stock limité à ${item.product.stock} unités`, 'error');
                item.quantity = item.product.stock;
            } else {
                item.quantity = quantity;
            }
            this.saveCart();
        }
    },

    // Vider le panier
    clearCart: function() {
        AppState.cart = [];
        this.saveCart();
    },

    // Calculer le total
    calculateTotal: function() {
        return AppState.cart.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    AppState.language = lang;
    document.documentElement.lang = lang;
    
    // Mettre à jour les textes avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour le sélecteur de langue
    const languageSelect = document.getElementById('language-select');
    const profileLanguageSelect = document.getElementById('profile-language-select');
    if (languageSelect) languageSelect.value = lang;
    if (profileLanguageSelect) profileLanguageSelect.value = lang;
    
    // Sauvegarder la préférence
    localStorage.setItem('es-parfumerie-language', lang);
}

// Fonction pour basculer le mode sombre
function toggleDarkMode() {
    AppState.darkMode = !AppState.darkMode;
    document.body.classList.toggle('dark-mode', AppState.darkMode);
    
    // Mettre à jour l'icône
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = AppState.darkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Mettre à jour le toggle dans les paramètres
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.checked = AppState.darkMode;
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('es-parfumerie-darkmode', AppState.darkMode);
}

// Fonction pour afficher/masquer la section profil
function toggleProfileSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.profile-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Désactiver tous les liens
    document.querySelectorAll('.profile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Afficher la section sélectionnée
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    // Activer le lien correspondant
    const link = document.querySelector(`[href="#${sectionId}"]`);
    if (link) {
        link.classList.add('active');
    }
}

// Fonction pour charger les produits depuis l'API
async function loadProducts() {
    try {
        console.log('🔄 Chargement des produits depuis l\'API...');
        
        // Ajouter un timestamp pour éviter le cache
        const timestamp = new Date().getTime();
        const response = await fetch(`${API_BASE_URL}/api/products?t=${timestamp}`);
        
        if (response.ok) {
            const data = await response.json();
            AppState.products = data.products || [];
            console.log(`✅ ${AppState.products.length} produits chargés`);
            displayProducts();
            
            // Afficher le bouton admin si l'utilisateur est admin
            if (AppState.currentUser && AppState.currentUser.role === 'admin') {
                document.getElementById('admin-actions').style.display = 'block';
            }
            
        } else {
            console.error('❌ Erreur API:', response.status, response.statusText);
            AppState.products = [];
            displayProducts();
            
            // Afficher un message d'erreur
            const productsGrid = document.getElementById('products-grid');
            if (productsGrid) {
                productsGrid.innerHTML = `
                    <div class="no-products">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Erreur de connexion au serveur</h3>
                        <p>Impossible de charger les produits. Veuillez réessayer plus tard.</p>
                        <button onclick="loadProducts()" class="btn-primary">
                            <i class="fas fa-sync-alt"></i> Réessayer
                        </button>
                    </div>
                `;
            }
        }
    } catch (error) {
        console.error('❌ Erreur réseau:', error);
        AppState.products = [];
        displayProducts();
        
        // Afficher un message d'erreur
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-wifi-slash"></i>
                    <h3>Problème de connexion</h3>
                    <p>Impossible de se connecter au serveur. Vérifiez votre connexion internet.</p>
                    <button onclick="loadProducts()" class="btn-primary">
                        <i class="fas fa-sync-alt"></i> Réessayer
                    </button>
                </div>
            `;
        }
    }
}

// Fonction pour afficher les produits
function displayProducts(filter = 'all') {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;
    
    // Filtrer les produits
    let filteredProducts = AppState.products;
    if (filter !== 'all') {
        filteredProducts = AppState.products.filter(product => product.category === filter);
    }
    
    // Si aucun produit
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-box-open"></i>
                <h3 data-i18n="products.empty">Aucun produit disponible</h3>
                <p data-i18n="products.emptyDesc">Notre collection sera bientôt disponible. Revenez plus tard !</p>
                ${AppState.products.length === 0 ? `
                    <button onclick="loadProducts()" class="btn-primary">
                        <i class="fas fa-sync-alt"></i> Actualiser
                    </button>
                ` : ''}
            </div>
        `;
        
        // Réappliquer les traductions
        changeLanguage(AppState.language);
        return;
    }
    
    // Générer les cartes de produits
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image_url || product.image || 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}" 
                     alt="${product.name}"
                     onerror="this.src='https://via.placeholder.com/400x300?text=ES+Parfumerie'">
            </div>
            <div class="product-info">
                <span class="product-category">
                    ${product.category === 'men' ? 'Homme' : 
                      product.category === 'women' ? 'Femme' : 'Unisex'}
                </span>
                <h3>${product.name}</h3>
                <p>${(product.description || '').substring(0, 100)}${product.description && product.description.length > 100 ? '...' : ''}</p>
                <div class="product-price">${parseFloat(product.price).toFixed(2)} €</div>
                <div class="product-stock" style="font-size: 0.9rem; color: ${product.stock > 10 ? '#2ecc71' : product.stock > 0 ? '#f39c12' : '#e74c3c'}; margin: 5px 0;">
                    ${product.stock > 10 ? '🟢 En stock' : 
                     product.stock > 0 ? '🟡 Stock limité' : '🔴 Rupture de stock'}
                </div>
                <div class="product-actions">
                    ${product.stock > 0 ? 
                        `<button class="btn-primary add-to-cart" data-id="${product.id}" data-i18n="products.addToCart">Ajouter au panier</button>` : 
                        `<button class="btn-outline" disabled data-i18n="products.outOfStock">Rupture de stock</button>`
                    }
                    <button class="btn-outline view-details" data-id="${product.id}" data-i18n="products.viewDetails">Voir détails</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Réappliquer les traductions
    changeLanguage(AppState.language);
    
    // Ajouter les événements aux boutons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Fonction pour ajouter au panier
function addToCart(productId) {
    // Vérifier si l'utilisateur est connecté pour l'achat
    if (!AppState.currentUser) {
        const shouldLogin = confirm('Vous devez être connecté pour ajouter des articles au panier.\n\nVoulez-vous vous connecter maintenant ?');
        if (shouldLogin) {
            openModal('login-modal');
        }
        return;
    }
    
    CartManager.addToCart(productId, 1);
}

// Fonction pour afficher une notification
function showNotification(message, type = 'success') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Ajouter au body
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Fermer la notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Fermeture automatique après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Fonction pour gérer la connexion
async function handleLogin(email, password, rememberMe) {
    try {
        showNotification('Connexion en cours...', 'info');
        
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Mettre à jour l'état
            AppState.currentUser = data.user;
            
            // Sauvegarder le token et les informations utilisateur
            localStorage.setItem('es-parfumerie-token', data.token);
            localStorage.setItem('es-parfumerie-user', JSON.stringify(data.user));
            
            if (rememberMe) {
                localStorage.setItem('es-parfumerie-remember', 'true');
            }
            
            // Mettre à jour l'interface
            updateUserInterface();
            
            // Fermer le modal
            closeModal('login-modal');
            
            // Afficher une notification
            showNotification('Connexion réussie !', 'success');
            
            // Recharger le panier avec le nouvel utilisateur
            CartManager.loadCart();
            
        } else {
            showNotification(data.error || 'Échec de la connexion', 'error');
        }
    } catch (error) {
        console.error('❌ Erreur de connexion:', error);
        showNotification('Erreur de connexion au serveur', 'error');
    }
}

// Fonction pour gérer l'inscription
async function handleSignup(firstName, lastName, email, password) {
    try {
        showNotification('Création du compte en cours...', 'info');
        
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                email, 
                password, 
                firstName, 
                lastName 
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Mettre à jour l'état
            AppState.currentUser = data.user;
            
            // Sauvegarder le token et les informations utilisateur
            localStorage.setItem('es-parfumerie-token', data.token);
            localStorage.setItem('es-parfumerie-user', JSON.stringify(data.user));
            
            // Mettre à jour l'interface
            updateUserInterface();
            
            // Fermer le modal
            closeModal('signup-modal');
            
            // Afficher une notification
            showNotification('Compte créé avec succès !', 'success');
            
        } else {
            showNotification(data.error || 'Échec de la création du compte', 'error');
        }
    } catch (error) {
        console.error('❌ Erreur d\'inscription:', error);
        showNotification('Erreur de connexion au serveur', 'error');
    }
}

// Fonction pour mettre à jour l'interface utilisateur
function updateUserInterface() {
    const authButtons = document.querySelector('.auth-buttons');
    const profileSection = document.getElementById('profile');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    
    if (AppState.currentUser) {
        // Masquer les boutons de connexion/inscription
        if (authButtons) authButtons.style.display = 'none';
        
        // Afficher la section profil
        if (profileSection) profileSection.style.display = 'block';
        
        // Mettre à jour les informations du profil
        if (profileName) {
            profileName.textContent = `${AppState.currentUser.firstName || ''} ${AppState.currentUser.lastName || ''}`.trim() || AppState.currentUser.email;
        }
        if (profileEmail) profileEmail.textContent = AppState.currentUser.email;
        
        // Remplir le formulaire de profil
        if (document.getElementById('first-name')) {
            document.getElementById('first-name').value = AppState.currentUser.firstName || '';
            document.getElementById('last-name').value = AppState.currentUser.lastName || '';
            document.getElementById('user-email').value = AppState.currentUser.email;
            document.getElementById('user-phone').value = AppState.currentUser.phone || '';
        }
        
        // Afficher le bouton admin si l'utilisateur est admin
        if (AppState.currentUser.role === 'admin') {
            document.getElementById('admin-actions').style.display = 'block';
        }
    } else {
        // Afficher les boutons de connexion/inscription
        if (authButtons) authButtons.style.display = 'flex';
        
        // Masquer la section profil
        if (profileSection) profileSection.style.display = 'none';
    }
}

// Fonction pour déconnecter l'utilisateur
function logoutUser() {
    // Supprimer les données de l'utilisateur
    localStorage.removeItem('es-parfumerie-token');
    localStorage.removeItem('es-parfumerie-user');
    localStorage.removeItem('es-parfumerie-remember');
    
    // Réinitialiser l'état
    AppState.currentUser = null;
    
    // Mettre à jour l'interface
    updateUserInterface();
    
    // Vider le panier
    CartManager.clearCart();
    
    // Afficher une notification
    showNotification('Déconnexion réussie', 'info');
    
    // Revenir à l'accueil
    if (window.location.pathname.includes('cart.html')) {
        window.location.href = 'index.html';
    }
}

// Fonction pour ouvrir un modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Fonction pour fermer un modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser l'année dans le footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Charger les préférences utilisateur
    const savedLanguage = localStorage.getItem('es-parfumerie-language') || 'fr';
    const savedDarkMode = localStorage.getItem('es-parfumerie-darkmode') === 'true';
    const savedToken = localStorage.getItem('es-parfumerie-token');
    const savedUser = localStorage.getItem('es-parfumerie-user');
    
    // Appliquer les préférences
    AppState.language = savedLanguage;
    AppState.darkMode = savedDarkMode;
    
    if (savedToken && savedUser) {
        try {
            AppState.currentUser = JSON.parse(savedUser);
        } catch (error) {
            console.error('❌ Erreur lors du chargement de l\'utilisateur:', error);
        }
    }
    
    // Appliquer le mode sombre
    if (AppState.darkMode) {
        document.body.classList.add('dark-mode');
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }
    
    // Appliquer la langue
    changeLanguage(AppState.language);
    
    // Mettre à jour l'interface utilisateur
    updateUserInterface();
    
    // Charger les produits
    loadProducts();
    
    // Charger le panier
    CartManager.loadCart();
    
    // Rafraîchir les produits toutes les 30 secondes
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            loadProducts();
        }
    }, 30000);
    
    // Écouter les messages depuis le panel admin
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'RELOAD_PRODUCTS') {
            console.log('🔄 Rechargement des produits demandé depuis le panel admin');
            loadProducts();
            showNotification('Nouveaux produits disponibles !', 'info');
        }
    });
    
    // Navigation mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
    }
    
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    }
    
    // Fermer le menu mobile en cliquant sur un lien
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
    
    // Basculer le mode sombre
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (darkModeToggle) {
        darkModeToggle.checked = AppState.darkMode;
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }
    
    // Changer la langue
    const languageSelect = document.getElementById('language-select');
    const profileLanguageSelect = document.getElementById('profile-language-select');
    
    if (languageSelect) {
        languageSelect.value = AppState.language;
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    if (profileLanguageSelect) {
        profileLanguageSelect.value = AppState.language;
        profileLanguageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Navigation entre sections
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#home' || href === '#about' || href === '#products' || href === '#contact' || href === '#profile' || href === '#settings') {
                e.preventDefault();
                
                // Mettre à jour la navigation active
                document.querySelectorAll('.nav-links a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                if (href !== '#profile' && href !== '#settings') {
                    this.classList.add('active');
                }
                
                // Afficher la section correspondante
                if (href === '#profile' || href === '#settings') {
                    // Afficher la section profil
                    document.querySelectorAll('main > section').forEach(section => {
                        section.style.display = 'none';
                    });
                    
                    const profileSection = document.getElementById('profile');
                    if (profileSection) {
                        profileSection.style.display = 'block';
                        
                        // Afficher la bonne sous-section
                        if (href === '#settings') {
                            toggleProfileSection('settings');
                        } else {
                            toggleProfileSection('profile-info');
                        }
                    }
                } else {
                    // Masquer la section profil
                    const profileSection = document.getElementById('profile');
                    if (profileSection) {
                        profileSection.style.display = 'none';
                    }
                    
                    // Afficher la section correspondante
                    document.querySelectorAll('main > section').forEach(section => {
                        if (section.id === href.substring(1)) {
                            section.style.display = 'block';
                        } else if (section.id !== 'profile') {
                            section.style.display = 'none';
                        }
                    });
                }
                
                // Fermer le menu mobile
                if (mobileMenu) {
                    mobileMenu.classList.remove('open');
                }
            }
        });
    });
    
    // Navigation du profil
    document.querySelectorAll('.profile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            toggleProfileSection(sectionId);
        });
    });
    
    // Modals
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    // Ouvrir les modals
    document.getElementById('login-btn')?.addEventListener('click', () => openModal('login-modal'));
    document.getElementById('signup-btn')?.addEventListener('click', () => openModal('signup-modal'));
    document.getElementById('mobile-login-btn')?.addEventListener('click', () => openModal('login-modal'));
    document.getElementById('mobile-signup-btn')?.addEventListener('click', () => openModal('signup-modal'));
    document.getElementById('add-product-btn')?.addEventListener('click', () => openModal('add-product-modal'));
    document.getElementById('switch-to-signup')?.addEventListener('click', () => {
        closeModal('login-modal');
        openModal('signup-modal');
    });
    document.getElementById('switch-to-login')?.addEventListener('click', () => {
        closeModal('signup-modal');
        openModal('login-modal');
    });
    
    // Fermer les modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Fermer les modals en cliquant à l'extérieur
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
    
    // Formulaire de connexion
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            handleLogin(email, password, rememberMe);
        });
    }
    
    // Formulaire d'inscription
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('signup-firstname').value;
            const lastName = document.getElementById('signup-lastname').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm').value;
            
            // Validation basique
            if (password !== confirmPassword) {
                showNotification('Les mots de passe ne correspondent pas.', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Le mot de passe doit contenir au moins 6 caractères.', 'error');
                return;
            }
            
            handleSignup(firstName, lastName, email, password);
        });
    }
    
    // Formulaire d'ajout de produit
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const productData = {
                name: document.getElementById('product-name').value,
                description: document.getElementById('product-description').value,
                price: parseFloat(document.getElementById('product-price').value),
                stock: parseInt(document.getElementById('product-stock').value),
                category: document.getElementById('product-category').value,
                image_url: document.getElementById('product-image').value,
                features: document.getElementById('product-features').value.split('\n').filter(f => f.trim() !== '')
            };
            
            try {
                const token = localStorage.getItem('es-parfumerie-token');
                const response = await fetch(`${API_BASE_URL}/api/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(productData)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    closeModal('add-product-modal');
                    showNotification('Produit ajouté avec succès !', 'success');
                    document.getElementById('add-product-form').reset();
                    
                    // Recharger les produits
                    loadProducts();
                    
                    // Notifier le panel admin si ouvert
                    if (window.opener) {
                        window.opener.postMessage({ type: 'RELOAD_PRODUCTS' }, '*');
                    }
                } else {
                    showNotification(data.error || 'Erreur lors de l\'ajout du produit', 'error');
                }
            } catch (error) {
                console.error('❌ Erreur:', error);
                showNotification('Erreur de connexion au serveur', 'error');
            }
        });
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi
            showNotification('Votre message a été envoyé avec succès !', 'success');
            this.reset();
        });
    }
    
    // Filtrage des produits
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Mettre à jour les boutons actifs
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            // Filtrer les produits
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    
    // Édition du profil
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            // Activer les champs
            document.getElementById('first-name').disabled = false;
            document.getElementById('last-name').disabled = false;
            document.getElementById('user-phone').disabled = false;
            
            // Afficher le bouton de sauvegarde
            this.style.display = 'none';
            if (saveProfileBtn) {
                saveProfileBtn.style.display = 'inline-block';
            }
        });
    }
    
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const updatedData = {
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                phone: document.getElementById('user-phone').value
            };
            
            try {
                const token = localStorage.getItem('es-parfumerie-token');
                const response = await fetch(`${API_BASE_URL}/api/users/me`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(updatedData)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Mettre à jour l'utilisateur dans l'état
                    if (AppState.currentUser) {
                        AppState.currentUser.firstName = updatedData.first_name;
                        AppState.currentUser.lastName = updatedData.last_name;
                        AppState.currentUser.phone = updatedData.phone;
                        localStorage.setItem('es-parfumerie-user', JSON.stringify(AppState.currentUser));
                    }
                    
                    showNotification('Profil mis à jour avec succès !', 'success');
                    
                    // Désactiver les champs
                    document.getElementById('first-name').disabled = true;
                    document.getElementById('last-name').disabled = true;
                    document.getElementById('user-phone').disabled = true;
                    
                    // Afficher le bouton d'édition
                    this.style.display = 'none';
                    if (editProfileBtn) {
                        editProfileBtn.style.display = 'inline-block';
                    }
                    
                    // Mettre à jour l'affichage
                    updateUserInterface();
                    
                } else {
                    showNotification(data.error || 'Erreur lors de la mise à jour', 'error');
                }
            } catch (error) {
                console.error('❌ Erreur:', error);
                showNotification('Erreur de connexion au serveur', 'error');
            }
        });
    }
    
    // Déconnexion (bouton dans les paramètres)
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
                logoutUser();
            }
        });
    }
    
    // Ajouter des styles pour les notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--bg-color);
            color: var(--text-color);
            border-radius: var(--radius);
            box-shadow: var(--shadow-hover);
            padding: var(--space-md);
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            z-index: 1003;
            transform: translateX(100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            border-left: 4px solid #4CAF50;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification.error {
            border-left-color: #f44336;
        }
        
        .notification.info {
            border-left-color: #2196F3;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            flex-grow: 1;
        }
        
        .notification-content i {
            font-size: 1.5rem;
        }
        
        .notification.success .notification-content i {
            color: #4CAF50;
        }
        
        .notification.error .notification-content i {
            color: #f44336;
        }
        
        .notification.info .notification-content i {
            color: #2196F3;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-light);
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            margin-left: var(--space-sm);
        }
        
        @media (max-width: 768px) {
            .notification {
                left: 20px;
                right: 20px;
                min-width: auto;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);
});
