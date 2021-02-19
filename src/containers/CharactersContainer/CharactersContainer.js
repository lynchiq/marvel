import CharacterCard from "../../components/CharacterCard";
import {useSelector} from "react-redux";

const CharactersContainer = () => {

  let chars = useSelector(state => {
    return state.characters
  })

  return (
    <>
      {chars.map(character => {
        return (
          <CharacterCard key={character.id} id={character.id} name={character.name} img={character.thumbnail.path + '.' + character.thumbnail.extension}/>
        )
      })}
    </>
  )
}

export default CharactersContainer