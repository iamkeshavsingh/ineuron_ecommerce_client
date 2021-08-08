import { ADD_TO_CART_SUCCESS, GET_CARTS_SUCCESS, START_LOADER_CART } from "../actions/cart/cart.constant";

const INIT_STATE = {
    items: [],
    total: 0,
    isLoading: false,
    error: null
};

function getTotal(carts) {
    return carts.reduce((acc, cart) => {
        return acc + Number(cart.price);
    }, 0);
}

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_CARTS_SUCCESS: return { ...state, items: action.payload, total: getTotal(action.payload), isLoading: false }
        case ADD_TO_CART_SUCCESS: return { ...state, items: [...state.items, action.payload], total: getTotal([...state.items, action.payload]), isLoading: false }
        case START_LOADER_CART: return { ...state, isLoading: true }
        default: return state;
    }
}


export default reducer;