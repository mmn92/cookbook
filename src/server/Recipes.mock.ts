import { Recipe } from "../domain/Core";

export const MockRecipe: Recipe = {
  slug: "baileys-cake",
  title: "Baileys Cake",
};
export const MockRecipeWithDescription: Recipe = {
  slug: "one-pot-greek-chicken-and-orzo",
  title: "One Pot Greek Chicken and Orzo",
  description:
    "Tender, juicy chicken and the creamiest orzo ever (that cooks right in the pan) topped with tomatoes + feta!",
};
export const MockRecipe3: Recipe = {
  slug: "banana-bread",
  title: "Banana bread",
  description:
    "A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen. It's great for using up overripe bananas, too.",
};
export const MockRecipesList: Array<Recipe> = [
  MockRecipe,
  MockRecipeWithDescription,
  MockRecipe3,
];
