import {
  all, call, put, takeLatest,
} from '@redux-saga/core/effects';
import api from '../../../services/api';
import { getComics, getMoreComics } from './actions';

type getComicsRequestType = {
  payload: number;
};

function* fetchHeroComics({ payload }: getComicsRequestType) {
  try {
    const { data } = yield call(api.get, `/characters/${payload}/comics`);
    yield put(getComics.success(data.data.results));
  } catch (e) {
    yield put(getComics.error());
  }
}

type getMoreComicsRequestType = {
  payload: {
    id: number;
    offset: number;
  };
};

function* fetchMoreHeroComics({ payload }: getMoreComicsRequestType) {
  try {
    const { data } = yield call(api.get, `/characters/${payload.id}/comics`, {
      params: {
        offset: payload.offset,
      },
    });
    yield put(getMoreComics.success(data.data.results));
  } catch (e) {
    yield put(getMoreComics.error());
  }
}

export default all([
  takeLatest(getComics.request, fetchHeroComics),
  takeLatest(getMoreComics.request, fetchMoreHeroComics),
]);
