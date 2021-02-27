import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'comics',
  initialState: {
    items: [],
    isLoading: false
  },
  reducers: {
    getHeroComicsRequest: (state, action) => {
      state.isLoading = true
    },
    getHeroComicsSuccess: (state, action) => {
      state.items = action.payload.data
      state.isLoading = false
    },
    getHeroComicsError: () => {

    }
  }
})

export const {
  getHeroComicsRequest,
  getHeroComicsSuccess,
  getHeroComicsError
} = slice.actions

export default slice.reducer