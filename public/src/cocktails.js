function getRecipes() {
  // Retrieve checked values
  const checkboxes = document.getElementsByName("spirit");
  const checkedValues = Array.from(checkboxes)
    .filter((radio) => radio.checked)
    .map((radio) => radio.value);

  // Loop through JSON file and display recipe for each selected spirit
  const recipes = {
    
    "gin": {
      "name": "Classic Gin and Tonic",
      "ingredients": [
        "1 1/2 oz gin",
        "4 oz tonic water",
        "1 lime wedge",
        "Ice"
      ],
      "instructions": [
        "Fill a highball glass with ice.",
        "Pour the gin over the ice.",
        "Add the tonic water and stir gently.",
        "Squeeze the lime wedge into the drink and drop it in.",
        "Enjoy!"
      ]
    },
    "tequila": {
      "name": "Margarita",
      "ingredients": [
        "1 1/2 oz tequila",
        "1 oz lime juice",
        "1/2 oz triple sec",
        "Salt for rim (optional)",
        "Ice"
      ],
      "instructions": [
        "Rim a glass with salt (optional).",
        "Fill a cocktail shaker with ice.",
        "Add the tequila, lime juice, and triple sec.",
        "Shake well.",
        "Strain into the prepared glass over ice.",
        "Enjoy!"
      ]
    },
    "rum": {
      "name": "Daiquiri",
      "ingredients": [
        "2 oz rum",
        "3/4 oz lime juice",
        "1/2 oz simple syrup",
        "Ice"
      ],
      "instructions": [
        "Fill a cocktail shaker with ice.",
        "Add the rum, lime juice, and simple syrup.",
        "Shake well.",
        "Strain into a chilled glass.",
        "Enjoy!"
      ]
    },
    "whiskey": {
      "name": "Whiskey Sour",
      "ingredients": [
        "2 oz whiskey",
        "3/4 oz lemon juice",
        "1/2 oz simple syrup",
        "Ice"
      ],
      "instructions": [
        "Fill a cocktail shaker with ice.",
        "Add the whiskey, lemon juice, and simple syrup.",
        "Shake well.",
        "Strain into a chilled glass.",
        "Enjoy!"
      ]
    },
    "vodka": {
      "name": "Cosmopolitan",
      "ingredients": [
        "1 1/2 oz vodka",
        "1 oz cranberry juice",
        "1/2 oz triple sec",
        "1/2 oz lime juice",
        "Ice"
      ],
      "instructions": [
        "Fill a cocktail shaker with ice.",
        "Add the vodka, cranberry juice, triple sec, and lime juice.",
        "Shake well.",
        "Strain into a chilled glass.",
        "Enjoy!"
      ]
    }};
  checkedValues.forEach((spirit) => {
    const recipe = recipes[spirit];
    console.log(`Recipe for ${recipe.name}:`);
    console.log(`- Ingredients: ${recipe.ingredients.join(", ")}`);
    console.log(`- Instructions: ${recipe.instructions}`);
  });

}
