import styled from "styled-components";
import {H1, Paragraph} from "../../styles/typography";
import characters from "../../assets/characters.jpg"


export const HomePageHero = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${characters});
  background-color: #000000d9;
  text-transform: uppercase;

  ${H1} {
    margin: 0;
    font-size: 72px;
  }

  ${Paragraph} {
    font-size: 36px;
  }
`
