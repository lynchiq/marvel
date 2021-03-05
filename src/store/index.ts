import {configureStore} from '@reduxjs/toolkit'

import rootReducer from './modules/rootReducer'
import {rootSaga} from "./modules/rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware= createSagaMiddleware();
const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares
})

sagaMiddleware.run(rootSaga);

export default store