import styled from "styled-components";

export const CharacterContentBox = styled.div`
  width: 100%;
  background: #000;
  text-align: center;
`

export const CharacterCardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover ${CharacterContentBox} {
      background: #e62429;
  }
`

export const CharacterCardImg = styled.img`
  width: 100%;
`



export const CharacterCardName = styled.h3`
  color: #fff;
`