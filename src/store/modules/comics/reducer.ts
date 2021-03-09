import {createEntityAdapter, createReducer} from "@reduxjs/toolkit";
import {ComicType} from "../../../types/types";
import {getComics, getMoreComics} from "./actions";

export const comicsAdapter = createEntityAdapter<ComicType>({
  selectId: (comic) => comic.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const initialState = comicsAdapter.getInitialState({
  loading: false
})

const comicsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getComics.request, (state, action) => {
      comicsAdapter.removeAll(state)
      state.loading = true
    })
    .addCase(getComics.success, (state, action) => {
      comicsAdapter.upsertMany(state, action.payload)
      state.loading = false
    })
    .addCase(getComics.error, (state) => {
      state.loading = false
    })
    .addCase(getMoreComics.request, (state, action) => {
      state.loading = true
    })
    .addCase(getMoreComics.success, (state, action) => {
      comicsAdapter.upsertMany(state, action.payload)
      state.loading = false
    })
    .addCase(getMoreComics.error, (state) => {
      state.loading = false
    })
})

export default comicsReducer
