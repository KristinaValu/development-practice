interface Recipe {
  name: string;
  ingredients: string[];
}
const recipesArray: Recipe[] = [
  {
    name: "Cheesy Southwestern Twice-Baked Potatoes",
    ingredients: [
      "potatoes",
      "ground beef",
      "yellow onion",
      "1 red bell pepper",
      "1 cup frozen corn",
    ],
  },
  {
    name: "Better Pancakes",
    ingredients: [
      "Flour",
      "Baking powder",
      "sugar",
      "Salt",
      "Milk",
      "Egg",
      "Butter",
      "Vanilla sugar",
    ],
  },
  {
    name: "Pancakes",
    ingredients: ["Flour", "Baking powder", "sugar", "Salt", "Milk", "egg"],
  },
];

function longRecipe(recipesArray: Recipe[]): Recipe {
  const receptas = recipesArray.reduce((prev, current) => {
    return current.ingredients.length < prev.ingredients.length
      ? prev
      : current;
  });
  return receptas;
}
console.log(longRecipe(recipesArray));
