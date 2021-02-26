import styled from "styled-components";

export const StyledHero = styled.div`
  position: relative;
  overflow: auto;
  min-height: calc(100vh - 100px);
  color: #fff;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`

export const HeroName = styled.h1`
  text-transform: uppercase;
  font-size: 60px;
`

export const HeroDescription = styled.p`
  font-size: 30px;
`

export const HeroImgContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  
  img{
    height: 100%;
  }
`

export const HeroImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #350000c9;
`