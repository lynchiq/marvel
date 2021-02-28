import {HeroContent, HeroDescription, HeroImgBg, HeroImgContainer, HeroName, StyledHero} from "./Hero.styles";
import Container from "../../common/Container";
import ComicCard from "../ComicCard";
import Row from "../../common/Row";

const Hero = ({name, description, comics = [], thumbnail}) => {

  const comicsList = comics.map((comic, i) => {
    if (i < 5) {
      return <ComicCard key={comic.id} title={comic.title} thumbnail={comic.thumbnail}/>
    }
    return null
  })

  return (
    <StyledHero>
      <HeroImgContainer>
        <HeroImgBg/>
        <img src={thumbnail ? thumbnail.path + '.' + thumbnail.extension : ''} alt={name}/>
      </HeroImgContainer>
      <Container>
        <HeroContent>
          <HeroName>{name}</HeroName>
          <HeroDescription>{description}</HeroDescription>
          <Row>
            {comicsList}
          </Row>
        </HeroContent>
      </Container>
</StyledHero>
)
}

export default Hero