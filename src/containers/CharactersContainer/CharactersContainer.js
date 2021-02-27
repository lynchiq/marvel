import CharacterCard from "../../components/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react"
import {getCharactersRequest, setOffset} from "../../store/modules/characters/slice";
import Pagination from "../../common/Pagination";
import Grid from "../../common/Grid";
import {characters as items} from "../../data";
import Section from "../../common/Section";
import {favorite, unfavorite} from "../../store/modules/favorites/slice";

const CharactersContainer = () => {

  const {total, count, offset, isLoading} = useSelector(state => {
    return state.characters
  })

  const favorites = useSelector(state => state.favorites.items)

  let dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCharactersRequest(offset))
  // }, [offset])

  const characters = items.map(character => {

    const isFavorite = favorites.includes(character.id)

    let toggleFavorite = (id) => {
      if (isFavorite) {
        dispatch(unfavorite(id))
      } else {
        dispatch(favorite(id))
      }
    }

    return (
      <CharacterCard key={character.id} id={character.id} name={character.name}
                     img={character.thumbnail.path + '.' + character.thumbnail.extension} favorite={isFavorite} toggleFavorite={() => toggleFavorite(character.id)}/>
    )
  })

  const changePage = (page) => {
    dispatch(setOffset(page))
  }

  return (
    <>
      <Grid>
        {isLoading ? <div>Loading</div> : characters}
      </Grid>
      <Section>
        <Pagination total={total} count={count} offset={offset} onChange={changePage}/>
      </Section>
    </>
  )
}

export default CharactersContainer