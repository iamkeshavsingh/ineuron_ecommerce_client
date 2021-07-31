import { SIGNIN_FAILURE, SIGNIN_SUCCESS } from "../actions/auth/auth.constant";

const INIT_STATE = {
    isLoggedIn: false,
    user: null,
    signinError: null,
    signupError: null
}


function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case SIGNIN_FAILURE: return { ...state, isLoggedIn: false, signinError: action.msg, signipError: null };
        case SIGNIN_SUCCESS: return { ...state, isLoggedIn: true, user: action.user }
        default: return state;
    }
}


export default reducer;