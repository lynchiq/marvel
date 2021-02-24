import CharacterCard from "../../components/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react"
import {getCharactersRequest} from "../../store/modules/characters/slice";

const CharactersContainer = () => {

  const {data, isLoading} = useSelector(state => {
    return state.characters
  })

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharactersRequest())
  }, [])

  return isLoading ? <div>Loading</div> : (
    <>
      {data.map(character => {
        return (
          <CharacterCard key={character.id} id={character.id} name={character.name}
                         img={character.thumbnail.path + '.' + character.thumbnail.extension}/>
        )
      })}
    </>
  )
}

export default CharactersContainer