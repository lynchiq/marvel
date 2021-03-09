import { StyledButton, StyledButtonText } from "./Button.styles";
import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{isLoading ? "loading..." : text}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
