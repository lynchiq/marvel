import {Character} from "../../components/Character/Character";
import {characters as data} from "../../data";

const CharactersContainer = () => {

  let characters = data.map(character => {
    return <Character key={character.id} name={character.name} thumbnail={character.thumbnail.path + '.' + character.thumbnail.extension}/>
  })

  return (
    <>
      {characters}
    </>
  )
}

export default CharactersContainer