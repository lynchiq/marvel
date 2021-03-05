import {createAction} from "@reduxjs/toolkit";
import {Hero} from "./types";

export const getHeroes = {
  request: createAction('HEROES_REQUEST_START'),
  success: createAction<Hero[], "HEROES_REQUEST_SUCCESS">("HEROES_REQUEST_SUCCESS"),
  error: createAction('HEROES_REQUEST_SUCCESS'),
}