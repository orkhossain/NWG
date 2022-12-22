import { useState } from 'react'
import { useCharactersContext } from '../hooks/useCharactersContext'

const CharacterForm = () => {
  const { dispatch } = useCharactersContext()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [description, setDescription] = useState('')

  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const options = ['Male', 'Female', 'Non-binary'];

  const onOptionChangeHandler = (event) => {
      setGender(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const character = {name, surname, gender, age, weight, height,description}
    
    const response = await fetch('/api/characters', {
      method: 'POST',
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setName('')
      setSurname('')
      setAge(0)
      setGender('')
      setWeight(0)
      setHeight(0)
      setDescription('')

      dispatch({type: 'CREATE_CHARACTER', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Character</h3>

      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Surname:</label>
      <input 
        type="text" 
        onChange={(e) => setSurname(e.target.value)} 
        value={surname}
        className={emptyFields.includes('surname') ? 'error' : ''}
      />

      <div className='form-group'>
        <label>Gender:</label>
      <select onChange={onOptionChangeHandler}>
          <option>Please choose one option</option>
          {options.map((option, index) => {
              return <option key={index}  className={[emptyFields.includes('gender') ? 'error' : '','form-control'] }>
                  {option}
              </option>
          })}
      </select>
      </div>
     
      <label>Age:</label>
      <input type="number" 
        onChange={(e) => setAge(e.target.value)} 
        value={age}
        className={emptyFields.includes('age') ? 'error' : ''}
      />
    
      <label>Height:</label>
      <input 
        type="number" 
        onChange={(e) => setHeight(e.target.value)} 
        value={height}
        className={emptyFields.includes('height') ? 'error' : ''}
      />
      <label>Weight:</label>
      <input 
        type="number" 
        onChange={(e) => setWeight(e.target.value)} 
        value={weight}
        className={emptyFields.includes('weight') ? 'error' : ''}
      />

      <label>Description:</label>
      <textarea 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />


      <button>Add Character</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CharacterForm