import { H1, Heading, Paragraph } from "../../styles/typography";
import { HomePageHero } from "./HomePage.styles";
import { Container } from "@material-ui/core";
import { Section } from "../../styles/global";
import CharactersList from "../../components/HeroesList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeroes } from "../../store/modules/heroes/actions";
import { avengers } from "../../fixtures";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroes(avengers));
  }, [dispatch]);

  return (
    <>
      <HomePageHero>
        <H1>Marvel characters</H1>
        <Paragraph>Find your favorite superhero</Paragraph>
      </HomePageHero>
      <Container>
        <Section>
          <Heading>Avengers</Heading>
          <CharactersList heroes={avengers} />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
