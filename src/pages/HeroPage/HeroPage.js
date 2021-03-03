import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useRouteMatch} from "react-router-dom"
import Hero from "../../components/Hero"
import {getHeroRequest} from "../../store/modules/hero/slice";
import {getHeroComicsRequest} from "../../store/modules/comics/slice";

const HeroPage = () => {
  let dispatch = useDispatch()
  let id = useRouteMatch("/characters/:id").params.id
  let {item, isLoading} = useSelector(store => store.hero)
  let comics = useSelector(store => store.comics.items)

  useEffect(() => {
    dispatch(getHeroRequest({id: id}))
    dispatch(getHeroComicsRequest({id: id}))
  }, [id])

  return (
    <>
      <Hero {...item} comics={comics}/>
    </>
  )
}

export default HeroPage