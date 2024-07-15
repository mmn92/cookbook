import { Recipe } from "../domain/Core";
import { MockRecipe, MockRecipesList } from "./Recipes.mock";

export const RecipesService = {
  getAll(): Array<Recipe> {
    return MockRecipesList;
  },

  get(): Recipe {
    return MockRecipe;
  },

  find(slug: string): Recipe | null {
    return MockRecipesList.filter((r) => r.slug === slug)[0] || null;
  },

  create(newRecipe: Recipe) {
    if (MockRecipesList.find((r) => r.slug === newRecipe.slug) != null)
      return { error: "Title must be unique" };
    MockRecipesList.push(newRecipe);

    return newRecipe;
  },
};
