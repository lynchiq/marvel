import {ComicCardBg, ComicCardImg, StyledComicCard} from "./ComicCard.styles";
import React from "react";
import {ComicType} from "../../types/types";
import createThumbnailSrc from "../../utils/createThumbnailSrc";

const ComicCard: React.FC<ComicType> = ({id, title, thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return (
    <StyledComicCard to={`comics/${id}`}>
      <ComicCardBg>info</ComicCardBg>
      <ComicCardImg src={thumbSrc} alt={title}/>
    </StyledComicCard>
  )
}

export default ComicCard