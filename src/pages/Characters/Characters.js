import CharactersContainer from "../../containers/CharactersContainer/CharactersContainer";
import {Container, Hero, HeroBg, HeroContentWrapper, HeroTitle, Row} from "../styles";

export const Characters = () => {
  return (
    <>
      <Hero>
        <HeroBg/>
        <HeroContentWrapper>
          <HeroTitle>Marvel characters</HeroTitle>
        </HeroContentWrapper>
      </Hero>
      <Container>
        <h1>Marvel characters list</h1>
        <p>This is page about marvel characters</p>
        <Row>
          <CharactersContainer/>
        </Row>
      </Container>
    </>
  )
}

