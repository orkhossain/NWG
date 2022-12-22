require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const characterRoutes = require('./routes/characters')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  next()
})

// routes
app.use('/api/characters', characterRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

  module.exports = app;
