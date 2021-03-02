import styled, { createGlobalStyle } from 'styled-components'
import normalize from './normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  
  * {
    color: #fff;
    font-family: Bahnschrift, sans-serif;
  }
  
  a {
    text-decoration: none!important;
    color: inherit!important;
  }
`

export const Section = styled.section`
  padding: 15px 0;
  overflow: hidden;
`