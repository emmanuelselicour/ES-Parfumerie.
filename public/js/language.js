// Gestion du changement de langue
function initLanguage() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageLinks = document.querySelectorAll('.language-dropdown a');
    
    // Charger la langue sauvegardée
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage);
    
    // Gérer le clic sur les liens de langue
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.dataset.lang;
            setLanguage(lang);
            languageDropdown.style.display = 'none';
        });
    });
    
    // Traductions
    const translations = {
        fr: {
            // Navigation
            'home': 'Accueil',
            'about': 'À propos',
            'products': 'Produits',
            'contact': 'Contact',
            'profile': 'Mon profil',
            'settings': 'Paramètres',
            'logout': 'Déconnexion',
            'searchPlaceholder': 'Rechercher un parfum...',
            
            // Hero
            'heroTitle': 'L\'art du parfum',
            'heroSubtitle': 'Découvrez notre collection exclusive de parfums de créateurs et de niche',
            'exploreCollection': 'Explorer la collection',
            
            // Catégories
            'categoriesTitle': 'Nos catégories',
            'women': 'Femme',
            'men': 'Homme',
            'unisex': 'Unisex',
            'niche': 'Niche',
            
            // Produits
            'featuredProducts': 'Produits vedettes',
            'viewAll': 'Voir tout',
            'addToCart': 'Ajouter au panier',
            
            // À propos
            'aboutTitle': 'À propos de ES Parfumerie',
            'aboutText1': 'Depuis 2010, ES Parfumerie sélectionne les plus belles fragrances pour offrir à ses clients une expérience olfactive unique. Notre expertise nous permet de dénicher des parfums rares et de créateurs.',
            'aboutText2': 'Nous croyons que chaque individu mérite un parfum qui reflète sa personnalité. C\'est pourquoi notre équipe de parfumeurs expérimentés est là pour vous guider dans votre recherche de la fragrance parfaite.',
            'learnMore': 'En savoir plus',
            
            // Contact
            'contactTitle': 'Besoin d\'aide pour choisir ?',
            'contactText': 'Notre équipe d\'experts est disponible pour vous conseiller dans le choix de votre prochain parfum. N\'hésitez pas à nous contacter pour des conseils personnalisés.',
            'contactUs': 'Nous contacter',
            
            // Footer
            'footerDescription': 'Votre destination pour les parfums de luxe et de créateurs depuis 2010.',
            'quickLinks': 'Liens rapides',
            'contactInfo': 'Contact',
            'privacy': 'Politique de confidentialité',
            'terms': 'Conditions d\'utilisation',
            'cookies': 'Gestion des cookies',
            'copyright': '© 2023 ES Parfumerie. Tous droits réservés.',
            
            // Modal
            'login': 'Connexion',
            'register': 'Inscription',
            'loginTitle': 'Connectez-vous à votre compte',
            'registerTitle': 'Créez votre compte',
            'fullName': 'Nom complet',
            'email': 'Email',
            'password': 'Mot de passe',
            'confirmPassword': 'Confirmer le mot de passe',
            'loginButton': 'Se connecter',
            'registerButton': 'S\'inscrire',
            'noAccount': 'Pas encore de compte ?',
            'hasAccount': 'Déjà un compte ?',
            'signUp': 'Inscrivez-vous',
            'signIn': 'Connectez-vous'
        },
        en: {
            // Navigation
            'home': 'Home',
            'about': 'About',
            'products': 'Products',
            'contact': 'Contact',
            'profile': 'My Profile',
            'settings': 'Settings',
            'logout': 'Logout',
            'searchPlaceholder': 'Search for a perfume...',
            
            // Hero
            'heroTitle': 'The Art of Perfume',
            'heroSubtitle': 'Discover our exclusive collection of designer and niche perfumes',
            'exploreCollection': 'Explore the collection',
            
            // Catégories
            'categoriesTitle': 'Our Categories',
            'women': 'Women',
            'men': 'Men',
            'unisex': 'Unisex',
            'niche': 'Niche',
            
            // Produits
            'featuredProducts': 'Featured Products',
            'viewAll': 'View all',
            'addToCart': 'Add to cart',
            
            // À propos
            'aboutTitle': 'About ES Parfumerie',
            'aboutText1': 'Since 2010, ES Parfumerie has been selecting the finest fragrances to offer our customers a unique olfactory experience. Our expertise allows us to source rare and designer perfumes.',
            'aboutText2': 'We believe that every individual deserves a perfume that reflects their personality. That\'s why our team of experienced perfumers is here to guide you in your search for the perfect fragrance.',
            'learnMore': 'Learn more',
            
            // Contact
            'contactTitle': 'Need help choosing?',
            'contactText': 'Our team of experts is available to advise you on your next perfume choice. Feel free to contact us for personalized advice.',
            'contactUs': 'Contact us',
            
            // Footer
            'footerDescription': 'Your destination for luxury and designer perfumes since 2010.',
            'quickLinks': 'Quick Links',
            'contactInfo': 'Contact',
            'privacy': 'Privacy Policy',
            'terms': 'Terms of Use',
            'cookies': 'Cookie Management',
            'copyright': '© 2023 ES Parfumerie. All rights reserved.',
            
            // Modal
            'login': 'Login',
            'register': 'Register',
            'loginTitle': 'Login to your account',
            'registerTitle': 'Create your account',
            'fullName': 'Full name',
            'email': 'Email',
            'password': 'Password',
            'confirmPassword': 'Confirm password',
            'loginButton': 'Login',
            'registerButton': 'Register',
            'noAccount': 'No account yet?',
            'hasAccount': 'Already have an account?',
            'signUp': 'Sign up',
            'signIn': 'Sign in'
        },
        es: {
            // Navigation
            'home': 'Inicio',
            'about': 'Acerca de',
            'products': 'Productos',
            'contact': 'Contacto',
            'profile': 'Mi perfil',
            'settings': 'Configuración',
            'logout': 'Cerrar sesión',
            'searchPlaceholder': 'Buscar un perfume...',
            
            // Hero
            'heroTitle': 'El arte del perfume',
            'heroSubtitle': 'Descubra nuestra exclusiva colección de perfumes de diseñador y de nicho',
            'exploreCollection': 'Explorar la colección',
            
            // Catégories
            'categoriesTitle': 'Nuestras categorías',
            'women': 'Mujer',
            'men': 'Hombre',
            'unisex': 'Unisex',
            'niche': 'Nicho',
            
            // Produits
            'featuredProducts': 'Productos destacados',
            'viewAll': 'Ver todo',
            'addToCart': 'Añadir al carrito',
            
            // À propos
            'aboutTitle': 'Acerca de ES Parfumerie',
            'aboutText1': 'Desde 2010, ES Parfumerie selecciona las mejores fragancias para ofrecer a nuestros clientes una experiencia olfativa única. Nuestra experiencia nos permite encontrar perfumes raros y de diseñador.',
            'aboutText2': 'Creemos que cada individuo merece un perfume que refleje su personalidad. Por eso nuestro equipo de perfumistas experimentados está aquí para guiarte en tu búsqueda de la fragancia perfecta.',
            'learnMore': 'Saber más',
            
            // Contact
            'contactTitle': '¿Necesitas ayuda para elegir?',
            'contactText': 'Nuestro equipo de expertos está disponible para asesorarte en la elección de tu próximo perfume. No dudes en contactarnos para obtener asesoramiento personalizado.',
            'contactUs': 'Contáctanos',
            
            // Footer
            'footerDescription': 'Tu destino para perfumes de lujo y de diseñador desde 2010.',
            'quickLinks': 'Enlaces rápidos',
            'contactInfo': 'Contacto',
            'privacy': 'Política de privacidad',
            'terms': 'Términos de uso',
            'cookies': 'Gestión de cookies',
            'copyright': '© 2023 ES Parfumerie. Todos los derechos reservados.',
            
            // Modal
            'login': 'Iniciar sesión',
            'register': 'Registrarse',
            'loginTitle': 'Inicia sesión en tu cuenta',
            'registerTitle': 'Crea tu cuenta',
            'fullName': 'Nombre completo',
            'email': 'Correo electrónico',
            'password': 'Contraseña',
            'confirmPassword': 'Confirmar contraseña',
            'loginButton': 'Iniciar sesión',
            'registerButton': 'Registrarse',
            'noAccount': '¿No tienes una cuenta?',
            'hasAccount': '¿Ya tienes una cuenta?',
            'signUp': 'Regístrate',
            'signIn': 'Inicia sesión'
        }
    };
    
    // Fonction pour définir la langue
    function setLanguage(lang) {
        // Sauvegarder la langue
        localStorage.setItem('language', lang);
        
        // Mettre à jour le bouton de langue
        const currentLang = document.querySelector('.current-lang');
        if (currentLang) {
            currentLang.textContent = lang.toUpperCase();
        }
        
        // Appliquer les traductions
        applyTranslations(lang);
    }
    
    // Fonction pour appliquer les traductions
    function applyTranslations(lang) {
        const translation = translations[lang];
        
        // Traduire les éléments avec l'attribut data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translation[key]) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            }
        });
        
        // Traduire les éléments spécifiques sans attribut data-i18n
        const elementsToTranslate = {
            // Navigation
            '.nav-link[href="index.html"]': 'home',
            '.nav-link[href="about.html"]': 'about',
            '.nav-link[href="products.html"]': 'products',
            '.nav-link[href="contact.html"]': 'contact',
            '.user-link[href="profile.html"] span': 'profile',
            '.user-link[href="settings.html"] span': 'settings',
            '#logoutBtn span': 'logout',
            '#searchInput': 'searchPlaceholder',
            
            // Hero
            '.hero-title': 'heroTitle',
            '.hero-subtitle': 'heroSubtitle',
            '.hero .btn': 'exploreCollection',
            
            // Catégories
            '.section-title:first-of-type': 'categoriesTitle',
            '.category-card:nth-child(1) .category-title': 'women',
            '.category-card:nth-child(2) .category-title': 'men',
            '.category-card:nth-child(3) .category-title': 'unisex',
            '.category-card:nth-child(4) .category-title': 'niche',
            
            // Produits
            '.section-header .section-title': 'featuredProducts',
            '.view-all': 'viewAll',
            '.btn-cart': 'addToCart',
            
            // À propos
            '.about-preview .section-title': 'aboutTitle',
            '.about-content p:nth-child(2)': 'aboutText1',
            '.about-content p:nth-child(3)': 'aboutText2',
            '.about-preview .btn': 'learnMore',
            
            // Contact
            '.contact-preview .section-title': 'contactTitle',
            '.contact-content p': 'contactText',
            '.contact-preview .btn': 'contactUs',
            
            // Footer
            '.footer-column:first-child p': 'footerDescription',
            '.footer-column:nth-child(2) .footer-title': 'quickLinks',
            '.footer-column:nth-child(4) .footer-title': 'contactInfo',
            '.footer-bottom-links a:nth-child(1)': 'privacy',
            '.footer-bottom-links a:nth-child(2)': 'terms',
            '.footer-bottom-links a:nth-child(3)': 'cookies',
            '.footer-bottom p:first-child': 'copyright',
            
            // Modal
            '.tab-btn[data-tab="login"]': 'login',
            '.tab-btn[data-tab="register"]': 'register',
            '#login-tab h3': 'loginTitle',
            '#register-tab h3': 'registerTitle',
            '#login-tab label[for="login-email"]': 'email',
            '#login-tab label[for="login-password"]': 'password',
            '#login-tab button': 'loginButton',
            '#register-tab label[for="register-name"]': 'fullName',
            '#register-tab label[for="register-email"]': 'email',
            '#register-tab label[for="register-password"]': 'password',
            '#register-tab label[for="register-confirm"]': 'confirmPassword',
            '#register-tab button': 'registerButton',
            '#login-tab .modal-text a': 'signUp',
            '#register-tab .modal-text a': 'signIn',
            '#login-tab .modal-text': 'noAccount',
            '#register-tab .modal-text': 'hasAccount'
        };
        
        for (const selector in elementsToTranslate) {
            const element = document.querySelector(selector);
            const key = elementsToTranslate[selector];
            
            if (element && translation[key]) {
                if (selector.includes('INPUT') && !selector.includes('button')) {
                    element.placeholder = translation[key];
                } else if (selector.includes('.modal-text')) {
                    // Gérer les textes avec des liens
                    const text = translation[key];
                    const linkText = selector.includes('#login-tab') ? translation['signUp'] : translation['signIn'];
                    
                    if (selector.includes('#login-tab')) {
                        element.innerHTML = `${text} <a href="#" class="switch-tab" data-tab="register">${linkText}</a>`;
                    } else {
                        element.innerHTML = `${text} <a href="#" class="switch-tab" data-tab="login">${linkText}</a>`;
                    }
                    
                    // Réattacher les événements
                    const link = element.querySelector('.switch-tab');
                    if (link) {
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            const tabId = link.dataset.tab;
                            
                            const tabButtons = document.querySelectorAll('.tab-btn');
                            tabButtons.forEach(btn => btn.classList.remove('active'));
                            document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
                            
                            document.querySelectorAll('.tab-content').forEach(content => {
                                content.classList.remove('active');
                            });
                            
                            document.getElementById(`${tabId}-tab`).classList.add('active');
                        });
                    }
                } else {
                    element.textContent = translation[key];
                }
            }
        }
    }
    
    // Exposer la fonction globalement
    window.setLanguage = setLanguage;
}
