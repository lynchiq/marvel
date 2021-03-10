import styled from 'styled-components';
import { H1 } from '../../styles/typography';

export const StyledHero = styled.div`
  position: relative;
  overflow: auto;
  min-height: calc(100vh - 96.53px);
  display: flex;
  align-items: center;

  ${H1} {
    margin-top: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;

  a {
    display: block;
    margin-bottom: 20px;
  }
`;

export const HeroName = styled.h1`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.xxl};

  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  text-transform: none;
  width: 70%;

  @media (max-width: 1055px) {
    width: 100%;
  }
`;

export const HeroThumbContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;

  img {
    height: 100%;
  }

  @media (max-width: 600px) {
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const HeroThumbBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #2d2f2d, #350000b8);

  @media (max-width: 600px) {
    background: linear-gradient(to top, #2d2f2d, #350000b8);
  }
`;
