import {
  HeroComics,
  HeroContent,
  HeroDescription,
  HeroName,
  HeroThumbBg,
  HeroThumbContainer,
  StyledHero
} from "./Hero.styles";
import {Container, Grid} from "@material-ui/core";
import createThumbnailSrc from "../../utils/createThumbnailSrc";
import ComicCard from "../ComicCard";
import {Link} from "react-router-dom";
import PropTypes, {array} from "prop-types"

const Hero = ({name, description, thumbnail, comics = []}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  const comicsList = comics.map((item, i) => {

    if (i > 3) {
      return
    }

    return (
      <Grid item sm={3} xl={6}>
        <ComicCard {...item}/>
      </Grid>
    )
  })

  return (
    <StyledHero>
      <HeroThumbContainer>
        <HeroThumbBg/>
        <img src={thumbSrc} alt={name}/>
      </HeroThumbContainer>
      <Container>
        <HeroContent>
          <HeroName>{name}</HeroName>
          <HeroDescription>{description ? description : 'Description is empty'}</HeroDescription>
        </HeroContent>
        <Grid container direction={"row"} lg={5}>
          {comicsList}
        </Grid>
        <Link to={'/comics'}>See all comics</Link>
      </Container>
    </StyledHero>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.object,
  comics: PropTypes.array
}

export default Hero