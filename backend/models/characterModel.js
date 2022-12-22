const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  description: {
    type: String
  },
}, { timestamps: true })

module.exports = mongoose.model('Character', characterSchema)