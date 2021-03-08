import React, {useState} from "react";

export type InputValidatorType = (value: string) => boolean

const useInput = (initialValue: string, validators: InputValidatorType[]) => {

  const [value, setValue] = useState(initialValue)
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState(false)

  const isValid = () => {
    let valid = true

    validators.forEach(validator => {
      let result = validator(value)

      if (!result) {
        valid = false
        setError(true)
        return
      }

      setError(false)
    })

    return valid
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true)
  }

  return {
    value,
    error,
    onChange,
    onBlur,
    isValid
  }
}

export default useInput