import Product from "./Product"

let defaultState = {}


export default (state = defaultState, action) => {
    return {
        Product: Product(state.Product, action)
    }
}