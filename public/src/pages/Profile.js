import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">Connectez-vous</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <h1 className="text-4xl font-bold">Profil</h1>
      <p className="mt-4">Nom: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
