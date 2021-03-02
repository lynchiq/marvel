import {useSelector} from "react-redux";
import {favoriteCharactersSelector} from "../../store/modules/characters/selectors";
import {Container} from "@material-ui/core";
import CharactersList from "../../components/CharactersList";
import {Section} from "../../styles/global";

const FavoritesPage = () => {

  const favorites = useSelector(favoriteCharactersSelector)

  return (
    <Section>
      <Container>
        <CharactersList characters={favorites}/>
      </Container>
    </Section>
  )
}

export default FavoritesPage