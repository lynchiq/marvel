import {H1, H2, Paragraph} from "../../styles/typography";
import {HomePageHero} from "./HomePage.styles";
import {Container} from "@material-ui/core";
import {Section} from "../../styles/global";
import {avengers} from "../../fixtures";
import CharactersList from "../../components/CharactersList";

const HomePage = () => {

  return (
    <>
      <HomePageHero>
        <H1>Marvel characters</H1>
        <Paragraph>Find your favorite superhero</Paragraph>
      </HomePageHero>
      <Container>
        <Section>
          <H2>Avengers</H2>
          <CharactersList characters={avengers}/>
        </Section>
      </Container>
    </>
  )
}

export default HomePage