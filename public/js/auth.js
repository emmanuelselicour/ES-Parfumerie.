const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

const apiUrl = "https://YOUR_VERCEL_URL/api";

if(registerBtn){
  registerBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
    if(res.status === 201) window.location.href = "login.html";
  });
}

if(loginBtn){
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if(res.status === 200){
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "profile.html";
    } else {
      alert(data.message);
    }
  });
}
