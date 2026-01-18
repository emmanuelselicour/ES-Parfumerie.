import React, { useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    login(res.data);
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Connexion</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded mb-4 bg-gray-800" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Mot de passe" className="w-full p-3 rounded mb-4 bg-gray-800" />
        <button type="submit" className="w-full py-3 bg-purple-600 rounded-full">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
