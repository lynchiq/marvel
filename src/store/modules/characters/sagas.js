import {CharactersApi} from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getCharactersRequest, getCharactersSuccess} from "./slice";

function* fetchCharacters(action) {
  try {
    let api = () => CharactersApi.getAll(action.payload.offset)
    let {data} = yield call(api)
    yield put(getCharactersSuccess({data: data.data}))
  } catch (e) {
  }
}

export default all([takeLatest(getCharactersRequest, fetchCharacters)]);