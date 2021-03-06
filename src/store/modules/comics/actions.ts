import {createAction} from "@reduxjs/toolkit";
import {ComicType} from "../heroes/types";

export const getComics = {
  request: createAction<number, "GET_COMICS_REQUEST_START">("GET_COMICS_REQUEST_START"),
  success: createAction<ComicType[]>("GET_COMICS_REQUEST_SUCCESS"),
  error: createAction("GET_COMICS_REQUEST_ERROR")
}

type moreComicsPayloadType = {
  id: number,
  offset: number
}

export const getMoreComics = {
  request: createAction<moreComicsPayloadType, "GET_MORE_COMICS_REQUEST_START">("GET_MORE_COMICS_REQUEST_START"),
  success: createAction<ComicType[]>("GET_MORE_COMICS_REQUEST_SUCCESS"),
  error: createAction("GET_MORE_COMICS_REQUEST_ERROR")
}