import {
  HeroComicsContainer,
  HeroContent,
  HeroDescription,
  HeroImgBg,
  HeroImgContainer,
  HeroName,
  StyledHero
} from "./Hero.styles";
import Container from "../../common/Container";
import ComicCard from "../ComicCard";
import Button from "../../common/Button";
import Section from "../../common/Section";
import Carousel from "../../common/Carousel";

const Hero = ({name, description, comics = [], thumbnail}) => {

  const comicsList = comics.map((comic, i) => {
    if (i < 12) {
      return <ComicCard key={comic.id} id={comic.id} title={comic.title} thumbnail={comic.thumbnail}/>
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
        <Section>
          <HeroContent>
            <Button>Back</Button>
            <HeroName>{name}</HeroName>
            <HeroDescription>{description}</HeroDescription>
            <Carousel>
              {comicsList}
            </Carousel>
          </HeroContent>
        </Section>
      </Container>
</StyledHero>
)
}

export default Hero