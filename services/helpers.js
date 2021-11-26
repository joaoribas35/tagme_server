export const ingredientsToArray = (ingredients) => {
  let array = [];
  let split = ingredients.split(",");
  for (let i of split) {
    array.push(i);
  }
  return array;
};

export const directionsToArray = (directions) => {
  let array = [];
  let split = directions.split("&");
  for (let i of split) {
    array.push(i);
  }
  return array;
};
