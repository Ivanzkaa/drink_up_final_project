// Get the select element
const select = document.getElementById("spirit-select");
document.querySelector('.btn').addEventListener('click', 'cocktail-recipes.json');

// Add an event listener for when the select value changes
select.addEventListener("change", function() {
  // Get the selected spirit
  const spirit = select.value;

  // Load the JSON file
  fetch("cocktail-recipes.json")
    .then(response => response.json())
    .then(data => {
      // Get the cocktail recipe for the selected spirit
      const recipe = data[spirit];

      // Update the HTML with the recipe name, ingredients, and instructions
      const recipeName = document.getElementById("recipe-name");
      recipeName.innerText = recipe.name;

      const ingredientsList = document.getElementById("ingredients-list");
      ingredientsList.innerHTML = "";
      recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
      });

      const instructionsList = document.getElementById("instructions-list");
      instructionsList.innerHTML = "";
      recipe.instructions.forEach(instruction => {
        const li = document.createElement("li");
        li.innerText = instruction;
        instructionsList.appendChild(li);
      });
    });
});
