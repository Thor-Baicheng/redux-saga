import * as types from "../types/product"
export const createAction = type => (payload = {}) => ({ type, payload })
//关于product的actions
//发起请求
export const getProduct = createAction(types.FETCH_PRODUCT)
//正在获取购商品物车
export const getProductReq = createAction(types.FETCH_PRODUCT_REQ)
//获取购物车商品成功
export const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)
//获取购物车商品失败
export const getProductFail = createAction(types.FETCH_PRODUCT_FAIL)
//添加到购物车
export const addToCart = createAction(types.ADD_TO_CART)