import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      products: "Products",
      contact: "Contact",
      about: "About",
      profile: "Profile",
      settings: "Settings",
      login: "Login",
      register: "Register",
      cart: "Cart",
      checkout: "Checkout"
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      products: "Produits",
      contact: "Contact",
      about: "À propos",
      profile: "Profil",
      settings: "Paramètres",
      login: "Connexion",
      register: "Inscription",
      cart: "Panier",
      checkout: "Paiement"
    }
  },
  es: {
    translation: {
      home: "Inicio",
      products: "Productos",
      contact: "Contacto",
      about: "Acerca",
      profile: "Perfil",
      settings: "Configuración",
      login: "Iniciar sesión",
      register: "Registrarse",
      cart: "Carrito",
      checkout: "Pagar"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false }
});

export default i18n;
