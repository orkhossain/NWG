const express = require('express')
const {
  getCharacters, 
  getCharacter, 
  createCharacter, 
  deleteCharacter, 
  
} = require('../controllers/characterController')

const router = express.Router()

// GET all Character
router.get('/', getCharacters)

// GET a single Character
router.get('/:id', getCharacter)

// POST a new Character
router.post('/', createCharacter)

// DELETE a Character
router.delete('/:id', deleteCharacter)


module.exports = router