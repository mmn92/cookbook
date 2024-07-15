import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { RecipesService } from "../server/Recipes";
import { Nullable } from "../types/general";
import { Recipe } from "../domain/Core";
import { assertType } from "../utils/Types";

type RecipeDetails = Nullable<Recipe>;

async function loader({ params }: LoaderFunctionArgs) {
  if (!params.slug) return null;

  const recipe = RecipesService.find(params.slug);
  return recipe;
}

function validateRecipeDetails(unsafeData: unknown) {
  return (
    unsafeData != null &&
    typeof unsafeData === "object" &&
    "title" in unsafeData &&
    "slug" in unsafeData
  );
}

export function RecipeDetails() {
  const loaderData = useLoaderData();

  if (!assertType<Recipe>(loaderData, validateRecipeDetails))
    return (
      <div className="container">
        <h2>No recipe found with this slug</h2>
        <Link to="/recipes">Go back to recipes</Link>
      </div>
    );

  return (
    <div className="container">
      <h2>Recipe Details</h2>
      <Link to="/recipes">Back to recipes</Link>
      <h3>Title: {loaderData.title}</h3>
      <h3>Description:</h3>
      <p>
        {loaderData.description
          ? loaderData.description
          : "No description provided"}
      </p>
    </div>
  );
}

RecipeDetails.loader = loader;
