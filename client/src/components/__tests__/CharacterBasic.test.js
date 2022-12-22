import {cleanup, render, screen} from '@testing-library/react'
import CharacterBasic from '../CharacterBasic'
import { CharactersContextProvider } from '../../context/CharactersContext';
import { useCharactersContext } from '../../hooks/useCharactersContext'
import '@testing-library/jest-dom';



function renderCharacter(character) {
    return render(
      <CharactersContextProvider>
     <CharacterBasic character={character} />
      </CharactersContextProvider>
    );
  }




  test('should render character basic component with data', ()=>{
    const character = {
        name: "Ork",
        surname: "Hossain",
        age: 24,
        gender: "Male",
        height: 175,
        weight: 69,
        description: "Full Stack Developer",
        createdAt: "2022-12-22T20:42:50.834+00:00"

      }
      renderCharacter(character)
    const todoElement =  screen.getByText("Male");
    expect(todoElement).toBeInTheDocument()

})