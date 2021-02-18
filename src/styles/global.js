import { createGlobalStyle } from 'styled-components'
import './normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto,Trebuchet MS,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`