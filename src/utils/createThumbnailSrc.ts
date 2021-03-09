import { ThumbnailType } from "../types/types";

const createThumbnailSrc = (thumbnail: ThumbnailType) => {
  return thumbnail ? [thumbnail.path, thumbnail.extension].join(".") : "";
};

export default createThumbnailSrc;
