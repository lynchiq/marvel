import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    favorite: (state, action) => {
      state.isLoading = true
      state.items = [...state.items, action.payload]
      console.log(state.items)
    },
    unfavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  }
})

export const {favorite, unfavorite} = slice.actions

export default slice.reducer