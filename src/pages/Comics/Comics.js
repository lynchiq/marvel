import {H1, H2} from "../../styles/typography";
import PageHero from "../../common/PageHero";
import poster from "../../assets/comics.jpg";
import {Container} from "@material-ui/core";

const Comics = () => {
  return (
    <>
      <PageHero img={poster} repeat={'repeat'}>
        <Container>
          <H1>Characters page</H1>
        </Container>
      </PageHero>
      <Container>
        <H2>Avengers</H2>
      </Container>
    </>
  )
}

export default Comics