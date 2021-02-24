import {CharactersApi} from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getCharactersRequest, getCharactersSuccess} from "./slice";

function* fetchCharacters() {
  try {
    let {config, data, headers, request} = yield call(CharactersApi.getAll)

    yield put(getCharactersSuccess({data: data}))
  } catch (e) {
  }
}

export default all([takeLatest(getCharactersRequest, fetchCharacters)]);