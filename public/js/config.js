// Configuration de l'application
const CONFIG = {
    API_BASE_URL: 'https://es-parfumerie-backend.onrender.com',
    APP_NAME: 'ES Parfumerie',
    DEFAULT_LANGUAGE: 'fr',
    CART_EXPIRY_DAYS: 30,
    THEME: {
        light: {
            primary: '#8a6d3b',
            secondary: '#d4b483',
            background: '#f8f5f0',
            text: '#333333'
        },
        dark: {
            primary: '#c19a6b',
            secondary: '#8a6d3b',
            background: '#1a1a1a',
            text: '#f0f0f0'
        }
    }
};

// Exposer la configuration globalement
window.CONFIG = CONFIG;
