import { SIGNIN, SIGNUP, VERIFY_TOKEN } from "./api.util"
import server from "./axios.util"
import { STORAGE_TOKEN } from "./constant.util"
import * as storage from "./storage.util"


export const storeToken = (token) => {
    storage.setItem(STORAGE_TOKEN, token);
}

export const getToken = () => {
    return storage.getItem(STORAGE_TOKEN);
}


export const validateToken = async () => {
    var token = getToken();
    return server.post(VERIFY_TOKEN, {}, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export const signin = async (username, password) => {
    var response = await server.post(SIGNIN, { username, password });
    return response;
}


export const signup = async ({ name, email, mobile, ussername, password }) => {
    var response = await server.post(SIGNUP);
    console.log(response)
}

