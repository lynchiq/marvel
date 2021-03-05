import {HeroContent, HeroDescription, HeroName, HeroThumbBg, HeroThumbContainer, StyledHero} from "./Hero.styles";
import {Container, Grid} from "@material-ui/core";
import createThumbnailSrc from "../../utils/createThumbnailSrc";
import ComicCard from "../ComicCard";
import PropTypes from "prop-types"
import stripHtml from "../../utils/stripHtml";
import {A} from "../../styles/typography";
import Button from "../../common/Button";

const Hero = ({name, description, thumbnail, comics = [], favorite, toggleFavorite}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  const comicsList = comics.map((item, i) => {

    if (i > 2) {
      return <></>
    }

    return (
      <Grid key={item.id} item sm={3} xs={12}>
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
          <HeroName>
            {name}
          </HeroName>
          <HeroDescription>{description ? stripHtml(description) : 'Sorry, description is empty.'}</HeroDescription>
          <Button onClick={toggleFavorite}>{favorite ? 'unfavorite' : 'favorite'}</Button>
          <Grid container item direction={"row"} alignItems={"center"}  justify={"center"} md={5} sm={12} xs={12}>
            {comicsList}
            <A to={'/comics'}>See all</A>
          </Grid>
        </HeroContent>
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