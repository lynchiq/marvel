import {StyledInput} from "./Input.styles";
import React from "react";

type Props = {
  placeholder: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error: boolean,
  disabled: boolean
}

const Input: React.FC<Props> = ({placeholder, name, value, onChange, error, disabled}) => {
  return <StyledInput error={error} type="text" placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}/>
}

export default Input