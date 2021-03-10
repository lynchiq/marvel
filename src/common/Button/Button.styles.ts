import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.black};

  :hover {
    background-color: ${(props) => props.theme.colors.red};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.disabled};
  }
`;

export const StyledButtonText = styled.span`
  color: ${(props) => props.theme.colors.white};
`;
