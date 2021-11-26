export const ingredientsToArray = (ingredients) => {
  let array = [];
  let split = ingredients.split(",");
  for (let i of split) {
    array.push(i);
  }
  return array;
};

export const directionsToArray = (ingredients) => {
  let array = [];
  let split = ingredients.split("&");
  for (let i of split) {
    array.push(i);
  }
  return array;
};
