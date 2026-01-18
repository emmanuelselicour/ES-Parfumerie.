import React, { useEffect, useState } from "react";

function Settings() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark") === "true";
    setDark(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark", next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 px-6">
      <h1 className="text-4xl font-bold">Paramètres</h1>

      <div className="mt-6">
        <button onClick={toggleDark} className="px-6 py-3 bg-purple-600 rounded-full">
          {dark ? "Désactiver Dark Mode" : "Activer Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Settings;
