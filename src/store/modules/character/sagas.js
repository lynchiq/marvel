import {CharactersApi} from "../../../services/api";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getCharactersRequest, getCharactersSuccess} from "./slice";

function* fetchCharacter(action) {
  try {

    yield put(getCharactersSuccess({data: {}}))
  } catch (e) {
  }
}

export default all([takeLatest(getCharactersRequest, fetchCharacter)]);