import styled from "styled-components";
import {H1} from "../../styles/typography";

export const PageHeroWrapper = styled.div`
  position: relative;
  height: 400px;
`

export const PageHeroBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
`

export const PageHeroContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000a6;
  
  ${H1} {
    font-size: 44px;
    text-transform: uppercase;
    color: #fff;
    font-family: Calibri,serif;
  }
`