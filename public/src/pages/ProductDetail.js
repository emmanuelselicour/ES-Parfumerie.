import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image_url} alt={product.name} className="w-full h-96 object-cover rounded-2xl" />
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-200">{product.description}</p>
          <div className="mt-6 flex items-center gap-6">
            <span className="text-3xl font-bold">{product.price} Gds</span>
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 bg-purple-600 rounded-full"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
