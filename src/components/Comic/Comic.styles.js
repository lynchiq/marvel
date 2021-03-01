import styled from "styled-components";

export const StyledComic = styled.div`
  display: flex;
`

export const ComicContent = styled.div``

export const ComicTitle = styled.h1`
  margin-top: 0;
  text-transform: uppercase;
  font-size: 36px;
`

export const ComicDescription = styled.p`
  font-size: 24px;
`

export const ComicThumbnailContainer = styled.div`
  margin-right: 50px;
`

export const ComicThumbnail = styled.img`
  width: 100%;
`

export const ComicInfoList = styled.div`
  flex: 1;
`

export const ComicInfo = styled.div`
  :not(:first-child){
    margin-top: 10px;
  }
`


