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
  background-color: ${props => props.theme.colors.overlay};

  @media ${props => props.theme.device.tablet} {
    height: 250px;
  }

  ${H1} {
    margin: 0;
    font-size: ${props => props.theme.fontSizes.xxl};
    
    @media ${props => props.theme.device.laptop} {
      font-size: ${props => props.theme.fontSizes.xl};
    }

    @media ${props => props.theme.device.tablet} {
      font-size: ${props => props.theme.fontSizes.lg};
    }
  }

  ${Paragraph} {
    font-size: ${props => props.theme.fontSizes.lg};

    @media ${props => props.theme.device.laptop} {
      font-size: ${props => props.theme.fontSizes.md};
    }

    @media ${props => props.theme.device.tablet} {
      font-size: ${props => props.theme.fontSizes.sm};
    }
  }
`
