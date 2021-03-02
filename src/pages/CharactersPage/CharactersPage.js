import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {charactersPageSelector} from "../../store/modules/characters/selectors"
import {getCharactersRequest} from "../../store/modules/characters/slice"
import {Container} from "@material-ui/core"
import {H1} from "../../styles/typography";
import {Section} from "../../styles/global";
import CharactersList from "../../components/CharactersList";

const CharactersPage = () => {

  let dispatch = useDispatch()

  const {items, offset, isLoading} = useSelector(charactersPageSelector)

  useEffect(() => {
    dispatch(getCharactersRequest(offset))
  }, [offset])

  return (
    <Section>
      <Container>
        <H1>Characters</H1>
        {isLoading ? 'Loading' : <CharactersList characters={items}/>}
      </Container>
    </Section>
  )
}

export default CharactersPage