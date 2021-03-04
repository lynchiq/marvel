import {H1} from "../../styles/typography";
import {useDispatch, useSelector} from "react-redux";
import {searchHeroByNameRequest} from "../../store/modules/search/slice";
import {Container, Grid} from "@material-ui/core";
import CharactersList from "../../components/CharactersList";
import {Section} from "../../styles/global";
import SearchForm from "../../components/SearchForm";

const SearchPage = () => {

  const dispatch = useDispatch()

  const {items, isLoading} = useSelector(state => state.search)

  const handleSubmit = (data) => {
    dispatch(searchHeroByNameRequest(data))
  }

  return (
    <Container>
        <H1>Search superhero</H1>

        <SearchForm onSubmit={handleSubmit}/>

        <Section>
          {
            isLoading
              ? 'loading...'
              : <Grid>
                <CharactersList characters={items}/>
              </Grid>
          }
        </Section>

    </Container>
  )
}

export default SearchPage