import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import {getComicRequest} from "../../store/modules/comics/slice";
import {useEffect} from "react";
import Comic from "../../components/Comic";
import {Container} from "@material-ui/core";

const ComicPage = () => {
  let dispatch = useDispatch()
  let id = useRouteMatch("/comics/:id").params.id
  let {item, isLoading} = useSelector(store => store.comics)

  useEffect(() => {
    dispatch(getComicRequest({id: id}))
  }, [])

  return (
    <Container>
        <Comic {...item}/>
    </Container>
  )
}

export default ComicPage