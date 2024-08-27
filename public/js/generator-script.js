// Define document elements
    const ingredientInput = document.querySelector("#ingredients-input");
    const addIngredientBtn = document.getElementById("add-ingredients-button");
    const ingredientBox = document.getElementById("ingredients-box");
    const generateRecipesBtn = document.getElementById("generate-button")
    const recipesContainer = document.getElementById("recipes-container")

// Define variables

let userIngredients = [];



// On Add Ingredient Btn Click
addIngredientBtn.addEventListener("click", () => {

    if(ingredientInput.value.trim() != "")
    {
        const newIngredient = document.querySelector('.ingredient').cloneNode(true);
        // Make the cloned element visible
        newIngredient.style.display = 'flex';
    
        // Set the text of the h3 element to the new ingredient name
        newIngredient.querySelector('h3').textContent = ingredientInput.value.trim();

        // Append the new ingredient to the ingredients box
        ingredientBox.appendChild(newIngredient);

        // Handle Input Field and Add Ingredient To backend
        userIngredients.push(ingredientInput.value.trim());
        console.log("Added to array")
        ingredientInput.value = '';

        newIngredient.querySelector('button').addEventListener('click', () => {
            ingredientBox.removeChild(newIngredient);
        
            // Remove the ingredient from the userIngredients array
            const ingredientText = newIngredient.querySelector('h3').textContent;
            userIngredients = userIngredients.filter(ingredient => ingredient !== ingredientText);
                
        }); 


    }

});


// Function to send ingredients to the back-end
function sendIngredientsToBackend() {
    fetch('/api/ingredients', {  // Backend end-point
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients: userIngredients })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        displayRecipes(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


generateRecipesBtn.addEventListener("click", () =>{
    sendIngredientsToBackend(); // Run ingredients transfer to the backend for api usage
});

function displayRecipes(data) {
    const recipes = data.hits;
    recipes.forEach(recipeObject => {
        const recipe = recipeObject.recipe;

        // CLONE RECIPE ELEMENT
        const newRecipe = document.querySelector('.recipe-box').cloneNode(true);
        // Set to visible
        newRecipe.style.display = 'flex';

        // Set the image to the recipe image
        newRecipe.querySelector('img').src = recipe.image;

        newRecipe.querySelector('h3').textContent = recipe.label;

        // Append the new recipe to the recipes box
        recipesContainer.appendChild(newRecipe);

        newRecipe.querySelector('button').addEventListener("click", () => {
            const params = new URLSearchParams(recipe).toString();
            window.location.href = `recipe.html?${params}`;
        });
    


    });
}

