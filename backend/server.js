/*
********************************************************
           DEPENDENCIES
********************************************************
*/

const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

/*
********************************************************
            MIDDLEWARE
********************************************************
*/

app.use(express.json())





/*
********************************************************
           ERROR
********************************************************
*/
mongoose.connection.on('error', error => { console.log(error.message + 'Remember to run mongo or something')})
mongoose.connection.on('disconnected', ()=> console.log('we are disconnected'))
mongoose.connect('mongodb://localhost:27017/recipes', {useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('connected to mongoose')
})







/*
********************************************************
          CONTROLLERS
********************************************************
*/
const recipesController = require('./controllers/recipes.js')
app.use('/recipes', recipesController)





/*
********************************************************
           Listen
********************************************************
*/
app.listen(PORT, () => {
  console.log('server is listening to ', PORT);
})
