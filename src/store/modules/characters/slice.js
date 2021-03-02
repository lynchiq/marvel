import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    favorites: [],
    pagination: {
      offset: undefined,
      limit: undefined,
      total: undefined,
      count: undefined
    },
    fake: [],
    isLoading: false
  },
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload.offset
    },
    getCharactersRequest: (state, action) => {
      state.pagination.offset = action.payload
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      let favs = [...state.favorites]
      const byId = action.payload.data.results.reduce((byId, character) => {
        character.favorite = favs.includes(character.id)
        byId[character.id] = character
        return byId
      }, [])

      state.items = byId

      state.pagination.limit = action.payload.data.limit
      state.pagination.total = action.payload.data.total
      state.pagination.count = action.payload.data.count
      state.pagination.offset = action.payload.data.offset
      state.isLoading = false
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
      state.items[action.payload].favorite = true
    },
    searchFavoritesRequest: () => {

    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload)
      state.items[action.payload].favorite = false
    },
  }
})

export const {
  setOffset,
  getCharactersRequest,
  getCharactersSuccess,
  addToFavorites,
  removeFromFavorites
} = slice.actions

export default slice.reducer