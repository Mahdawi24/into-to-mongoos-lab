const Recipe = require('Recipe');
async function createRecipe(newRecipe){
    try{
     const createdRecipe = await Recipe.create(newRecipe);
        console.log(createdRecipe)
    }
    catch(err){
        console.log("Failed to create recipe.")
    }
}
/*createRecipe(
    {
            name:'FriedTomato',
            instructions: ['put oil','turn on the fire','burn it'],
            prepTime: 1,
            difficulty:'Hard'
        }
);*/

async function getAllRecipes(){
    try{
        const allRecipes = await Recipe.find()
        for(let i=0;i<allRecipes.length;i++)
            console.log(`${allRecipes[i].name} is an ${allRecipes[i].difficulty} recipe and takes ${allRecipes[i].prepTime} minutes to prepare`)
    }
    catch(err){
        console.log('Error in returning all recipes')
    }
}
getAllRecipes()

async function getRecipeById(id){
    try{
       const foundRecipe = await Recipe.findById(id);
       console.log(foundRecipe)
    }
    catch(err){
        console.log('No recipe with this ID exists.')
    }
}
getRecipeById('6a984eb54cbaa76a33ae2aaf')

async function updateRecipe(recipeId, newRecipeData)
{
    try{
       const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId,newRecipeData,{new:true});
       console.log(updatedRecipe)
    }
    catch(err){
        console.log('Recipe dose not updated for some reason')
    }
}
const newRecipe = {
            name:'FriedTomatoooooo',
            instructions: ['put oil','turn on the fire','burn it'],
            prepTime: 1,
            difficulty:'Hard'
        }
updateRecipe('6a984eb54cbaa76a33ae2aaf',newRecipe)

async function deleteRecipe(recipeId)
{
    try{
       const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
       console.log("Recipe successfully deleted.")
    }
    catch(err){
        console.log('Recipe dose not deleted for some reason')
    }
}
deleteRecipe('6a984eb54cbaa76a33ae2aaf') 

module.exports = { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe};