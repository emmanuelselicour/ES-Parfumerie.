import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-600 text-white">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">ES Parfumerie</h1>
        <nav className="flex gap-4">
          <Link to="/products" className="hover:underline">{t("products")}</Link>
          <Link to="/about" className="hover:underline">{t("about")}</Link>
          <Link to="/contact" className="hover:underline">{t("contact")}</Link>
        </nav>
      </header>

      <main className="p-6">
        <section className="mt-10">
          <h2 className="text-5xl font-bold">Bienvenue à ES Parfumerie</h2>
          <p className="mt-4 text-lg">
            Les meilleurs parfums, livraison rapide, paiement sécurisé.
          </p>
          <Link to="/products" className="mt-8 inline-block px-8 py-3 bg-white text-purple-900 font-bold rounded-full">
            {t("products")}
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
