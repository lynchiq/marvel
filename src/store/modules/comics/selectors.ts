import {RootState} from "../rootReducer";

export const selectComicsLoading = (state: RootState) =>
  state.comics.loading

