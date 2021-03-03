import {H1} from "../../styles/typography";
import {Container, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import ComicCard from "../../components/ComicCard";
import Button from "../../common/Button";

const ComicsPage = () => {

  const comics = useSelector(state => state.comics.items)

  const comicsList = comics.map(comic => {
    return (
      <Grid md={2} sm={4} key={comic.id}>
        <ComicCard {...comic}/>
      </Grid>
    )
  })

  return (
    <>
      <Container>
        <H1 center>Comics</H1>
        <Grid container>
          {comicsList}
        </Grid>
        <Button>load more</Button>
      </Container>
    </>
  )
}

export default ComicsPage