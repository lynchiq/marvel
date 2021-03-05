import styled, { createGlobalStyle } from 'styled-components'
import normalize from './normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  
  * {
    color: #fff;
    font-family: Bahnschrift, sans-serif;
    text-transform: uppercase;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none!important;
  }

  .MuiPaginationItem-root {
    color: #fff!important;
  }

  .MuiPaginationItem-textSecondary.Mui-selected{
    background-color: #e62429!important;
  }
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex-grow: 1;
  }
`

export const Section = styled.section`
  padding: 15px 0;
  overflow: hidden;
`