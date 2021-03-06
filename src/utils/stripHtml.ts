const stripHtml = (string: string) => {
  return string.replace(/(<([^>]+)>)/gi, "")
}

export default stripHtml