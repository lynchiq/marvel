import api from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getComicRequest, getComicSuccess, getHeroComicsRequest, getHeroComicsSuccess} from "./slice";


function* fetchHeroComics(action) {
  try {
    let {data} =  yield call(api.get, `/characters/${action.payload.id}/comics`)
    yield put(getHeroComicsSuccess({data: data.data.results}))
  } catch (e) {

  }
}

function* fetchComic(action) {
  try {
    let {data} =  yield call(api.get, `/comics/${action.payload.id}`)
    yield put(getComicSuccess({data: data.data.results[0]}))
  } catch (e) {

  }
}



export default all([takeLatest(getHeroComicsRequest, fetchHeroComics), takeLatest(getComicRequest, fetchComic)]);