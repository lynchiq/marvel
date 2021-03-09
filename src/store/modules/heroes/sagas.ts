import api from "../../../services/api";
import {all, call, takeLatest} from "redux-saga/effects";
import {getHeroes, getHeroesByName} from "./actions";
import {put} from "@redux-saga/core/effects";

type fetchHeroesActionType = {
  payload: number
}

export function* fetchHeroes(action: fetchHeroesActionType) {
  try {
    let {data} =  yield call(api.get, `/characters`, {
      params: {
        offset: action.payload
      }
    })

    let preparedData = {
      heroes: data.data.results,
      total: data.data.total
    }

    yield put(getHeroes.success(preparedData))
  } catch (e) {
    yield put(getHeroes.error())
  }
}

type getHeroRequestType = {
  type: string,
  payload: string
}

export function* fetchHeroesByName(action: getHeroRequestType) {
  try {
    let {data} =  yield call(api.get, `/characters`, {
      params: {
        name: action.payload
      }
    })

    yield put(getHeroesByName.success(data.data.results))
  } catch (e) {
    yield put(getHeroesByName.error())
  }
}

export default all([takeLatest(getHeroes.request, fetchHeroes), takeLatest(getHeroesByName.request, fetchHeroesByName)]);