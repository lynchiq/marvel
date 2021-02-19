import {StyledButton, StyledButtonText} from "./Button.styles";

const Button = ({children}) => {
  return (
    <StyledButton>
      <StyledButtonText>
        {children}
      </StyledButtonText>
    </StyledButton>
  )
}

export default Button