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
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.products': 'Produits',
        'nav.contact': 'Contact',
        'nav.profile': 'Profil',
        'nav.settings': 'Paramètres',
        'nav.login': 'Connexion',
        'nav.signup': 'Inscription',
        
        // Hero
        'hero.title': 'L\'art de la fragrance',
        'hero.subtitle': 'Découvrez notre collection exclusive de parfums pour homme et femme. Des senteurs uniques qui racontent votre histoire.',
        'hero.shop': 'Découvrir la collection',
        'hero.learn': 'En savoir plus',
        
        // About
        'about.title': 'À propos de ES Parfumerie',
        'about.text1': 'Depuis 2010, ES Parfumerie offre une sélection rigoureuse des plus belles fragrances du monde. Notre passion pour les parfums nous pousse à rechercher constamment l\'excellence et l\'authenticité.',
        'about.text2': 'Nous collaborons avec les meilleurs nez et maisons de parfum pour vous proposer des senteurs uniques, alliant tradition et innovation.',
        'about.feature1.title': 'Qualité Premium',
        'about.feature1.text': 'Sélection des meilleurs ingrédients',
        'about.feature2.title': 'Ingrédients Naturels',
        'about.feature2.text': 'Formules respectueuses de l\'environnement',
        'about.feature3.title': 'Livraison Rapide',
        'about.feature3.text': 'Expédition sous 48h en France',
        
        // Products
        'products.title': 'Nos Parfums',
        'products.subtitle': 'Découvrez notre collection exclusive. Actuellement, aucun produit n\'est disponible.',
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
        
        // Contact
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
        
        // Profile
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
        
        // Settings
        'settings.title': 'Paramètres',
        'settings.notifications': 'Notifications',
        'settings.notificationsDesc': 'Recevoir des emails promotionnels et des mises à jour',
        'settings.darkMode': 'Mode sombre',
        'settings.darkModeDesc': 'Activer/désactiver le thème sombre',
        'settings.language': 'Langue',
        'settings.languageDesc': 'Changer la langue du site',
        'settings.danger': 'Zone dangereuse',
        'settings.deleteAccount': 'Supprimer mon compte',
        
        // Login
        'login.title': 'Connexion',
        'login.email': 'Adresse email',
        'login.password': 'Mot de passe',
        'login.remember': 'Se souvenir de moi',
        'login.forgot': 'Mot de passe oublié?',
        'login.submit': 'Se connecter',
        'login.noAccount': 'Pas encore de compte?',
        'login.createAccount': 'Créer un compte',
        
        // Signup
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
        
        // Product management
        'product.addTitle': 'Ajouter un nouveau produit',
        'product.name': 'Nom du produit',
        'product.description': 'Description',
        'product.price': 'Prix (€)',
        'product.stock': 'Stock',
        'product.selectCategory': 'Sélectionner une catégorie',
        'product.image': 'Image URL',
        'product.features': 'Caractéristiques (une par ligne)',
        'product.add': 'Ajouter le produit',
        
        // Footer
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
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        'nav.profile': 'Profile',
        'nav.settings': 'Settings',
        'nav.login': 'Login',
        'nav.signup': 'Sign Up',
        
        // Hero
        'hero.title': 'The Art of Fragrance',
        'hero.subtitle': 'Discover our exclusive collection of perfumes for men and women. Unique scents that tell your story.',
        'hero.shop': 'Discover the collection',
        'hero.learn': 'Learn more',
        
        // About
        'about.title': 'About ES Parfumerie',
        'about.text1': 'Since 2010, ES Parfumerie has offered a rigorous selection of the world\'s finest fragrances. Our passion for perfumes drives us to constantly seek excellence and authenticity.',
        'about.text2': 'We collaborate with the best perfumers and perfume houses to offer you unique scents, combining tradition and innovation.',
        'about.feature1.title': 'Premium Quality',
        'about.feature1.text': 'Selection of the finest ingredients',
        'about.feature2.title': 'Natural Ingredients',
        'about.feature2.text': 'Environmentally friendly formulas',
        'about.feature3.title': 'Fast Delivery',
        'about.feature3.text': 'Shipping within 48h in France',
        
        // Products
        'products.title': 'Our Perfumes',
        'products.subtitle': 'Discover our exclusive collection. Currently, no products are available.',
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
        
        // Contact
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
        
        // Profile
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
        
        // Settings
        'settings.title': 'Settings',
        'settings.notifications': 'Notifications',
        'settings.notificationsDesc': 'Receive promotional emails and updates',
        'settings.darkMode': 'Dark mode',
        'settings.darkModeDesc': 'Enable/disable dark theme',
        'settings.language': 'Language',
        'settings.languageDesc': 'Change website language',
        'settings.danger': 'Danger zone',
        'settings.deleteAccount': 'Delete my account',
        
        // Login
        'login.title': 'Login',
        'login.email': 'Email address',
        'login.password': 'Password',
        'login.remember': 'Remember me',
        'login.forgot': 'Forgot password?',
        'login.submit': 'Login',
        'login.noAccount': 'Don\'t have an account?',
        'login.createAccount': 'Create account',
        
        // Signup
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
        
        // Product management
        'product.addTitle': 'Add a new product',
        'product.name': 'Product name',
        'product.description': 'Description',
        'product.price': 'Price (€)',
        'product.stock': 'Stock',
        'product.selectCategory': 'Select a category',
        'product.image': 'Image URL',
        'product.features': 'Features (one per line)',
        'product.add': 'Add product',
        
        // Footer
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
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.products': 'Productos',
        'nav.contact': 'Contacto',
        'nav.profile': 'Perfil',
        'nav.settings': 'Configuración',
        'nav.login': 'Iniciar sesión',
        'nav.signup': 'Registrarse',
        
        // Hero
        'hero.title': 'El arte de la fragancia',
        'hero.subtitle': 'Descubra nuestra exclusiva colección de perfumes para hombre y mujer. Aromas únicos que cuentan tu historia.',
        'hero.shop': 'Descubrir la colección',
        'hero.learn': 'Saber más',
        
        // About
        'about.title': 'Acerca de ES Parfumerie',
        'about.text1': 'Desde 2010, ES Parfumerie ofrece una selección rigurosa de las fragancias más finas del mundo. Nuestra pasión por los perfumes nos impulsa a buscar constantemente la excelencia y la autenticidad.',
        'about.text2': 'Colaboramos con los mejores perfumistas y casas de perfume para ofrecerle aromas únicos, combinando tradición e innovación.',
        'about.feature1.title': 'Calidad Premium',
        'about.feature1.text': 'Selección de los mejores ingredientes',
        'about.feature2.title': 'Ingredientes Naturales',
        'about.feature2.text': 'Fórmulas respetuosas con el medio ambiente',
        'about.feature3.title': 'Entrega Rápida',
        'about.feature3.text': 'Envío en 48h en Francia',
        
        // Products
        'products.title': 'Nuestros Perfumes',
        'products.subtitle': 'Descubra nuestra exclusiva colección. Actualmente, no hay productos disponibles.',
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
        
        // Contact
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
        
        // Profile
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
        
        // Settings
        'settings.title': 'Configuración',
        'settings.notifications': 'Notificaciones',
        'settings.notificationsDesc': 'Recibir correos promocionales y actualizaciones',
        '
