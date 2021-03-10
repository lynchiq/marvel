import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
