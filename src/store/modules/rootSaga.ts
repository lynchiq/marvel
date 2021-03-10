import { all } from '@redux-saga/core/effects';
// eslint-disable-next-line import/no-named-default
import { default as heroesSagas } from './heroes/sagas';
// eslint-disable-next-line import/no-named-default
import { default as comicsSagas } from './comics/sagas';

export function* rootSaga() {
  yield all([heroesSagas, comicsSagas]);
}
