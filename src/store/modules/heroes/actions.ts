import {createAction} from "@reduxjs/toolkit";
import {HeroType} from "../../../types/types";

type getHeroSuccessPayloadType = {
  heroes: HeroType[],
  total: number
}

export const getHeroes = {
  request: createAction<number, "HEROES_REQUEST_START">("HEROES_REQUEST_START"),
  success: createAction<getHeroSuccessPayloadType, "HEROES_REQUEST_SUCCESS">("HEROES_REQUEST_SUCCESS"),
  error: createAction('HEROES_REQUEST_ERROR'),
}

export const getHeroesByName = {
  request: createAction<string, "HEROES_BY_NAME_REQUEST_START">("HEROES_BY_NAME_REQUEST_START"),
  success: createAction<HeroType[], "HEROES_BY_NAME_REQUEST_SUCCESS">("HEROES_BY_NAME_REQUEST_SUCCESS"),
  error: createAction("HEROES_BY_NAME_REQUEST_ERROR"),
}

export const setHeroes = createAction<HeroType[], "SET_HEROES">('SET_HEROES')

export const unsetHeroes = createAction('UNSET_HEROES')

export const setHeroesCurrentPage = createAction<number, "SET_HEROES_CURRENT_PAGE">("SET_HEROES_CURRENT_PAGE")