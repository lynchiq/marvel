import {combineReducers, configureStore} from "@reduxjs/toolkit";
import heroReducer from './modules/hero/slice'
import charactersReducer from './modules/characters/slice'
import searchReducer from './modules/search/slice'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  hero: heroReducer,
  characters: charactersReducer,
  search: searchReducer
})

const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: reducers,
  middleware: middlewares
})

sagaMiddleware.run(rootSaga)


export {store}