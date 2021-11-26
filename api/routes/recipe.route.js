import { Router } from "express";
import { create, list, retrieve } from "../controllers/recipe.controller";
import { imageUpload } from "../middlewares/uploads";

const router = Router();

export default () => {
  router.post("/recipes/create", imageUpload, create);
  router.get("/recipes", imageUpload, list);
  router.get("/recipes/:id", retrieve);

  return router;
};
