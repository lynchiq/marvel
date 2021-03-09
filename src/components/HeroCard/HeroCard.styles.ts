import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeroCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroCardThumbnail = styled.img`
  width: 100%;
  max-height: 280px;
  min-height: 280px;
  object-fit: cover;
`;

export const HeroCardName = styled(Link)`
  cursor: pointer;
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.sm};

  :hover {
    background-color: ${(props) => props.theme.colors.red};
  }
`;
