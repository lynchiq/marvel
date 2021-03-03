import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {charactersPageSelector} from "../../store/modules/characters/selectors"
import {getCharactersRequest, setPagination} from "../../store/modules/characters/slice"
import {Container, Grid} from "@material-ui/core"
import {H1} from "../../styles/typography";
import {Section} from "../../styles/global";
import CharactersList from "../../components/CharactersList";
import {Pagination} from "@material-ui/lab";

const CharactersPage = () => {

  let dispatch = useDispatch()
  const {items, pagination, isLoading} = useSelector(charactersPageSelector)
  const {total, count, limit, page} = pagination
  const pageCount = Math.ceil(total / limit)
  const [currentPage, setCurrentPage] = useState(page)

  useEffect(() => {
    dispatch(getCharactersRequest())
  }, [])

  const changePage = (event, value) => {
    setCurrentPage(value)
    dispatch(setPagination({
      offset: (value - 1) * count,
      page: value
    }))
    dispatch(getCharactersRequest())
  }

  return (
    <Section>
      <Container>
        <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
          <H1>Characters</H1>
          <Pagination page={currentPage} count={pageCount} onChange={changePage} color="secondary" className={'pagination'}/>
        </Grid>
        {isLoading ? 'Loading' : <CharactersList characters={items}/>}
      </Container>
    </Section>
  )
}

export default CharactersPage