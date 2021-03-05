export const charactersPageSelector = (state) => {
  return state.characters
}

export const favoriteCharactersSelector = (state) => {
  return state.characters.favorites
}

export const charactersPaginationSelector = (state) => {
  return state.characters.pagination
}