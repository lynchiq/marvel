import React, {useState} from "react";

export type InputValidatorType = (value: string) => boolean

const useInput = (initialValue: string, validators: InputValidatorType[]) => {

  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  const isValid = () => {
    let valid = true

    validators.forEach(validator => {
      if (!validator(value)) {
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

  return {
    value,
    error,
    onChange,
    isValid
  }
}

export default useInput