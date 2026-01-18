import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <h1 className="text-4xl font-bold">Panier</h1>

      {cart.length === 0 ? (
        <p className="mt-6">Votre panier est vide. <Link to="/products" className="text-purple-400">Voir les produits</Link></p>
      ) : (
        <div className="mt-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white/10 p-4 rounded-2xl mb-4">
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.price} Gds x {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-500 rounded-full">Supprimer</button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold">Total: {total} Gds</span>
            <Link to="/checkout" className="px-6 py-3 bg-purple-600 rounded-full">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
