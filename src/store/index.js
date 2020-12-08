import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension" //调试工具

import rootReducer from "./reducers" //根reducers

import createSagaMiddleware from "redux-saga"//引入saga中间件

let sagaMiddleware = createSagaMiddleware()

import helloSaga from "./sagas/Product"

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(helloSaga)