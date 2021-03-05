import {Container} from "@material-ui/core";
import CharactersList from "../../components/HeroesList";
import {Section} from "../../styles/global";
import {Headling} from "../../styles/typography";
import {useSelector} from "react-redux";
import {favoriteCharactersSelector} from "../../store/modules/characters/selectors";

const FavoritesPage = () => {

  const favorites = useSelector(favoriteCharactersSelector)

  return (
    <Section>
      <Container>
        <Headling center={true}>Favorite characters</Headling>
        <CharactersList characters={favorites}/>
      </Container>
    </Section>
  )
}

export default FavoritesPage