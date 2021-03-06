import {StyledInput} from "./Input.styles";
import React from "react";

type Props = {
  placeholder: string,
  name: string,
  value: string,
  onChange: (value: string) => void,
  error: boolean,
  disabled: boolean
}

const Input: React.FC<Props> = ({placeholder, name, value, onChange, error, disabled}) => {

  const handleChange = (e: any) => {
    let value = e.target.value
    onChange(value)
  }

  return <StyledInput error={error} type="text" placeholder={placeholder} value={value} onChange={handleChange} disabled={disabled}/>
}

export default Input