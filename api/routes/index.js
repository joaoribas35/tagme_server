import UserRouter from "./user.route";
import RecipeRoute from "./recipe.route";

export default (app) => {
  const userRouter = UserRouter();
  const recipeRouter = RecipeRoute();

  app.use("/api", userRouter);
  app.use("/api", recipeRouter);
};
