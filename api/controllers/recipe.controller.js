import Recipe from "../../models/recipe.model";
import { ingredientsToArray, directionsToArray } from "../../services/helpers";

export const create = async (req, res) => {
  const recipe = new Recipe();
  const { title, description, prepTime, ingredients, directions } = req.body;

  recipe.title = title;
  recipe.description = description;
  recipe.prepTime = prepTime;
  recipe.ingredients = ingredientsToArray(ingredients);
  recipe.directions = directionsToArray(directions);

  if (req.file) recipe.image = req.file.path;

  try {
    await recipe.save();
    res.status(201).send({ recipe });
  } catch (error) {
    console.log("create recipe error", error);
    res.status(400).send(error);
  }
};
