import Container from "../../common/Container";
import {H1, H2} from "../../styles/typography";
import PageHero from "../../common/PageHero";
import poster from "../../assets/comics.jpg";
import Section from "../../common/Section";
import Grid from "../../common/Grid";
import {CharactersContainer} from "../../containers";

const Comics = () => {
  return (
    <>
      <PageHero img={poster} repeat={'repeat'}>
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

export default Comics