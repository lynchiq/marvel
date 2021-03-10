import { ThumbnailType } from '../types/types';

const createThumbnailSrc = (thumbnail: ThumbnailType) => (thumbnail ? [thumbnail.path, thumbnail.extension].join('.') : '');

export default createThumbnailSrc;
