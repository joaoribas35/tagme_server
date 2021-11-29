import { Router } from "express";
import { create, list, retrieve } from "../controllers/recipe.controller";
import { imageUpload } from "../middlewares/uploads";
import { isAuth } from "../middlewares/auth.validator";

const router = Router();

export default () => {
  router.post("/recipes/create", imageUpload, create);
  router.get("/recipes", isAuth, list);
  router.get("/recipes/:id", isAuth, retrieve);

  return router;
};
