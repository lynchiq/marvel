import {StyledInput} from "./Input.styles";

const Input = ({placeholder, name, value, onChange, error}) => {

  const handleChange = (e) => {
    let value = e.target.value
    onChange(value)
  }

  return <StyledInput error={error} type="text" placeholder={placeholder} value={value} onChange={handleChange}/>
}

export default Input