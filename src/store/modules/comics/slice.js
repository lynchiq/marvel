import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'comics',
  initialState: {
    item: {},
    items: [],
    offset: 0,
    isLoading: false
  },
  reducers: {
    getComicRequest: (state, action) => {
      state.isLoading = true
    },
    getHeroComicsRequest: (state, action) => {
      state.isLoading = true
    },
    setComicsOffset: (state, action) => {
      state.offset = action.payload
    },
    getComicSuccess: (state, action) => {
      state.item = action.payload.data
      state.isLoading = false
    },
    getHeroComicsSuccess: (state, action) => {
      state.items = [...state.items, ...action.payload.data.results]
      state.offset = action.payload.data.offset
      state.limit = action.payload.data.limit
      state.total = action.payload.data.total
      state.isLoading = false
    },
    getHeroComicsError: () => {

    }
  }
})

export const {
  setComicsOffset,
  getComicRequest,
  getComicSuccess,
  getHeroComicsRequest,
  getHeroComicsSuccess,
  getHeroComicsError
} = slice.actions

export default slice.reducer