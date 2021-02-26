import api from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {searchHeroByNameRequest, searchHeroByNameSuccess} from "./slice";


function* fetchSearchHero(action) {
  try {
    let {data} =  yield call(api.get, `/characters`, {
      params: {
        name: action.payload.name
      }
    })
    yield put(searchHeroByNameSuccess({data: data.data.results}))
  } catch (e) {

  }
}

export default all([takeLatest(searchHeroByNameRequest, fetchSearchHero)]);