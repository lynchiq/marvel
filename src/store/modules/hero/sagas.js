import api from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getHeroRequest, getHeroSuccess} from "./slice";


function* fetchHero(action) {
  try {
    let {data} =  yield call(api.get, `/characters/${action.payload.id}`)
    yield put(getHeroSuccess({data: data.data.results[0]}))
  } catch (e) {

  }
}

export default all([takeLatest(getHeroRequest, fetchHero)]);