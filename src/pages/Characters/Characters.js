import Container from "../../common/Container";
import PageHero from "../../common/PageHero";
import Section from "../../common/Section";
import {CharactersContainer} from "../../containers";
import Grid from "../../common/Grid";
import {H1, H2} from "../../styles/typography";
import poster from "../../assets/characters.jpg"

const Characters = () => {
  return (
    <>
      <PageHero img={poster}>
        <Container>
          <H1>Characters page</H1>
        </Container>
      </PageHero>
      <Container>
        <Section>
          <H2>Avengers</H2>
          <Grid>
            <CharactersContainer/>
          </Grid>
        </Section>
        <Section>
          <H2>All characters</H2>
          <Grid>
            <CharactersContainer/>
          </Grid>
        </Section>
      </Container>
    </>
  )
}

export default Characters