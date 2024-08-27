

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
    const ingredientsList = document.getElementById("ingredients-list");
    ingredientsList.innerHTML = ''; // Clear existing ingredients

    recipeData.ingredients.forEach(ingredientObj => {
        const newIngredient = document.createElement("li");
        // You can display the full text description of the ingredient
        newIngredient.textContent = `${ingredientObj.quantity || ''} ${ingredientObj.measure || ''} ${ingredientObj.food}`;
        ingredientsList.appendChild(newIngredient);
    });

    //INSTRUCTIONS
    const instructionsList = document.getElementById("instructions-list");
    instructionsList.innerHTML = ''; // Clear existing ingredients

    recipeData.instructions.forEach(instruction => {
        const newInstruction = document.createElement("li");
        // You can display the full text description of the ingredient
        newInstruction.textContent = instruction;
        instructionsList.appendChild(newInstruction);
    });
}

// Fetch and use recipe data
const recipeData = getQueryParams();
displayRecipeData();

