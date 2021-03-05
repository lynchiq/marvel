import {HeroCardName, HeroCardThumbnail, StyledHeroCard} from "./HeroCard.styles";
import createThumbnailSrc from "../../utils/createThumbnailSrc";
import React from "react";
import {Hero} from "../../store/modules/heroes/types";

const HeroCard: React.FunctionComponent<Hero> = ({id, name, description, thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return (
    <StyledHeroCard>
      <HeroCardThumbnail src={thumbSrc} alt={name}/>
      <HeroCardName to={`/characters/${id}`}>{name}</HeroCardName>
    </StyledHeroCard>
  )
}

export default HeroCard