const stripHtml = (string: string) => (string ? string.replace(/(<([^>]+)>)/gi, '') : '');

export default stripHtml;
