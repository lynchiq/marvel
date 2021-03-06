import {Headling} from "../../styles/typography";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid} from "@material-ui/core";
import CharactersList from "../../components/HeroesList";
import {Section} from "../../styles/global";
import SearchForm from "../../components/SearchForm";
import {RootState} from "../../store/modules/rootReducer";
import {selectAllHeroes} from "../../store/modules/heroes/reducer";
import {getHeroesByName, unsetHeroes} from "../../store/modules/heroes/actions";
import React, {useEffect} from "react";

type FormData = {
  name: string
}

const SearchPage = () => {

  const dispatch = useDispatch()

  const isLoading = useSelector((state : RootState) => state.heroes.loading)
  const heroes = useSelector((state: RootState) => selectAllHeroes(state))

  useEffect(() => {
    dispatch(unsetHeroes())
  },[])

  const handleSubmit = (data: FormData) => {
    dispatch(getHeroesByName.request(data.name))
  }

  return (
    <Container>
        <Section>
          <Box textAlign={"center"}>
            <Headling>Search superhero</Headling>
          </Box>
          <Box marginTop={7}>
            <SearchForm onSubmit={handleSubmit}  isLoading={isLoading}/>
            <Section>
              {
                isLoading
                  ? 'loading...'
                  : <Grid container>
                    <CharactersList heroes={heroes}/>
                  </Grid>
              }
            </Section>
          </Box>
        </Section>
    </Container>
  )
}

export default SearchPage