import {default as fetchHero} from './hero/sagas'
import {default as fetchCharacters} from './characters/sagas'
import {all} from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([fetchHero, fetchCharacters]);
}