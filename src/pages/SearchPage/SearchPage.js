import {H1, Headling} from "../../styles/typography";
import {useDispatch, useSelector} from "react-redux";
import {searchHeroByNameRequest} from "../../store/modules/search/slice";
import {Box, Container, Grid} from "@material-ui/core";
import CharactersList from "../../components/HeroesList";
import {Section} from "../../styles/global";
import SearchForm from "../../components/SearchForm";
import {selectSearchPage} from "../../store/modules/search/selectors";

const SearchPage = () => {

  const dispatch = useDispatch()

  const {items, isLoading} = useSelector(selectSearchPage)

  const handleSubmit = (data) => {
    dispatch(searchHeroByNameRequest(data))
  }

  return (
    <Container>
        <Headling center={true}>Search superhero</Headling>

        <Box marginTop={7}>
          <SearchForm onSubmit={handleSubmit}  isLoading={isLoading}/>
          <Section>
            {
              isLoading
                ? 'loading...'
                : <Grid container>
                  <CharactersList characters={items}/>
                </Grid>
            }
          </Section>
        </Box>

    </Container>
  )
}

export default SearchPage