import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'comics',
  initialState: {
    item: {},
    items: [],
    isLoading: false
  },
  reducers: {
    getComicRequest: (state, action) => {
      state.isLoading = true
    },
    getHeroComicsRequest: (state, action) => {
      state.isLoading = true
    },
    getComicSuccess: (state, action) => {
      state.item = action.payload.data
      state.isLoading = false
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
  getComicRequest,
  getComicSuccess,
  getHeroComicsRequest,
  getHeroComicsSuccess,
  getHeroComicsError
} = slice.actions

export default slice.reducer