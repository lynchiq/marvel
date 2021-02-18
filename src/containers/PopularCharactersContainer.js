import {Character} from "../components/Character/Character";
import {popularCharacters as data} from "../data";

const PopularCharactersContainer = () => {
  let characters = data.map(character => {
    return <Character key={character.id} name={character.name} thumbnail={character.thumbnail.path + '.' + character.thumbnail.extension}/>
  })

  return (
    <>
      {characters}
    </>
  )
}

export default PopularCharactersContainer