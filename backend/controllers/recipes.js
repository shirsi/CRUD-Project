const express = require('express')
const recipes = express.Router()
const Recipes = require('../models/recipes.js')
//==============presentational route===========//
recipes.get('/', (req, res) => {
  Recipes.find({}, (err, foundRecipes) => {
    if(err){
      res.status(400).json({error: err.message})
    }
  res.status(200).json(foundRecipes)
})
})

//==============functional route===============//
//create route
recipes.post('/', (req, res) => {
  Recipes.create(req.body, (err, createdRecipes) => {
    if(err){
      res.status(400).json({error: err.message})
    }
    res.status(200).json(createdRecipes)
  })
})
//delete route
recipes.delete('/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if(err){
      res.status(400).json({error: err.message})
    }
    res.status(200).json(deletedHoliday)
  })
} )
//update Route
recipes.put('/:id', (req, res) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe) => {
    if(err){
      res.status(400).json({error: err.message})
    }
    res.status(200).json(updatedRecipe)
  })
})
module.exports = recipes
