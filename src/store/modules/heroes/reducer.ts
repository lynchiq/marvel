import {HeroType} from "../../../types/types";
import {createEntityAdapter, createReducer} from "@reduxjs/toolkit";
import {getHeroes, getHeroesByName, setHeroes, setHeroesCurrentPage, unsetHeroes} from "./actions";

export const heroesAdapter = createEntityAdapter<HeroType>({
  selectId: (hero) => hero.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const initialState = heroesAdapter.getInitialState({
  loading: false,
  currentPage: 1,
  total: 0,
})

const heroesReducer = createReducer(initialState, builder => {
  builder
    .addCase(getHeroes.request, (state) => {
      state.loading = true
    })
    .addCase(getHeroes.success, (state, action) => {
      heroesAdapter.removeAll(state)
      heroesAdapter.upsertMany(state, action.payload.heroes)

      state.loading = false
      state.total = action.payload.total
    })
    .addCase(getHeroesByName.request, (state, action) => {
      state.loading = true
    })
    .addCase(getHeroesByName.success, (state, action) => {
      state.loading = false
      heroesAdapter.removeAll(state)
      heroesAdapter.upsertMany(state, action.payload)
    })
    .addCase(setHeroes, (state, action) => {
      heroesAdapter.setAll(state, action.payload)
    })
    .addCase(unsetHeroes, (state) => {
      heroesAdapter.removeAll(state)
    })
    .addCase(setHeroesCurrentPage, (state, action) => {
      state.currentPage = action.payload
    })
})

export default heroesReducer