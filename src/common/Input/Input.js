import {StyledInput} from "./Input.styles";

const Input = ({placeholder, name, value, onChange, error, disabled}) => {

  const handleChange = (e) => {
    let value = e.target.value
    onChange(value)
  }

  return <StyledInput error={error} type="text" placeholder={placeholder} value={value} onChange={handleChange} disabled={disabled}/>
}

export default Input