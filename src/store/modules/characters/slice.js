import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    isLoading: false
  },
  reducers: {
    getCharactersRequest: (state, action) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.items = action.payload.data.results
      state.offset = action.payload.data.offset
      state.limit = action.payload.data.limit
      state.total = action.payload.data.total
      state.count = action.payload.data.count
      state.isLoading = false
    }
  }
})

export const {
  getCharactersRequest,
  getCharactersSuccess
} = slice.actions

export default slice.reducer