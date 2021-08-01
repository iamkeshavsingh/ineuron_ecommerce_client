import { ADD_TO_CART, GET_CARTS } from "../../../utils/api.util";
import { serverProtected } from "../../../utils/axios.util"
import { ADD_TO_CART_SUCCESS, GET_CARTS_SUCCESS } from "./cart.constant";


export const addToCart = (id) => {
    return async dispatch => {
        var response = await serverProtected.post(ADD_TO_CART, {
            productId: id,
        });
        dispatch(addToCartSuccess(response.data))
    }
}



export const getCarts = () => {
    return async dispatch => {
        var response = await serverProtected.get(GET_CARTS);
        dispatch(getCartsSuccess(response.data));
    }
}


function getCartsSuccess(carts) {
    return {
        type: GET_CARTS_SUCCESS,
        payload: carts
    }
}

function addToCartSuccess(data) {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: data
    }
}