import { useCharactersContext } from '../hooks/useCharactersContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const CharacterCard = ({character}) => {

  const {dispatch} =  useCharactersContext();


  const handleClick = async () => {
    const response = await fetch('/api/characters/' + character._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CHARACTER', payload: json})
    }
  }


 
  return (
    
    <div className="character-details">
     <p><strong>Name: </strong>{character.name}</p>
     <p><strong>Surname: </strong> {character.surname}</p>
      <p><strong>Gender: </strong>{character.gender}</p>
      <p><strong>Age: </strong>{character.age}</p>
      <p><strong>Height: </strong>{character.height}</p>
      <p><strong>Weight: </strong>{character.weight}</p>
      <p>{formatDistanceToNow(new Date(character.createdAt), { addSuffix: true })}</p>
      <span data-testid="delete" className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default CharacterCard