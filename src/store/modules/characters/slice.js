import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    favorites: [],
    pagination: {
      offset: 0,
      limit: undefined,
      total: undefined,
      count: undefined,
      page: 1
    },
    isLoading: false
  },
  reducers: {
    getCharactersRequest: (state, action) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.items = action.payload.data.results.reduce((byId, character) => {
        byId[character.id] = character
        return byId
      }, [])

      state.pagination.limit = action.payload.data.limit
      state.pagination.total = action.payload.data.total
      state.pagination.count = action.payload.data.count
      state.pagination.offset = action.payload.data.offset
      state.isLoading = false
    },
    setPagination: (state, action) => {
      state.pagination.offset = action.payload.offset
      state.pagination.page = action.payload.page
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id)
    },
  }
})


export const {
  addToFavorites,
  getCharactersRequest,
  getCharactersSuccess,
  setPagination,
  removeFromFavorites
} = slice.actions

export default slice.reducer