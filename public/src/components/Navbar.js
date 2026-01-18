import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-lg fixed top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-white">ES Parfumerie</Link>

      <div className="flex gap-6 items-center">
        <Link to="/products" className="text-white hover:text-gray-200">{t("products")}</Link>
        <Link to="/about" className="text-white hover:text-gray-200">{t("about")}</Link>
        <Link to="/contact" className="text-white hover:text-gray-200">{t("contact")}</Link>

        <LanguageSwitcher />

        {user ? (
          <>
            <Link to="/profile" className="text-white hover:text-gray-200">{t("profile")}</Link>
            <button onClick={logout} className="text-white hover:text-gray-200">{t("logout")}</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-gray-200">{t("login")}</Link>
            <Link to="/register" className="text-white hover:text-gray-200">{t("register")}</Link>
          </>
        )}

        <Link to="/cart" className="relative text-white hover:text-gray-200">
          {t("cart")}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 rounded-full px-2 text-xs">{cart.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
