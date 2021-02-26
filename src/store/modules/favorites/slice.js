import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    favorite: (state, action) => {
      state.isLoading = true
      state.items = [
        ...state.items,
        ...action.payload
      ]
    },
    unfavorite: (state, action) => {
      state.item = action.payload.data
      state.isLoading = false
    },
  }
})

export default slice.reducer