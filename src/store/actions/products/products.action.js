import { GET_PRODUCTS } from "../../../utils/api.util"
import server from "../../../utils/axios.util"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } from "./products.constant";



export const getProducts = () => {
    return async dispatch => {
        try {
            dispatch(getProductsStart())
            var response = await server.get(GET_PRODUCTS);
            setTimeout(() => {
                dispatch(getProductsSuccess(response.data))
            }, 2000);
        }
        catch (err) {
            dispatch(getProductsfailure())
        }
    }
}


function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

function getProductsStart() {
    return {
        type: GET_PRODUCTS_START,
    }
}

function getProductsfailure() {
    return {
        type: GET_PRODUCTS_FAILURE,
    }
}