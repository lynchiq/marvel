import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
`

export const Hero = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  color: #fff;
`

export const HeroContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
`

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https\\:\\/\\/terrigen-cdn-dev\\.marvel\\.com\\/content\\/prod\\/1x\\/characters_art_mas_dsk_01\\.jpg");
`

export const HeroTitle = styled.h1`
  text-transform: uppercase;
  font-size: 42px;
`

export const H2 = styled.h2`
  text-transform: uppercase;
`