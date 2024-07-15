import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.page";
import { Home } from "./components/Home.page";
import { Recipes } from "./components/Recipes.page";
import { RecipeDetails } from "./components/RecipeDetail.page";
import { NewRecipe } from "./components/New.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        loader: Recipes.loader,
        element: <Recipes />,
      },
      {
        path: "recipes/new",
        action: NewRecipe.action,
        element: <NewRecipe />,
      },
      {
        path: "recipes/:slug",
        loader: RecipeDetails.loader,
        element: <RecipeDetails />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
