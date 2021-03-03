import styled from "styled-components";

export const FavoriteBtn = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: ${props => props.favorite ? props.theme.colors.red : props.theme.colors.black};
`

export default FavoriteBtn