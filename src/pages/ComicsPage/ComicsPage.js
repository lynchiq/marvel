import {H1} from "../../styles/typography";
import {Box, Container, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import ComicCard from "../../components/ComicCard";
import Button from "../../common/Button";
import {getHeroComicsRequest, setComicsOffset} from "../../store/modules/comics/slice";

const ComicsPage = () => {

  const dispatch = useDispatch()

  const {items, total, limit, offset, isLoading} = useSelector(state => state.comics)
  const hero = useSelector(state => state.hero.item)

  const comicsList = items.map(comic => {
    return (
      <Grid md={2} sm={4} key={comic.id}>
        <ComicCard {...comic}/>
      </Grid>
    )
  })

  const loadMore = () => {


    const lastComicsCount = total - (offset + limit)

    if (lastComicsCount > 0) {
      dispatch(setComicsOffset((offset + limit)))
      dispatch(getHeroComicsRequest({id: hero.id}))
    }
  }

  return (
    <>
      <Container>
        <H1 center>Comics</H1>
        <Grid container justify={"center"}>
          {comicsList}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} marginBottom={2}>
          <Button onClick={loadMore} disabled={isLoading} isLoading={isLoading}>load more</Button>
        </Box>
      </Container>
    </>
  )
}

export default ComicsPage