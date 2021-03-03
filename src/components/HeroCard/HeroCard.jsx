import {HeroCardName, HeroCardThumbnail, StyledHeroCard} from "./HeroCard.styles";
import createThumbnailSrc from "../../utils/createThumbnailSrc";
import PropTypes from 'prop-types';

const HeroCard = ({id, name, thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return (
    <StyledHeroCard>
      <HeroCardThumbnail src={thumbSrc} alt={name}/>
      <HeroCardName to={`/characters/${id}`}>{name}</HeroCardName>
    </StyledHeroCard>
  )
}

HeroCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.object
}

export default HeroCard