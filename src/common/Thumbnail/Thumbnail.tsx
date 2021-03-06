import createThumbnailSrc from "../../utils/createThumbnailSrc";
import {StyledThumbnail} from "./Thumbnail.styles";
import {ThumbnailType} from "../../types/types";
import React from "react";

type Props = {
  thumbnail: ThumbnailType
}

const Thumbnail: React.FC<Props> = ({thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return <StyledThumbnail src={thumbSrc}/>
}

export default Thumbnail