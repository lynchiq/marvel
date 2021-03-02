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
    isLoading: false
  },
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload.offset
    },
    getCharactersRequest: (state) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.items = action.payload.data.results
      state.pagination.limit = action.payload.data.limit
      state.pagination.total = action.payload.data.total
      state.pagination.count = action.payload.data.count
      state.isLoading = false
    },
    favorite: (state, action) => {
      state.items.push(action.payload)
    },
    unfavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  }
})

export const {
  setOffset,
  getCharactersRequest,
  getCharactersSuccess,
  favorite,
  unfavorite
} = slice.actions

export default slice.reducer