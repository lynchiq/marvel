import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.items = action.payload
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload)
    }
  }
})

export const {
  addToFavorite,
  removeFromFavorites
} = slice.actions

export default slice.reducer