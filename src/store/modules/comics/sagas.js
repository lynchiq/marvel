import api from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getHeroComicsRequest, getHeroComicsSuccess} from "./slice";


function* fetchHeroComics(action) {
  try {
    let {data} =  yield call(api.get, `/characters/${action.payload.id}/comics`)
    yield put(getHeroComicsSuccess({data: data.data.results}))
  } catch (e) {

  }
}

export default all([takeLatest(getHeroComicsRequest, fetchHeroComics)]);