import styled from "styled-components";

type InputProps = {
  error: boolean;
};

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: none;
  padding: 4px 10px;
  border-bottom: 2px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.black};
  background: inherit;
  outline: none;
  font-size: 24px;
`;
