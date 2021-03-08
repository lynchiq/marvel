import {Grid} from "@material-ui/core";
import HeroCard from "../HeroCard";
import {HeroType} from "../../types/types";
import React from "react";

type Props = {
  heroes: HeroType[]
}

const HeroesList: React.FunctionComponent<Props> = ({heroes}) => {

  const heroesList = heroes.map((hero, i) => {
    return (
      <Grid key={hero.id} item lg={3} md={4} sm={6}>
        <HeroCard {...hero}/>
      </Grid>
    )
  })

  return (
    <Grid container spacing={2}>
      {heroesList}
    </Grid>
  )
}

export default HeroesList