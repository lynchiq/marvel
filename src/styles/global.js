import { createGlobalStyle } from 'styled-components'
import normalize from './normalize.css';

export const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  
  a {
    text-decoration: none;
    color: inherit;
  }
`