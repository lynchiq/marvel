import styled from "styled-components";
import {Link} from "react-router-dom";

export const CharacterCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FavoriteBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #000000;
  border-radius: 0 0 0 10px;

  ::after {
    content: '♥';
    font-size: 30px;
  }

  :hover {
    background: #545454;
  }
`

export const CharacterUnfavorite = styled(FavoriteBtn)`
  ::after {
    color: #fff;
  }
`

export const CharacterFavorite = styled(FavoriteBtn)`
  ::after {
    color: #e62429;
  }
`

export const CharacterCardImg = styled.img`
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
`

export const CharacterContentBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  cursor: pointer;
  width: 100%;
  background: #000;
  text-align: center;

  :hover{
    background: #e62429;
  }
`

export const CharacterCardName = styled.h3`
  color: #fff;
  font-size: 20px;
`