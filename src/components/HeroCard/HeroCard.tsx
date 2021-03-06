import {HeroCardName, HeroCardThumbnail, StyledHeroCard} from "./HeroCard.styles";
import createThumbnailSrc from "../../utils/createThumbnailSrc";
import React from "react";
import {HeroType} from "../../types/types";

const HeroCard: React.FunctionComponent<HeroType> = ({id, name, description, thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return (
    <StyledHeroCard>
      <HeroCardThumbnail src={thumbSrc} alt={name}/>
      <HeroCardName to={`/heroes/${id}`}>{name}</HeroCardName>
    </StyledHeroCard>
  )
}

export default HeroCard