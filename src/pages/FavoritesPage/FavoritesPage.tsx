import {Container} from "@material-ui/core";
import CharactersList from "../../components/HeroesList";
import {Section} from "../../styles/global";
import {Headling} from "../../styles/typography";
import {useSelector} from "react-redux";
import {RootState} from "../../store/modules/rootReducer";
import { selectFavoriteHeroes } from "../../store/modules/favorite/reducer";

const FavoritesPage = () => {

  const favorites = useSelector((state: RootState) => selectFavoriteHeroes(state))

  return (
    <Section>
      <Container>
        <Headling>Favorite characters</Headling>
        <CharactersList heroes={favorites}/>
      </Container>
    </Section>
  )
}

export default FavoritesPage