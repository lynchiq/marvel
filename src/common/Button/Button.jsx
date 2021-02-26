import {StyledButton, StyledButtonText} from "./Button.styles";

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={(e) => onClick(e)}>
      <StyledButtonText>
        {children}
      </StyledButtonText>
    </StyledButton>
  )
}

export default Button