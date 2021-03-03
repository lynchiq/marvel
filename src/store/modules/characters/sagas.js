import api from "../../../services/api";
import {all, call, put, select, takeLatest} from "@redux-saga/core/effects";
import {getCharactersRequest, getCharactersSuccess} from "./slice";

function* fetchCharacters() {

  let {offset} = yield select(state => state.characters.pagination)

  try {
    let {data} =  yield call(api.get, `/characters`, {
      params: {
        offset: offset
      }
    })
    yield put(getCharactersSuccess({data: data.data}))
  } catch (e) {

  }
}

export default all([takeLatest(getCharactersRequest, fetchCharacters)]);