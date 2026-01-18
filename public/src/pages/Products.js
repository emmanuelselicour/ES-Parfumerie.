import React, { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await api.get("/products");
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <h1 className="text-4xl font-bold">Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
