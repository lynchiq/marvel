import {Section} from "../../styles/global";
import {Container, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getHeroes} from "../../store/modules/heroes/actions";
import {RootState} from "../../store/modules/rootReducer";
import {selectAllHeroes} from "../../store/modules/heroes/reducer";
import {Headling} from "../../styles/typography";
import HeroesList from "../../components/HeroesList/HeroesList";
import React, {useEffect} from "react";

const HeroesPage: React.FunctionComponent = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector((state : RootState) => state.heroes.loading)
  const heroes = useSelector((state: RootState) => selectAllHeroes(state))

  useEffect(() => {
    dispatch(getHeroes.request())
  }, [dispatch])

  return (
    <Section>
      <Container>
        <Grid container direction={"row"} justify={"space-between"} alignItems={"center"}>
          <Headling>Characters</Headling>
        </Grid>
        {isLoading ? 'Loading' : <HeroesList heroes={heroes}/>}
      </Container>
    </Section>
  )
}

export default HeroesPage