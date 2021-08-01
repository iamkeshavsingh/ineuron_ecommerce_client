import { ADD_TO_CART_SUCCESS, GET_CARTS_SUCCESS } from "../actions/cart/cart.constant";

const INIT_STATE = {
    items: [],
    total: 0
};

function getTotal(carts) {
    return carts.reduce((acc, cart) => {
        return acc + cart.price;
    }, 0);
}

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_CARTS_SUCCESS: return { ...state, items: action.payload, total: getTotal(action.payload) }
        case ADD_TO_CART_SUCCESS: return { ...state, items: [...state.items, action.payload], total: getTotal([...state.items, action.payload]) }
        default: return state;
    }
}


export default reducer;