export const charactersPageSelector = (state) => {
  return state.characters
}

export const favoriteCharactersSelector = (state) => {
  return state.characters.items.filter(item => item.favorite === true)
}

export const charactersPaginationSelector = (state) => {
  return state.characters.pagination
}