import React from 'react';
import createThumbnailSrc from '../../utils/createThumbnailSrc';
import { StyledThumbnail } from './Thumbnail.styles';
import { ThumbnailType } from '../../types/types';

type Props = {
  thumbnail: ThumbnailType;
};

const Thumbnail = ({ thumbnail }: Props) => {
  const thumbSrc = createThumbnailSrc(thumbnail);

  return <StyledThumbnail src={thumbSrc} />;
};

export default Thumbnail;
