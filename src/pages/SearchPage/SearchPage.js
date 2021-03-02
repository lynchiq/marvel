import {useState} from "react"
import Container from "../../common/Container";
import {H1} from "../../styles/typography";
import Input from "../../common/Input";
import Button from "../../common/Button";
import {useDispatch, useSelector} from "react-redux";
import {searchHeroByNameRequest} from "../../store/modules/search/slice";
import Section from "../../common/Section";
import CharacterCard from "../../components/CharacterCard";
import Grid from "../../common/Grid";

const SearchPage = () => {

  const dispatch = useDispatch()
  const [searchedName, setSearchedName] = useState('');

  const {items, isLoading} = useSelector(state => state.search)

  const heroes = items.map(hero => {
    return <CharacterCard key={hero.id} id={hero.id} name={hero.name}
                          img={hero.thumbnail.path + '.' + hero.thumbnail.extension} favorite={true}/>
  })

  const handleChange = (name) => {
    setSearchedName(name)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(searchHeroByNameRequest({name: searchedName}))
  }

  return (
    <Container>
      <Section>
        <H1>Search your favorite superhero</H1>
        <Input placeholder={'Type superhero name here'} value={searchedName} onChange={handleChange}/>
        <Button onClick={handleClick}>Search</Button>
      </Section>
      <Section>
        <Grid>
          {heroes.length ? heroes : <div>Nothing found</div>}
        </Grid>
      </Section>
    </Container>
  )
}

export default SearchPage