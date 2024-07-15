import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <h2>CookBook</h2>
      <p>Site com coisas aqui</p>
      <Link to="recipes">Go to Recipes</Link>
    </div>
  );
}
