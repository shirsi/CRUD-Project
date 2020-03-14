const mongoose = require('mongoose')

const recipesSchema = mongoose.Schema({
  name: {type: String , require: true},
  ingredients: [ {ingredient: String , amount:Number}],
  directions: String,
  image: String,
  serving: String,
  likes: Boolean,
})



module.exports = mongoose.model('Recipes', recipesSchema)
