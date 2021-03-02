import CharacterCard from "../../components/CharacterCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react"
import {favorite, getCharactersRequest, setOffset, unfavorite} from "../../store/modules/characters/slice";
import Pagination from "../../common/Pagination";
import Grid from "../../common/Grid";
import Section from "../../common/Section";
import {charactersPageSelector} from "../../store/modules/characters/selectors";

const CharactersContainer = () => {

  let dispatch = useDispatch()

  const {items, total, count, offset, isLoading} = useSelector(charactersPageSelector)

  const [currentPage, setCurrentPage] = useState(1)

  const favorites = useSelector(state => state.favorites.items)



  useEffect(() => {
    dispatch(getCharactersRequest(offset))
  }, [offset])

  const characters = items.map(character => {

    const isFavorite = favorites.includes(character)

    let toggleFavorite = (character) => {
      if (isFavorite) {
        dispatch(unfavorite(character))
      } else {
        dispatch(favorite(character))
      }
    }

    return (
      <CharacterCard key={character.id} id={character.id} name={character.name}
                     img={character.thumbnail.path + '.' + character.thumbnail.extension} favorite={isFavorite} toggleFavorite={() => toggleFavorite(character)}/>
    )
  })

  const changePage = (offset) => {
    dispatch(getCharactersRequest(offset))
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