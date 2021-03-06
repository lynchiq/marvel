import Input from "../../common/Input";
import Button from "../../common/Button";
import React, {useCallback, useEffect, useState} from "react";
import {StyledSearchForm} from "./SearchForm.styles";

type Props = {
  onSubmit: (data: FormData) => void,
  isLoading: boolean
}

type FormData = {
  name: string
}

const SearchForm: React.FC<Props> = ({onSubmit, isLoading}) => {

  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)

  useEffect(() => {
    setInputError(isLoading)
  }, [isLoading])

  const handleChange = (value: string) => {
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
      <Button text={'Search'} disabled={inputError} isLoading={isLoading}/>
    </StyledSearchForm>
  )
}

export default SearchForm