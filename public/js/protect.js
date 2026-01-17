const token = localStorage.getItem("token");

if (!token) {
  alert("Veuillez vous connecter");
  window.location.href = "login.html";
}
