import React, { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function fetchFeatured() {
      const res = await api.get("/products?featured=true");
      setFeatured(res.data);
    }
    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-600 text-white">
      <div className="pt-24 px-6">
        <h1 className="text-5xl font-bold">ES Parfumerie</h1>
        <p className="mt-4 text-lg">Les parfums les plus élégants, livraison rapide, paiement sécurisé.</p>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">Produits en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
