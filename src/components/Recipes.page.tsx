import { Link, useLoaderData } from "react-router-dom";
import { RecipesService } from "../server/Recipes";
import { Recipe } from "../domain/Core";
import { assertType } from "../utils/Types";

async function loader() {
  const recipes = RecipesService.getAll();

  return { recipes };
}

function validateRecipes(unsafeData: unknown) {
  return (
    unsafeData != null &&
    typeof unsafeData === "object" &&
    "recipes" in unsafeData &&
    Array.isArray(unsafeData.recipes)
  );
}

export function Recipes() {
  const loaderData = useLoaderData();

  if (!assertType<{ recipes: Array<Recipe> }>(loaderData, validateRecipes))
    return null;

  const { recipes } = loaderData;

  return (
    <div className="container">
      <h2>Recipes list here</h2>
      {recipes.length > 0 && (
        <ul>
          {recipes.map((r) => (
            <li key={r.slug}>
              <Link to={r.slug}>{r.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="new">Add a new recipe</Link>
    </div>
  );
}

Recipes.loader = loader;
