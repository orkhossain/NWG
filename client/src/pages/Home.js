import { useEffect } from "react";
import { useCharactersContext } from "../hooks/useCharactersContext"
import {useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CharacterBasic from "../components/CharacterBasic"

const Home = () => {
  const { characters, dispatch } = useCharactersContext()


 const navigate = useNavigate()

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('/api/characters')
      const json = await response.json()
    
      if (response.ok) {
        dispatch({type: 'SET_CHARACTERS', payload: json})
      }


    }

    fetchCharacters()    

  }, [dispatch])





  return (
    <div className="home">
          
     <Carousel showThumbs={false} showArrows={true} >  
     {characters && characters.map(item => (
     <div className="item">
     <CharacterBasic character={item}/> 
     <button className="btn btn-primary float-start" key={item._id} onClick={() => navigate('/details/' + item._id)}> Visualizza dettagli</button>

     </div>
        ))}
        </Carousel>
    </div>
  )
}

export default Home