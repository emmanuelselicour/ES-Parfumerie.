const API_URL = "https://es-parfumerie-backend.onrender.com/api/auth";

/* REGISTER */
async function register() {
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Tous les champs sont obligatoires");
      return;
    }

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    console.log("REGISTER:", data);

    if (!res.ok) {
      alert(data.message || "Erreur lors de la création");
      return;
    }

    alert("Compte créé avec succès");
    window.location.href = "login.html";

  } catch (err) {
    console.error(err);
    alert("Erreur réseau");
  }
}

/* LOGIN */
async function login() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Email et mot de passe requis");
      return;
    }

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log("LOGIN:", data);

    if (!res.ok) {
      alert(data.message || "Connexion échouée");
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Connexion réussie");
    window.location.href = "profile.html";

  } catch (err) {
    console.error(err);
    alert("Erreur réseau");
  }
}
