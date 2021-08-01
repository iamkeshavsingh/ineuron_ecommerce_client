import { signin, storeToken, validateToken } from "../../../utils/auth.util";
import { getCarts } from "../cart/cart.action";
import { SIGNIN_FAILURE, SIGNIN_SUCCESS } from "./auth.constant";


export const signinAction = (username, password) => {
    return async function (dispatch) {
        try {
            var response = await signin(username, password);
            storeToken(response.data.token);
            dispatch(signinSuccess(response.data))
        }
        catch (err) {
            if (err?.response?.data?.msg) {
                dispatch(signinFailure(err.response.data.msg))
            }
            else {

            }
        }
    }
}

export const signupAction = (data) => {
    return function (dispatch) {
    }
}


export const initialAuthCheck = () => {
    return async dispatch => {
        var response = await validateToken();
        try {
            dispatch(signinSuccess(response.data))
            dispatch(getCarts())
        }
        catch (err) {
            // Means token is invalid
        }
    }
}



function signinSuccess(user) {
    return {
        type: SIGNIN_SUCCESS,
        user
    }
}

function signinFailure(msg) {
    return {
        type: SIGNIN_FAILURE,
        msg: msg,
    }
}