import React from 'react';
import { ComicCardBg, ComicCardImg, StyledComicCard } from './ComicCard.styles';
import { ComicCardType } from '../../types/types';
import createThumbnailSrc from '../../utils/createThumbnailSrc';

const ComicCard = ({ id, title, thumbnail }: ComicCardType) => {
  const thumbSrc = createThumbnailSrc(thumbnail);

  return (
    <StyledComicCard to={`comics/${id}`}>
      <ComicCardBg>info</ComicCardBg>
      <ComicCardImg src={thumbSrc} alt={title} />
    </StyledComicCard>
  );
};

export default ComicCard;
