import React from 'react';
import {
  HeroCardName,
  HeroCardThumbnail,
  StyledHeroCard,
} from './HeroCard.styles';
import createThumbnailSrc from '../../utils/createThumbnailSrc';
import { HeroType } from '../../types/types';

const HeroCard = ({
  id,
  name,
  thumbnail,
}: HeroType) => {
  const thumbSrc = createThumbnailSrc(thumbnail);

  return (
    <StyledHeroCard>
      <HeroCardThumbnail src={thumbSrc} alt={name} />
      <HeroCardName to={`/heroes/${id}`}>{name}</HeroCardName>
    </StyledHeroCard>
  );
};

export default HeroCard;
