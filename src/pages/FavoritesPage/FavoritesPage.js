import {useSelector} from "react-redux";
import {favoriteCharactersSelector} from "../../store/modules/characters/selectors";
import {Container} from "@material-ui/core";
import CharactersList from "../../components/CharactersList";
import {Section} from "../../styles/global";
import {H1} from "../../styles/typography";

const FavoritesPage = () => {

  const favorites = useSelector(favoriteCharactersSelector)

  return (
    <Section>
      <Container>
        <H1>Favorite characters</H1>
        <CharactersList characters={favorites}/>
      </Container>
    </Section>
  )
}

export default FavoritesPage