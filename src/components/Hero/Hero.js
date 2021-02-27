import {HeroContent, HeroDescription, HeroImgBg, HeroImgContainer, HeroName, StyledHero} from "./Hero.styles";
import Container from "../../common/Container";

const Hero = ({name, description, comics = [], thumbnail}) => {

  const comicsList = comics.map(comic => {
    return <div key={comic.id}>{comic.title}</div>
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
        </HeroContent>
        <div>
          {comicsList}
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero