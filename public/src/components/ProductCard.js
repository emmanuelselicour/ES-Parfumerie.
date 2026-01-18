import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition">
      <img src={product.image_url} alt={product.name} className="w-full h-56 object-cover rounded-xl" />
      <h3 className="text-xl font-bold mt-4">{product.name}</h3>
      <p className="mt-2 text-gray-200">{product.description.substring(0, 100)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">{product.price} Gds</span>
        <Link to={`/product/${product.id}`} className="px-4 py-2 bg-purple-600 rounded-full">
          Voir
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
