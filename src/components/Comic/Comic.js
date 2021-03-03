import {ComicInfo} from "./Comic.styles";
import {H1, H2, Paragraph} from "../../styles/typography";
import PropTypes from 'prop-types';
import Thumbnail from "../../common/Thumbnail";
import {Box, Grid} from "@material-ui/core";


const Comic = ({title, description, thumbnail, creators = [], characters = []}) => {

  const creatorsList = creators.items && creators.items.map(creator => {
    return <ComicInfo key={creator.name}>{creator.role}: {creator.name}</ComicInfo>
  })

  const charactersList = characters.items && characters.items.map(hero => {
    return <ComicInfo key={hero.name}>{hero.name}</ComicInfo>
  })

  return (
    <Grid container direction="row" justify={"space-between"}>
      <Grid item xs={6}>
        <H1>{title}</H1>
        <Paragraph>{description}</Paragraph>
        <Grid container direction="row" justify={"space-between"}>
          <Box>
            <H2>Creators</H2>
            {creatorsList}
          </Box>
          <Box>
            <H2>Characters</H2>
            {charactersList}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Thumbnail thumbnail={thumbnail}/>
      </Grid>
    </Grid>
  )
}

Comic.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.object
}

export default Comic