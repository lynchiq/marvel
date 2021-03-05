import {H1, H2, Headling, Paragraph} from "../../styles/typography";
import {HomePageHero} from "./HomePage.styles";
import {Container} from "@material-ui/core";
import {Section} from "../../styles/global";
import {avengers} from "../../fixtures";
import CharactersList from "../../components/HeroesList";

const HomePage = () => {

  return (
    <>
      <HomePageHero>
        <H1>Marvel characters</H1>
        <Paragraph>Find your favorite superhero</Paragraph>
      </HomePageHero>
      <Container>
        <Section>
          <Headling center={true}>Avengers</Headling>
          <CharactersList characters={avengers}/>
        </Section>
      </Container>
    </>
  )
}

export default HomePage