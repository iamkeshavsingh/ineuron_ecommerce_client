import * as apis from './api.util'
import { serverProtected } from './axios.util'

export const getOrderId = async (amount) => {
    var response = await serverProtected.post(apis.CHECKOUT, { amount: amount })
    return response.data;
}