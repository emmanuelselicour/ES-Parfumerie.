import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>ES Parfumerie</h1>
      <p>Bienvenue sur ES Parfumerie</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}
