import { all } from "@redux-saga/core/effects";
import { default as heroesSagas } from "./heroes/sagas";
import { default as comicsSagas } from "./comics/sagas";

export function* rootSaga() {
  yield all([heroesSagas, comicsSagas]);
}
