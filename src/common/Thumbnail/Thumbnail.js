import createThumbnailSrc from "../../utils/createThumbnailSrc";
import {StyledThumbnail} from "./Thumbnail.styles";

const Thumbnail = ({thumbnail}) => {

  const thumbSrc = createThumbnailSrc(thumbnail)

  return <StyledThumbnail src={thumbSrc}/>
}

export default Thumbnail