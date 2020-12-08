let defaultState = {
    isFetching: true,
    data: [],
    err: null
}

export default (state = defaultState, action) => {
    let { type, payload } = action;
    console.log(payload)
    switch (type) {
        case "FETCH_PRODUCT_REQ":
            return Object.assign({}, state, {
                isFetching: true
            })
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({}, state, {
                isFetching: false,
                data: payload.data
            })
        case "FETCH_PRODUCT_FAIL":
            return Object.assign({}, state, {
                isFetching: false,
                data: [],
                err: payload.err
            })

        default:
            return { ...state }
    }
}