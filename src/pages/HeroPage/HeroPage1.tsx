// import {useEffect, useState} from "react"
// import {useDispatch, useSelector} from "react-redux"
// import {useRouteMatch} from "react-router-dom"
// import Hero from "../../components/Hero"
// import {getHeroRequest} from "../../store/modules/hero/slice";
// import {getHeroComicsRequest} from "../../store/modules/comics/slice";
// import {selectHeroPage} from "../../store/modules/hero/selectors";
// import {selectComics} from "../../store/modules/comics/selectors";
// import {favoriteCharactersSelector} from "../../store/modules/characters/selectors";
// import {addToFavorites, removeFromFavorites} from "../../store/modules/characters/slice";
// import {Container} from "@material-ui/core";
// import {Section} from "../../styles/global";
//
// const HeroPage1 = () => {
//   let dispatch = useDispatch()
//   let id = 1
//   let {item, isLoading} = useSelector(selectHeroPage)
//   let comics = useSelector(selectComics)
//   const favorites = useSelector(favoriteCharactersSelector)
//
//   const heroIsFavorite = () => {
//     const res = favorites.find(i => i.id === item.id)
//     return !!res
//   }
//
//   const toggleFavorite = () => {
//     if (heroIsFavorite(item.id)) {
//       dispatch(removeFromFavorites(item))
//     } else {
//       dispatch(addToFavorites(item))
//     }
//   }
//
//   useEffect(() => {
//     dispatch(getHeroRequest({id: id}))
//     dispatch(getHeroComicsRequest({id: id}))
//   }, [id, dispatch])
//
//   if (isLoading) {
//     return (
//       <Container>
//         <Section>
//           Loading...
//         </Section>
//       </Container>
//     )
//   }
//
//   return <Hero {...item} comics={comics} toggleFavorite={toggleFavorite} favorite={heroIsFavorite()}/>
// }
//
// export default HeroPage1

export default {}