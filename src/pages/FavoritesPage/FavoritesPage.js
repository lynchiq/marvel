import {useDispatch, useSelector} from "react-redux";
import {characters as items} from "../../data";
import {favorite, unfavorite} from "../../store/modules/favorites/slice";
import CharacterCard from "../../components/CharacterCard";
import Grid from "../../common/Grid";
import Container from "../../common/Container";
import Section from "../../common/Section";

const FavoritesPage = () => {

  const dispatch = useDispatch()

  const favorites = useSelector(store => store.favorites.items)

  const characters = favorites.map(character => {

    const isFavorite = favorites.includes(character)

    let toggleFavorite = (character) => {
      if (isFavorite) {
        console.log('fuv')
        dispatch(unfavorite(character))
      } else {
        console.log('unfuv')
        dispatch(favorite(character))
      }
    }

    return (
      <CharacterCard key={character.id} id={character.id} name={character.name}
                     img={character.thumbnail.path + '.' + character.thumbnail.extension} favorite={isFavorite} toggleFavorite={() => toggleFavorite(character)}/>
    )
  })

  return (
    <Container>
      <Section>
        <Grid>
          {characters}
        </Grid>
      </Section>
    </Container>
  )
}

export default FavoritesPage