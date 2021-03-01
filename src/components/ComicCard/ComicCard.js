import {ComicCardBg, ComicCardImg, StyledComicCard} from "./ComicCard.styles";

const ComicCard = ({id, title, thumbnail}) => {
  return (
    <StyledComicCard>
      <ComicCardBg>more details</ComicCardBg>
      <ComicCardImg src={thumbnail.path + '.' + thumbnail.extension} alt={title}/>
    </StyledComicCard>
  )
}

export default ComicCard