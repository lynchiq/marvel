import {combineReducers, configureStore} from "@reduxjs/toolkit";
import charactersReducer from './characters/characters.slice'

export const store = configureStore({
  reducer: combineReducers({
    characters: charactersReducer
  })
})