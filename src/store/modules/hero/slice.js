import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'hero',
  initialState: {
    item: {
      comics: {
        items: []
      }
    },
    isLoading: false,
    error: ''
  },
  reducers: {
    getHeroRequest: (state) => {
      state.isLoading = true
    },
    getHeroSuccess: (state, action) => {
      state.item = action.payload.data
      state.isLoading = false
    },
    getHeroFailure: (state, action) => {
      state.data = action.payload.data.data.results
      state.isLoading = false
    },
  }
})

export const {
  getHeroRequest,
  getHeroSuccess,
  getHeroFailure
} = slice.actions

export default slice.reducer