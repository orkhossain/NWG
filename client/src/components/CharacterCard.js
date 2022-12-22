
const CharacterCard = ({character}) => {

 
  return (
    
    <div  data-testid="details" className="character-details">
      <h4 data-testid="fullName">Hi, my name is {character.name} {character.surname}</h4>
      <p data-testid="gender"><strong>I am a : </strong>{character.gender}</p>
      <p data-testid="age"><strong>I am: </strong>{character.age}</p>
      <p data-testid="height"><strong>I am : </strong>{character.height} metres tall</p>
      <p data-testid="weight"><strong>and I weight: </strong>{character.weight}kg</p>
      <p data-testid="description"> <strong>Here is a short description of myself </strong>{character.description}</p>
    </div>
  )
}

export default CharacterCard