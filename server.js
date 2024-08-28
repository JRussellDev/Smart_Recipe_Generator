import express from 'express';
import fetch from 'node-fetch'; // Import fetch from node-fetch

const app = express();

const port = 3000;

//EDAMAM API SETUP
const appId = '1e018da5';
const appKey = 'ae474113f7f4229b4f9f6fc955f92c15';



// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Define the endpoint
app.post('/api/ingredients', async (req, res) => {
    const myIngredients = req.body.ingredients;

    // Validate and process the data
    if (!Array.isArray(myIngredients)) {
        return res.status(400).json({ error: 'Invalid ingredients data' });
    }

    //const ingredientsSearch = ingredients.join(','); // Replace with your ingredients

    const ingredientsSearch = myIngredients.join(","); // Replace with your ingredients
    const EDAMAMurl = `https://api.edamam.com/search?q=${ingredientsSearch}&app_id=${appId}&app_key=${appKey}`;

    try {
        // API CALL
        const response = await fetch(EDAMAMurl);
        const data = await response.json();

        // Log data for debugging
        console.log(data);

        // Send recipe data back to the frontend
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }


});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});