import { createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import apiReducer from './reducers';
import { rootSaga } from './sagas/rootSaga'
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(apiReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    :applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);