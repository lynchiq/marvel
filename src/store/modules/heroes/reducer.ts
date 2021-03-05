import {Hero} from "./types";
import {createEntityAdapter, createReducer} from "@reduxjs/toolkit";
import {getHeroes} from "./actions";
import {RootState} from "../rootReducer";

const heroesAdapter = createEntityAdapter<Hero>({
  selectId: (hero) => hero.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const initialState = heroesAdapter.getInitialState({loading: false})

const heroesReducer = createReducer(initialState, builder => {
  builder
    .addCase(getHeroes.request, (state) => {
      state.loading = true
    })
    .addCase(getHeroes.success, (state, action) => {
      state.loading = false
      heroesAdapter.upsertMany(state, action.payload)
    })
})

export const {
  selectAll: selectAllHeroes
} = heroesAdapter.getSelectors((state: RootState) => state.heroes)

export default heroesReducer