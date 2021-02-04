const database = require('../data/dbconfig');


function getRecipes(){
    return database('recipes')
}

function getIngredients(){
    return database('ingredients')
}

function getSteps(){
    return database('steps')
}

function getRI(recipe_id) {
    return database('recipe_ingredients')
    .select("*")
    .where({ recipe_id })
}

function getRecipeSteps(recipe_id) {
    return database('recipe_steps as rs')
        .join('steps as s', 's.id', 'rs.step_id')
        .join('recipes as r', 'r.id', 'rs.recipe_id')
        .where({ recipe_id })

}
module.exports = {
    getRecipes,
    getIngredients,
    getSteps,
    getRI,
    getRecipeSteps
}
