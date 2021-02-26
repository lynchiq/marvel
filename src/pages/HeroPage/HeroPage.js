import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import {char as item} from "../../data"
import Hero from "../../components/Hero";

const HeroPage = () => {
  let dispatch = useDispatch()
  let id = useRouteMatch("/characters/:id").params.id
  let {isLoading} = useSelector(store => store.hero)

  // useEffect(() => {
  //   //   dispatch(getHeroRequest({id: id}))
  //   // }, [id])

  return isLoading ? <div>Loading</div> : (
    <>
      <Hero {...item}/>
    </>
  )
}

export default HeroPage