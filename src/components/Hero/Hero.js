import {
  HeroComicsContainer,
  HeroComicsList,
  HeroContent,
  HeroDescription,
  HeroImgBg,
  HeroImgContainer,
  HeroName,
  StyledHero
} from "./Hero.styles";

import ComicCard from "../ComicCard";
import {Container, Link} from "@material-ui/core";

const Hero = ({name, description, comics = [], thumbnail}) => {

  const comicsList = comics.map((comic, i) => {
    if (i < 5) {
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
          <HeroContent>
            <HeroName>{name}</HeroName>
            <HeroDescription>{description ? description : 'Description is empty'}</HeroDescription>
            <HeroComicsContainer>
              <HeroComicsList>
                {comicsList}
              </HeroComicsList>
              <Link to={`/comics`}>See All Comics</Link>
            </HeroComicsContainer>
          </HeroContent>
      </Container>
</StyledHero>
)
}

export default Hero