const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the endpoint
app.post('/api/ingredients', (req, res) => {
    const ingredients = req.body.ingredients;

    // Validate and process the data
    if (!Array.isArray(ingredients)) {
        return res.status(400).json({ error: 'Invalid ingredients data' });
    }

    // Process the ingredients (e.g., query a database or an external API)
    
    res.json({ message: 'Ingredients received', ingredients });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});