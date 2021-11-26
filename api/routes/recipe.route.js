import { Router } from "express";
import { create } from "../controllers/recipe.controller";
import { imageUpload } from "../middlewares/uploads";

const router = Router();

export default () => {
  router.post("/recipes/create", imageUpload.single("image"), create);

  return router;
};
