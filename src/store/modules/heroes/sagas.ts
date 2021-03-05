import api from "../../../services/api";
import {all, call, takeLatest} from "redux-saga/effects";
import {getHeroes} from "./actions";
import {put} from "@redux-saga/core/effects";


export function* fetchHeroes() {
  try {
    let {data} =  yield call(api.get, `/characters`, {
      params: {
        offset: 0
      }
    })

    yield put(getHeroes.success(data.data.results))
  } catch (e) {

  }
}

export default all([takeLatest(getHeroes.request, fetchHeroes)]);