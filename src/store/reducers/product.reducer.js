import { GET_PRODUCTS_SUCCESS } from "../actions/products/products.constant";

const INIT_STATE = {
    products: []
};

function reducer(state = INIT_STATE, action) {

    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: return { ...state, products: action.payload }
        default: return state;
    }
}


export default reducer;