import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectHeroById} from "../../store/modules/heroes/reducer";
import {RootState} from "../../store/modules/rootReducer";
import Hero from "../../components/Hero";
import {Container} from "@material-ui/core";
import {Section} from "../../styles/global";
import {H1} from "../../styles/typography";
import {setFavoriteHero, unsetFavoriteHero} from "../../store/modules/favorite/actions";
import {selectFavoriteHero} from "../../store/modules/favorite/reducer";

const HeroPage: React.FC = () => {

  const dispatch = useDispatch()

  let { id } : any = useParams();

  const hero = useSelector((state: RootState) => selectHeroById(state, +id))
  const isFavorite = !!useSelector((state: RootState) => selectFavoriteHero(state, +id))

  const toggleFavorite = () => {
    if (isFavorite) {
      hero && dispatch(unsetFavoriteHero(hero.id))
    } else {
      hero && dispatch(setFavoriteHero(hero))
    }
  }

  if (!hero) {
    return (
      <Container>
        <Section>
          <H1>Hero not found!</H1>
        </Section>
      </Container>
    )
  }

  return <Hero hero={hero} favorite={isFavorite} toggleFavorite={toggleFavorite}/>
}

export default HeroPage