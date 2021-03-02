import {ComicCardBg, ComicCardImg, StyledComicCard} from "./ComicCard.styles";

const ComicCard = ({id, title, thumbnail}) => {
  return (
    <StyledComicCard to={`/comics/${id}`}>
      <ComicCardBg>info</ComicCardBg>
      <ComicCardImg src={thumbnail.path + '.' + thumbnail.extension} alt={title}/>
    </StyledComicCard>
  )
}

export default ComicCard