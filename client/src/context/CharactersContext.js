import { createContext, useReducer } from 'react'

export const CharactersContext = createContext()

export const characterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { 
        characters: action.payload 
      }
      case 'SET_CHARACTER':
        return { 
          character: action.payload 
        }
    case 'CREATE_CHARACTER':
      return { 
        characters: [action.payload] 
      }
    case 'DELETE_CHARACTER':
      return { 
        characters: state.characters.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const CharactersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, { 
    characters: null
  })
  
  return (
    <CharactersContext.Provider value={{ ...state, dispatch }}>
      { children }
    </CharactersContext.Provider>
  )
}