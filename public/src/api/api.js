import axios from "axios";

const api = axios.create({
  baseURL: "https://es-parfumerie-backend.onrender.com",
});

export default api;
