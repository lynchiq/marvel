import {useState} from "react"
import Container from "../../common/Container";
import {H1} from "../../styles/typography";
import Input from "../../common/Input";
import Button from "../../common/Button";
import {useDispatch, useSelector} from "react-redux";
import {searchHeroByNameRequest} from "../../store/modules/search/slice";
import Section from "../../common/Section";
import {SearchContainer} from "../../containers";

const SearchPage = () => {

  const dispatch = useDispatch()
  const [searchedName, setSearchedName] = useState('');


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
        <SearchContainer/>
      </Section>
    </Container>
  )
}

export default SearchPage