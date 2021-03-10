import { RootState } from '../rootReducer';
import { favoriteHeroesAdapter } from './reducer';

export const {
  selectById: selectFavoriteHero,
  selectAll: selectFavoriteHeroes,
} = favoriteHeroesAdapter.getSelectors(
  (state: RootState) => state.favoriteHeroes,
);
