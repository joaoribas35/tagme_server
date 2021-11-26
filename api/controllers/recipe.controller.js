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
  recipe.image = req.files["image"][0].path;
  recipe.thumbnail = req.files["thumbnail"][0].path;

  try {
    await recipe.save();
    res.status(201).send({ recipe });
  } catch (error) {
    console.log("create recipe error", error);
    res.status(400).send(error);
  }
};

export const list = async (req, res) => {
  const recipes = await Recipe.find({})
    .select("title description thumbnail")
    .exec();
  return res.status(200).send(recipes);
};
