import CharacterCard from "../../components/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react"
import {getCharactersRequest} from "../../store/modules/characters/slice";
import Pagination from "../../common/Pagination";

const CharactersContainer = () => {

  const {items, offset, limit, total, count, isLoading} = useSelector(state => {
    return state.characters
  })

  let dispatch = useDispatch()

  useEffect(() => {
    if (!items.length) {
      dispatch(getCharactersRequest({offset: 0}))
    }
  }, [])

  const goToPage = (number) => {
    dispatch(getCharactersRequest({offset: number}))
  }

  const characters = items.map(character => {
    return (
      <CharacterCard key={character.id} id={character.id} name={character.name}
                     img={character.thumbnail.path + '.' + character.thumbnail.extension}/>
    )
  })

  return isLoading ? <div>Loading</div> : (
    <>
      {characters}
      <Pagination offset={offset} limit={limit} total={total} count={count} goToPage={goToPage}/>
    </>
  )
}

export default CharactersContainer