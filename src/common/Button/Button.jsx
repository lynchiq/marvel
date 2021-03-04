import {StyledButton, StyledButtonText} from "./Button.styles";

const Button = ({children, onClick = () => {}, disabled, isLoading = false}) => {

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {
        isLoading
          ? <span>Loading...</span>
          : <StyledButtonText>
            {children}
          </StyledButtonText>
      }
    </StyledButton>
  )
}

export default Button