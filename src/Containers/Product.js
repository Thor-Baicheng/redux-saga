import { connect } from "react-redux"

import Product from "../component/Product"

import * as actions from "../store/actions/product"

const mapState = state => {
    // console.log(state);
    return {
        ProductData: state.Product
    }
}

const mapDispatch = dispatch => {
    return {
        fetchProduct() {
            dispatch(actions.getProduct())
        }
    }
}

export default connect(mapState, mapDispatch)(Product)