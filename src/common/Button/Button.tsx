import React from 'react';
import { StyledButton, StyledButtonText } from './Button.styles';

type Props = {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button = ({
  text,
  onClick,
  isLoading,
  disabled,
}: Props) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    <StyledButtonText>{isLoading ? 'loading...' : text}</StyledButtonText>
  </StyledButton>
);

Button.defaultProps = {
  onClick: () => {},
  isLoading: false,
  disabled: false,
};

export default Button;
