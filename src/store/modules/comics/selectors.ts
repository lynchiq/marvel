import {RootState} from "../rootReducer";
import {comicsAdapter} from "./reducer";

export const selectComicsLoading = (state: RootState) =>
  state.comics.loading

export const {
  selectById: selectComicById,
  selectAll: selectAllComics
} = comicsAdapter.getSelectors((state: RootState) => state.comics)