import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { RootState } from '../../store/modules/rootReducer';
import Hero from '../../components/Hero';
import { Section } from '../../styles/global';
import { H1 } from '../../styles/typography';
import {
  setFavoriteHero,
  unsetFavoriteHero,
} from '../../store/modules/favorite/actions';
import { selectHeroById } from '../../store/modules/heroes/selectors';
import { selectFavoriteHero } from '../../store/modules/favorite/selectors';

const HeroPage: React.FC = () => {
  const dispatch = useDispatch();

  const { id }: any = useParams();

  const favorite = useSelector((state: RootState) => selectFavoriteHero(state, +id));

  const isFavorite = !!favorite;

  let hero = useSelector((state: RootState) => selectHeroById(state, +id));

  if (!hero && isFavorite) {
    hero = favorite;
  }

  const toggleFavorite = () => {
    if (hero) {
      if (isFavorite) {
        dispatch(unsetFavoriteHero(hero.id));
      } else {
        dispatch(setFavoriteHero(hero));
      }
    }
  };

  if (!hero) {
    return (
      <Container>
        <Section>
          <H1>Hero not found!</H1>
        </Section>
      </Container>
    );
  }

  return (
    <Hero hero={hero} favorite={isFavorite} toggleFavorite={toggleFavorite} />
  );
};

export default HeroPage;
