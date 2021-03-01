import {
  ComicContent,
  ComicDescription,
  ComicInfo, ComicInfoList,
  ComicThumbnail,
  ComicThumbnailContainer,
  ComicTitle,
  StyledComic
} from "./Comic.styles";
import Carousel from "../../common/Carousel";
import CharacterCard from "../CharacterCard";
import {H3} from "../../styles/typography";
import Row from "../../common/Row";

const Comic = ({title, description, thumbnail, prices, format, pageCount, creators, characters}) => {
  return (
    <StyledComic>
      <ComicThumbnailContainer>
        <ComicThumbnail src={thumbnail ? thumbnail.path + '.' + thumbnail.extension : ''} alt={title}/>
      </ComicThumbnailContainer>
      <ComicContent>
        <ComicTitle>{title}</ComicTitle>
        <ComicDescription>{description ? description : 'Description is empty'}</ComicDescription>
        <ComicInfo>Page count: {pageCount}</ComicInfo>
        <ComicInfo>Format: {format}</ComicInfo>
        <ComicInfo>Price: {prices ? prices[0].price : '--'}</ComicInfo>
        <ComicInfo>Price: {prices ? prices[0].price : '--'}</ComicInfo>
        <Row>
          <ComicInfoList>
            <H3>Creators:</H3>
            {creators && creators.items.map(item => <ComicInfo>{item.name}</ComicInfo>)}
          </ComicInfoList>
          <ComicInfoList>
            <H3>Characters:</H3>
            {characters && characters.items.map(item => {
              return (
                <ComicInfo>{item.name}</ComicInfo>
              )
            })}
          </ComicInfoList>
        </Row>
      </ComicContent>
    </StyledComic>
  )
}

export default Comic