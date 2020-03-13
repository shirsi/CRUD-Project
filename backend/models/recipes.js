const mongoose = require('mongoose')

const recipesSchema = mongoose.Schema({
  name: {type: String , require: true},
  ingredients: [ {ingredient: String , amount:Number}],
  directions: String,
  serving: String,
  likes:true
})



module.exports = mongoose.model('Recipes', recipesSchema)
