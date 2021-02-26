import { createGlobalStyle } from 'styled-components'
import normalize from './normalize.css';

export const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  
  * {
    color: #fff;
    font-family: Bahnschrift, sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`