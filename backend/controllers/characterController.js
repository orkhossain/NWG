const Character = require('../models/characterModel')
const mongoose = require('mongoose')

// get all Characters
const getCharacters = async (req, res) => {
  const characters = await Character.find({}).sort({createdAt: -1})

  res.status(200).json(characters)
}

// get a single Character
const getCharacter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Character'})
  }

  const character = await Character.findById(id)

  if (!character) {
    return res.status(404).json({error: 'No such Character'})
  }

  res.status(200).json(character)
}

// create a new Character
const createCharacter = async (req, res) => {

  const {name, surname,gender,age, weight, height, description} = req.body

  let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }
  if (!surname) {
    emptyFields.push('surname')
  }
  if (!gender) {
    emptyFields.push('gender')
  }
  if (!age) {
    emptyFields.push('age')
  }
  if (!weight) {
    emptyFields.push('weight')
  }
  if (!height) {
    emptyFields.push('height')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const character = await Character.create({ name, surname, gender, age, weight, height,description })
    res.status(200).json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Character
const deleteCharacter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Character'})
  }

  const character = await Character.findOneAndDelete({_id: id})

  if(!character) {
    return res.status(400).json({error: 'No such Character'})
  }

  res.status(200).json(character)
}



module.exports = {
  getCharacters,
  getCharacter,
  createCharacter,
  deleteCharacter,
}