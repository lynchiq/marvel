import {HeroContent, HeroDescription, HeroImgBg, HeroImgContainer, HeroName, StyledHero} from "./Hero.styles";
import Container from "../../common/Container";

const Hero = ({name, description, comics = [], thumbnail}) => {
  return (
    <StyledHero>
      <HeroImgContainer>
        <HeroImgBg/>
        <img src={thumbnail.path + '.' + thumbnail.extension} alt={name}/>
      </HeroImgContainer>
      <Container>
        <HeroContent>
          <HeroName>{name}</HeroName>
          <HeroDescription>{description}</HeroDescription>
        </HeroContent>
      </Container>
    </StyledHero>
  )
}

export default Hero