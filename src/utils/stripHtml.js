const stripHtml = (string) => {
  return string.replace(/(<([^>]+)>)/gi, "")
}

export default stripHtml