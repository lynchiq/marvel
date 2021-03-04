import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useRouteMatch} from "react-router-dom"
import Hero from "../../components/Hero"
import {getHeroRequest} from "../../store/modules/hero/slice";
import {getHeroComicsRequest} from "../../store/modules/comics/slice";
import {selectHeroPage} from "../../store/modules/hero/selectors";
import {selectComics} from "../../store/modules/comics/selectors";

const HeroPage = () => {
  let dispatch = useDispatch()
  let id = useRouteMatch("/characters/:id").params.id
  let {item, isLoading} = useSelector(selectHeroPage)
  let comics = useSelector(selectComics)

  useEffect(() => {
    dispatch(getHeroRequest({id: id}))
    dispatch(getHeroComicsRequest({id: id}))
  }, [id, dispatch])

  return (
    <>
      <Hero {...item} comics={comics}/>
    </>
  )
}

export default HeroPage