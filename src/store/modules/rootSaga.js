import {default as fetchHero} from './hero/sagas'
import {default as fetchCharacters} from './characters/sagas'
import {default as fetchSearchHero} from './search/sagas'
import {default as fetchHeroComics} from './comics/sagas'
import {all} from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([fetchHero, fetchCharacters, fetchSearchHero, fetchHeroComics]);
}