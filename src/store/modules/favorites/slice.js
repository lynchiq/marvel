import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: [1009368],
  },
  reducers: {
    favorite: (state, action) => {
      state.isLoading = true
      state.items = [
        ...state.items,
        action.payload
      ]
    },
    unfavorite: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload)
    },
  }
})

export const {favorite, unfavorite} = slice.actions

export default slice.reducer