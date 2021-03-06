import { createEntityAdapter, createReducer } from '@reduxjs/toolkit';
import { HeroType } from '../../../types/types';
import { setFavoriteHero, unsetFavoriteHero } from './actions';

export const favoriteHeroesAdapter = createEntityAdapter<HeroType>({
  selectId: (hero) => hero.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = favoriteHeroesAdapter.getInitialState();

const favoriteHeroesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteHero, (state, action) => {
      favoriteHeroesAdapter.addOne(state, action.payload);
    })
    .addCase(unsetFavoriteHero, (state, action) => {
      favoriteHeroesAdapter.removeOne(state, action.payload);
    });
});

export default favoriteHeroesReducer;
