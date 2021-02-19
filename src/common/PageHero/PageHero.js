import {PageHeroBg, PageHeroContentWrapper, PageHeroWrapper} from "./PageHero.styles";

const PageHero = ({img, children}) => {
  return (
    <PageHeroWrapper>
      <PageHeroBg img={img}/>
      <PageHeroContentWrapper>
        {children}
      </PageHeroContentWrapper>
    </PageHeroWrapper>
  )
}

export default PageHero