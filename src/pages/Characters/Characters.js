import CharactersContainer from "../../containers/CharactersContainer";
import {Container, H2, Hero, HeroBg, HeroContentWrapper, HeroTitle, Row} from "../styles";
import PopularCharactersContainer from "../../containers/PopularCharactersContainer";

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
        <H2>Popular heroes</H2>
        <Row>
          <PopularCharactersContainer/>
        </Row>
        <H2>MARVEL CHARACTERS LIST</H2>
        <Row>
          <CharactersContainer/>
        </Row>
      </Container>
    </>
  )
}

