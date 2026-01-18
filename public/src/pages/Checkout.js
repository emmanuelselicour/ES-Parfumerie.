import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Checkout() {
  const { cart } = useContext(CartContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  async function handlePay() {
    // Création de commande sur backend
    const res = await api.post(
      "/orders/create",
      { items: cart, total },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const { approvalUrl } = res.data;
    window.location.href = approvalUrl;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <h1 className="text-4xl font-bold">Checkout</h1>
      <p className="mt-4">Total: {total} Gds</p>

      <button onClick={handlePay} className="mt-6 px-6 py-3 bg-purple-600 rounded-full">
        Payer avec PayPal
      </button>
    </div>
  );
}

export default Checkout;
