const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.getElementById("ingredients");

const ingredientsList = ingredients.map((element) => {
  //1. Creat new element li
  const liEl = document.createElement("li");
  //2. add name
  liEl.textContent = element;
  //3. add name class
  liEl.classList.add("item");

  return liEl;
});
//4. add li to the list
ingredientsEl.append(...ingredientsList);
