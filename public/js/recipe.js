

// Example function to get URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const recipe = {};
    for (const [key, value] of params.entries()) {
        recipe[key] = value;
    }
    return recipe;
}

function displayRecipeData(){

    //TOP SECTION
    document.getElementById("recipe-name").textContent = recipeData.label;
    document.getElementById("recipe-image").src = recipeData.image;
    document.getElementById("serving-number").textContent = (`Serves: ${recipeData.yield}`);

    //INGREDIENTS

    // Split the string based on commas that are not followed by a space
    let parts = recipeData.ingredientLines.split(/,(?!\s)/);
    let ingredientsArray = [];
    let currentIngredient = "";

// Process each part to handle commas followed by a space
    parts.forEach(part => {
        part = part.trim(); // Remove any extra whitespace

        if (currentIngredient) {
            if (part.length > 0 && !part.startsWith(" ")) {
                ingredientsArray.push(currentIngredient.trim());
                currentIngredient = part;
            } else {
                currentIngredient += ", " + part;
            }
        } else {
            currentIngredient = part;
        }
    });


    if (currentIngredient) {
        ingredientsArray.push(currentIngredient.trim());
    }

        const ingredientsList = document.getElementById('ingredients-list');

        ingredientsArray.forEach(ingredient => {
            const newIngredient = document.createElement("li");
            newIngredient.textContent = ingredient;
            ingredientsList.appendChild(newIngredient);
    });
}

// Fetch and use recipe data
const recipeData = getQueryParams();
displayRecipeData();

