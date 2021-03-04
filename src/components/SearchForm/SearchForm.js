import Input from "../../common/Input";
import Button from "../../common/Button";
import {useState} from "react";
import {StyledSearchForm} from "./SearchForm.styles";

const SearchForm = ({onSubmit}) => {

  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)

  const handleChange = (value) => {
    setInputError(false)
    setInputValue(value)
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (inputValue === '') {
      setInputError(true)
      return
    }

    onSubmit({name: inputValue})
  }

  return (
    <StyledSearchForm onSubmit={submitForm}>
      <Input placeholder={'Type superhero name here'} value={inputValue} onChange={handleChange} error={inputError} name={"name"}/>
      <Button disabled={inputError}>Search</Button>
    </StyledSearchForm>
  )
}

export default SearchForm