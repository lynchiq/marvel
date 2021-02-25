import api from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getCharactersRequest, getCharactersSuccess} from "./slice";

function* fetchCharacters(action) {
  debugger
  try {
    let {data} =  yield call(api.get, `/characters`, {
      offset: action.payload
    })
    yield put(getCharactersSuccess({data: data.data}))
  } catch (e) {

  }
}

export default all([takeLatest(getCharactersRequest, fetchCharacters)]);