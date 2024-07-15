import {
  ActionFunctionArgs,
  Link,
  redirect,
  Form,
  useActionData,
} from "react-router-dom";
import { Nullable } from "../types/general";
import { Recipe } from "../domain/Core";
import { RecipesService } from "../server/Recipes";
import { Ingredients } from "./NewRecipe/Ingredients";

function cleanInput(input: string) {
  return input.replace(/[\W]/g, "");
}

function formatSlug(title: string) {
  return title
    .toLowerCase()
    .split(" ")
    .map(cleanInput)
    .filter(Boolean)
    .join("-");
}

async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  console.log("formData:", formData);
  console.log('get("ingredient"):', formData.getAll("ingredient"));

  const title = formData.get("title") as Nullable<string>;
  const description = formData.get("description") as Nullable<string>;
  const ingredients =
    (formData.getAll("ingredient") as Nullable<Array<string>>) || [];

  if (!title) return { error: "title cannot be empty" };

  const newRecipe: Recipe = { title, slug: formatSlug(title) };
  if (description) newRecipe.description = description;

  const created = RecipesService.create(newRecipe);

  if ("error" in created) return { error: created.error };
  return redirect(`/recipes/${created.slug}`);
}

export function NewRecipe() {
  const actionResponse = useActionData() as Nullable<{ error: string }>;

  return (
    <div className="container">
      <h2>Create a new recipe</h2>
      <Form method="POST">
        {actionResponse && (
          <span className="form-error">{actionResponse.error}</span>
        )}
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" />
        <div>
          <Ingredients />
        </div>
        <div>
          <span>Instructions</span>
          <span>Textareas (multiple? title for each?)</span>
        </div>
        <button type="submit">Create</button>
      </Form>
      <Link to="/recipes">Cancel</Link>
    </div>
  );
}

NewRecipe.action = action;
