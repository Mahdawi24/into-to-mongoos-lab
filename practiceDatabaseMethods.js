const mongoose = require('mongoose');
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe} = require('./recipeUtils')
const dns = require("dns")
const { get } = require('http');
const Recipe = require('./Recipe');
const { create } = require('domain');

const dotenv = require('dotenv').config();

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

/*createRecipe({
            name:'FriedTomato',
            instructions: ['put oil','turn on the fire','burn it'],
            prepTime: 1,
            difficulty:'Hard'
        })*/
getAllRecipes()
getRecipeById('6a984eb54cbaa76a33ae2aaf')
updateRecipe('6a984eb54cbaa76a33ae2aaf',newRecipe)
deleteRecipe('6a984eb54cbaa76a33ae2aaf')     