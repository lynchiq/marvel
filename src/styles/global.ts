import styled, { createGlobalStyle } from "styled-components";
import normalize from "./normalize.css";
import Marvel from "../assets/fonts/Marvel/Marvel-Bold.ttf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  
  ${normalize}


  @font-face {
    font-family: "Marvel";
    src: url(${Marvel});
  }

  * {
    color: #fff;
    font-family: 'Marvel', sans-serif;
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
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
`;

export const Main = styled.main`
  position: relative;
  background-color: #2d2f2d;
`;

export const Section = styled.section`
  padding: 15px 0;
  overflow: hidden;
`;
