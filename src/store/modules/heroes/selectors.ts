import {RootState} from "../rootReducer";
import {heroesAdapter} from "./reducer";

export const selectHeroesCurrentPage = (state: RootState) =>
  state.heroes.currentPage

export const selectCurrentHeroesTotal = (state: RootState) =>
  state.heroes.total

export const {
  selectById: selectHeroById,
  selectAll: selectAllHeroes
} = heroesAdapter.getSelectors((state: RootState) => state.heroes)