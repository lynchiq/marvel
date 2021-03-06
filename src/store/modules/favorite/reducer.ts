import {createEntityAdapter, createReducer} from "@reduxjs/toolkit";
import {HeroType} from "../heroes/types";
import {setFavoriteHero, unsetFavoriteHero} from "./actions";
import {RootState} from "../rootReducer";

const favoriteHeroesAdapter = createEntityAdapter<HeroType>({
  selectId: (hero) => hero.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const initialState = favoriteHeroesAdapter.getInitialState()

const favoriteHeroesReducer = createReducer(initialState, builder => {
  builder
    .addCase(setFavoriteHero, (state, action) => {
      favoriteHeroesAdapter.addOne(state, action.payload)
    })
    .addCase(unsetFavoriteHero, (state, action) => {
      favoriteHeroesAdapter.removeOne(state, action.payload)
    })
})

export const {
  selectById: selectFavoriteHero,
  selectAll: selectFavoriteHeroes
} = favoriteHeroesAdapter.getSelectors((state: RootState) => state.favoriteHeroes)

export default favoriteHeroesReducer