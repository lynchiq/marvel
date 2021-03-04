import {StyledButton, StyledButtonText} from "./Button.styles";

const Button = ({children, onClick = () => {}, disabled}) => {

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <StyledButtonText>
        {children}
      </StyledButtonText>
    </StyledButton>
  )
}

export default Button