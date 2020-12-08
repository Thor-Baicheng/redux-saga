import { connect } from "react-redux"

import Cart from "../component/Cart"

const mapState = state => {
    return {
        state
    }
}

const mapDispatch = dispatch => {
    return {
        log() {
            console.log('111');
        }
    }
}

export default connect(mapState, mapDispatch)(Cart)