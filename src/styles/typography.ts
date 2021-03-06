import styled from 'styled-components';
import {Link} from "react-router-dom";

export const H1 = styled.h1`
`

export const H2 = styled.h2`
`

export const H3 = styled.h3`
`

export const Paragraph = styled.p`
`

export const Headling = styled(H1)`
  font-size: ${props => props.theme.fontSizes.lg};
`

export const A = styled(Link)`
  :hover{
    color: ${props => props.theme.colors.red};
  }
`