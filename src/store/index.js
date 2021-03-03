import {combineReducers, configureStore} from "@reduxjs/toolkit";
import heroReducer from './modules/hero/slice'
import charactersReducer from './modules/characters/slice'
import searchReducer from './modules/search/slice'
import comicsReducer from './modules/comics/slice'
import favoritesReducer from './modules/favorites/slice'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  hero: heroReducer,
  characters: charactersReducer,
  comics: comicsReducer,
  search: searchReducer,
  favorites: favoritesReducer
})

const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: reducers,
  middleware: middlewares
})

sagaMiddleware.run(rootSaga)


export {store}