import styled from "styled-components";
import {Link} from "react-router-dom";

export const ComicCardBg = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  background: #040303cf;
  transition: background 2s;
`

export const StyledComicCard = styled(Link)`
  display: block;
  position: relative;
  cursor: pointer;
  margin: 10px;
  
  :hover ${ComicCardBg} {
    display: flex;
  }
`



export const ComicCardImg = styled.img`
  width: 100%;
`