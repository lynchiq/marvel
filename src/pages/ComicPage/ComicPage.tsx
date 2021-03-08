import {useSelector} from "react-redux";
import Comic from "../../components/Comic";
import {Container} from "@material-ui/core";
import {Section} from "../../styles/global";
import {useParams} from "react-router-dom";
import {RootState} from "../../store/modules/rootReducer";
import { selectComicById } from "../../store/modules/comics/selectors";

const ComicPage = () => {
  const {comicId}: any = useParams();

  const comic = useSelector((state: RootState) => selectComicById(state, +comicId))

  if (!comic) {
    return (
      <Container>
        <Section>
          Comic not found!
        </Section>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        <Comic {...comic}/>
      </Section>
    </Container>
  )
}

export default ComicPage