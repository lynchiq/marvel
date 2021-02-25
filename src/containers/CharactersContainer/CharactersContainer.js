import CharacterCard from "../../components/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react"
import {getCharactersRequest, setOffset} from "../../store/modules/characters/slice";
import Pagination from "../../common/Pagination";
import Grid from "../../common/Grid";

const CharactersContainer = () => {

  const {items, total, count, offset, isLoading} = useSelector(state => {
    return state.characters
  })

  let dispatch = useDispatch()

  useEffect(() => {
    debugger
    dispatch(getCharactersRequest(offset))
  }, [offset])

  const characters = items.map(character => {
    return (
      <CharacterCard key={character.id} id={character.id} name={character.name}
                     img={character.thumbnail.path + '.' + character.thumbnail.extension}/>
    )
  })

  const changePage = (page) => {
    dispatch(setOffset(page))
  }

  return (
    <>
      <Pagination total={total} count={count} offset={offset} onChange={changePage}/>
      <Grid>
        {isLoading ? <div>Loading</div> : characters}
      </Grid>
    </>
  )
}

export default CharactersContainer