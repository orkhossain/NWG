import { CharactersContext } from "../context/CharactersContext"
import { useContext } from "react"

export const useCharactersContext = () => {
  const context = useContext(CharactersContext)

  if(!context) {
    throw Error('useCharactersContext must be used inside a CharactersContextProvider')
  }

  return context 
}