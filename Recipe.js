const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100
    },
    instructions:{
        type:[String]
    },
    prepTime:{
        type:Number,
        required:true,
        minLength:5,
        maxLength:500
    },
    difficulty:{
        type:String,
        enum:['Easy','Medium','Hard']
    }
},{timestamps:true})
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe

