const createThumbnailSrc = (thumbnail) => {
  return thumbnail ? [thumbnail.path, thumbnail.extension].join('.') : ''
}

export default createThumbnailSrc