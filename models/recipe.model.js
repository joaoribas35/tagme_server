import moongose from "mongoose";

const { Schema } = moongose;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: "title is required",
    },
    description: {
      type: String,
      required: "description is required",
    },
    prepTime: {
      type: Number,
      required: "preparation time is required",
    },
    ingredients: {
      type: Array,
      required: "ingredients is required",
    },
    directions: {
      type: Array,
      required: "directions is required",
    },
    image: {
      type: String,
      required: "image is required",
    },
    thumbnail: {
      type: String,
      required: "thumbnail is required",
    },
  },
  { timestamps: true }
);

export default moongose.model("Recipe", recipeSchema);
