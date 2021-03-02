import {useEffect} from "react"
import Container from "../../common/Container";
import Section from "../../common/Section";
import {useDispatch, useSelector} from "react-redux";
import {charactersPageSelector} from "../../store/modules/characters/selectors";
import {getCharactersRequest} from "../../store/modules/characters/slice";
import CharacterCard from "../../components/CharacterCard";

const CharactersPage = () => {

  let dispatch = useDispatch()

  const {items, offset, favorites} = useSelector(charactersPageSelector)

  useEffect(() => {
    dispatch(getCharactersRequest(offset))
  }, [offset])

  const characters = items.map(character => {
    return (
      <CharacterCard key={character.id} {...character} favorite={favorites.includes(character)} toggleFavorite={() => {}}/>
    )
  })

  return (
    <>
      <Container>
        <Section>
          {characters}
        </Section>
      </Container>
    </>
  )
}

export default CharactersPage