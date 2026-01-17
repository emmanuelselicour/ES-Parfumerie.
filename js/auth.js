const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

if(registerBtn){
  registerBtn.addEventListener("click", ()=>{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({name, email, password});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Compte créé avec succès !");
    window.location.href = "login.html";
  });
}

if(loginBtn){
  loginBtn.addEventListener("click", ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if(user){
      localStorage.setItem("user", JSON.stringify(user));
      alert("Connexion réussie !");
      window.location.href = "profile.html";
    } else {
      alert("Email ou mot de passe incorrect");
    }
  });
}
