const mongoose = require('mongoose');

const dns = require("dns")
const { get } = require('http');
const Recipe = require('./Recipe');
const { create } = require('domain');

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongooseLab')
        console.log('Connected to database!')
    }
    catch (err) {
        console.log('Connection failed.')
    }
}
connectToDB()

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

/*async function updateRecipe(recipeId, newRecipeData)
{
    try{
       const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId,newRecipeData,{new:true});
       console.log(updatedRecipe)
    }
    catch(err){
        console.log('Recipe dose not updated for some reason')
    }
}*/
