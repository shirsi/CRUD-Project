const mongoose = require('mongoose')

const recipesSchema = mongoose.Schema({
  name: {type: String , require: true},
  ingredients: String,
  directions: String,
  image: String,
  serving: String,
  likes: Boolean,
})



module.exports = mongoose.model('Recipes', recipesSchema)
