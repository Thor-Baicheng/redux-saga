import Cart from "./Cart"

import Product from "./Product"

import { all } from "redux-saga/effects"

export default function* rootSaga() {
    yield all([Product(), Cart()])
}