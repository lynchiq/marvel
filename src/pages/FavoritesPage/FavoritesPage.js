import {useDispatch, useSelector} from "react-redux";
import CharacterCard from "../../components/CharacterCard";
import {favorite, unfavorite} from "../../store/modules/characters/slice";
import {favoriteCharactersSelector} from "../../store/modules/characters/selectors";
import {Container} from "@material-ui/core";

const FavoritesPage = () => {

  const dispatch = useDispatch()

  const favorites = useSelector(favoriteCharactersSelector)

  const characters = favorites.map(character => {

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

  return (
    <Container>
      {characters}
    </Container>
  )
}

export default FavoritesPage