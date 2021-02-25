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
    setOffset: (state, action) => {
      state.offset = action.payload.offset
    },
    getCharactersRequest: (state) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.items = action.payload.data.results
      state.limit = action.payload.data.limit
      state.total = action.payload.data.total
      state.count = action.payload.data.count
      state.isLoading = false
    }
  }
})

export const {
  setOffset,
  getCharactersRequest,
  getCharactersSuccess
} = slice.actions

export default slice.reducer