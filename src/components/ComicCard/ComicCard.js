import {ComicCardImg, StyledComicCard} from "./ComicCard.styles";

const ComicCard = ({id, title, thumbnail}) => {
  return (
    <StyledComicCard>
      <ComicCardImg src={thumbnail.path + '.' + thumbnail.extension} alt={title}/>
    </StyledComicCard>
  )
}

export default ComicCard