import { GET_PRODUCTS } from "../../../utils/api.util"
import server from "../../../utils/axios.util"
import { GET_PRODUCTS_SUCCESS } from "./products.constant";



export const getProducts = () => {
    return async dispatch => {
        var response = await server.get(GET_PRODUCTS);
        dispatch(getProductsSuccess(response.data))
    }
}


function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}