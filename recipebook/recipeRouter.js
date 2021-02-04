const express = require('express');
const recipes = require('./recipeModel')
const router = express.Router();


//-----------------------------------------------------------------------------
// GETS ALL RECIPES
//-----------------------------------------------------------------------------
router.get('/recipes', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({
                Error: "Could not retrieve your recipes."
            })
        })
    })
