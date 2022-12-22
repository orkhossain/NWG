import { useCharactersContext } from '../hooks/useCharactersContext'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import CharacterCard  from '../components/CharacterCard'

const CharacterDetails = () => {
  const { character, dispatch } = useCharactersContext()
  const {id} = useParams();

  useEffect(() => {
  const fetchCharacter = async () => {
    const response = await fetch('/api/characters/' + id)
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'SET_CHARACTER', payload: json})
    }
  }
  fetchCharacter()

},[dispatch,id],
)

  return (
    <>{character && <><CharacterCard character={character} key={character._id} /></>}</>
  )
}

export default CharacterDetails