import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'search',
  initialState: {
    items: [],
    isLoading: false,
    error: ''
  },
  reducers: {
    searchHeroByNameRequest: (state, action) => {
      state.isLoading = true
    },
    searchHeroByNameSuccess: (state, action) => {
      state.items = action.payload.data
      state.isLoading = false
    }
  }
})

export const {
  searchHeroByNameRequest,
  searchHeroByNameSuccess
} = slice.actions

export default slice.reducer