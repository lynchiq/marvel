import {RootState} from "../rootReducer";

export const selectHeroesCurrentPage = (state: RootState) =>
  state.heroes.currentPage

export const selectCurrentHeroesTotal = (state: RootState) =>
  state.heroes.total