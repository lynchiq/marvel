import {combineReducers, configureStore} from "@reduxjs/toolkit";
import charactersReducer from './modules/characters/slice'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  characters: charactersReducer
})

const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: reducers,
  middleware: middlewares
})

sagaMiddleware.run(rootSaga)


export {store}