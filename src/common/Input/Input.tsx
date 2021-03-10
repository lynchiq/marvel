import React from 'react';
import { StyledInput } from './Input.styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  disabled: boolean;
};

const Input = ({
  placeholder,
  value,
  onChange,
  error,
  disabled,
}: Props) => (
  <StyledInput
    error={error}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

export default Input;
