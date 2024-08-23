// Define document elements
    const ingredientInput = document.querySelector("#ingredients-input");
    const addIngredientBtn = document.getElementById("add-ingredients-button");
    const ingredientBox = document.getElementById("ingredients-box");


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
        ingredientInput.value = '';

        newIngredient.querySelector('button').addEventListener('click', () => {
        ingredientBox.removeChild(newIngredient);
    }); 
    }


});



