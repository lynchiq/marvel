import {Grid} from "@material-ui/core";
import HeroCard from "../HeroCard";

const CharactersList = ({characters}) => {


  const charactersList = characters.map((hero, i) => {
    return (
      <Grid item lg={3} md={4} sm={6} key={hero.id}>
        <HeroCard
          id={hero.id}
          name={hero.name}
          thumbnail={hero.thumbnail}
          favorite={true}
        />
      </Grid>
    )
  })

  return (
    <>
      <Grid container spacing={2}>
        {charactersList}
      </Grid>
    </>
  )
}

export default CharactersList