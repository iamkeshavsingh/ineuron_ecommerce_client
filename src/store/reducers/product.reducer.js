import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } from "../actions/products/products.constant";

const INIT_STATE = {
    products: [],
    isLoading: false,
    error: null
};

function reducer(state = INIT_STATE, action) {

    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: return { ...state, products: action.payload, isLoading: false, error: null };
        case GET_PRODUCTS_START: return { ...state, isLoading: true };
        case GET_PRODUCTS_FAILURE: return { ...state, isLoading: false, error: 'Something Went Wrong...' };
        default: return state;
    }
}


export default reducer;