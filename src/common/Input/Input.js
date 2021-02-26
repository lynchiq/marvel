import {StyledInput} from "./Input.styles";

const Input = ({placeholder, name, value, onChange}) => {
  return <StyledInput type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
}

export default Input