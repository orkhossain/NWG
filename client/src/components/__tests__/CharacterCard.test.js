import {cleanup, render, screen} from '@testing-library/react'
import CharacterCard from '../CharacterBasic'
import { CharactersContextProvider } from '../../context/CharactersContext';
import { useCharactersContext } from '../../hooks/useCharactersContext'
import '@testing-library/jest-dom';


function renderCharacter(character) {
    return render(
      <CharactersContextProvider>
     <CharacterCard character={character} />
      </CharactersContextProvider>
    );
  }


test('should render card component with data', ()=>{
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
    expect(screen.getByText(`${character.name}`)).toBeInTheDocument();

})