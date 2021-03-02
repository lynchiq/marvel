import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {charactersPageSelector} from "../../store/modules/characters/selectors"
import {getCharactersRequest} from "../../store/modules/characters/slice"
import CharacterCard from "../../components/CharacterCard"
import {Container, Grid} from "@material-ui/core"

const CharactersPage = () => {

  let dispatch = useDispatch()

  const {items, offset, favorites} = useSelector(charactersPageSelector)

  useEffect(() => {
    dispatch(getCharactersRequest(offset))
  }, [offset])

  const characters = items.map(character => {
    return (
      <CharacterCard
        {...character}
        key={character.id}
        favorite={favorites.includes(character)}
        toggleFavorite={() => {}}
      />
    )
  })

  return (
    <>
      <Container>
        <Grid>
          {characters}
        </Grid>
      </Container>
    </>
  )
}

export default CharactersPage