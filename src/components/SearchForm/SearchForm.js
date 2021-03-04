import Input from "../../common/Input";
import Button from "../../common/Button";
import {useCallback, useEffect, useState} from "react";
import {StyledSearchForm} from "./SearchForm.styles";

const SearchForm = ({onSubmit, isLoading}) => {

  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)

  useEffect(() => {
    setInputError(isLoading)
  }, [isLoading])

  const handleChange = (value) => {
    setInputError(false)
    setInputValue(value)
  }

  const submitForm = useCallback(
    (e) => {
      e.preventDefault()

      if (inputValue === '') {
        setInputError(true)
        return
      }

      onSubmit({name: inputValue})
    },
    [inputValue, onSubmit]
  )

  return (
    <StyledSearchForm onSubmit={submitForm}>
      <Input placeholder={'Type superhero name here'} value={inputValue} onChange={handleChange} error={inputError} name={"name"} disabled={isLoading}/>
      <Button disabled={inputError} isLoading={isLoading}>Search</Button>
    </StyledSearchForm>
  )
}

export default SearchForm