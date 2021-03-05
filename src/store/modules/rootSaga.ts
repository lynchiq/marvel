import {all} from "@redux-saga/core/effects";
import {default as fetchHeroes} from "./heroes/sagas"

export function* rootSaga() {
  yield all([fetchHeroes]);
}