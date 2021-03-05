import {Grid} from "@material-ui/core";
import HeroCard from "../HeroCard";
import {Hero} from "../../store/modules/heroes/types";
import React from "react";

type Props = {
  heroes: Hero[]
}

const HeroesList: React.FunctionComponent<Props> = ({heroes}) => {

  const charactersList = heroes.map((hero, i) => {
    return (
      <Grid item lg={3} md={4} sm={6} key={hero.id}>
        <HeroCard
          id={hero.id}
          name={hero.name}
          thumbnail={hero.thumbnail}
          description={hero.description}
        />
      </Grid>
    )
  })

  return (
    <Grid container spacing={2}>
      {charactersList}
    </Grid>
  )
}

export default HeroesList