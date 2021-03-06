import { Box, Container } from '@material-ui/core';
import React from 'react';
import {
  HeroContent, HeroDescription, HeroName, HeroThumbBg, HeroThumbContainer, StyledHero,
} from './Hero.styles';
import createThumbnailSrc from '../../utils/createThumbnailSrc';
import stripHtml from '../../utils/stripHtml';
import { A } from '../../styles/typography';
import Button from '../../common/Button';
import { HeroType } from '../../types/types';

type Props = {
  hero: HeroType;
  favorite: boolean;
  toggleFavorite: () => void;
};

const Hero = ({ hero, favorite, toggleFavorite }: Props) => {
  const thumbSrc = createThumbnailSrc(hero.thumbnail);

  const btnText = favorite
    ? `Remove ${hero.name} from favorites`
    : `Add ${hero.name} to favorites`;

  return (
    <StyledHero>
      <HeroThumbContainer>
        <HeroThumbBg />
        <img src={thumbSrc} alt={hero.name} />
      </HeroThumbContainer>
      <Container>
        <HeroContent>
          <HeroName>{hero.name}</HeroName>
          <HeroDescription>
            {hero.description
              ? stripHtml(hero.description)
              : 'Sorry, description is empty.'}
          </HeroDescription>
          <Box marginBottom={5}>
            <Button text={btnText} onClick={toggleFavorite} />
          </Box>
          <A to={`${hero.id}/comics`}>See all hero comics</A>
        </HeroContent>
      </Container>
    </StyledHero>
  );
};

export default Hero;
