import {Grid} from "@material-ui/core";
import CharacterCard from "../CharacterCard";

const CharactersList = ({characters}) => {

  const charactersList = characters.map(character => {
    return (
      <Grid item xs={3}>
        <CharacterCard
          {...character}
          key={character.id}
        />
      </Grid>
    )
  })

  return (
    <>
      <Grid container spacing={7}>
        {charactersList}
      </Grid>
    </>
  )
}

export default CharactersList