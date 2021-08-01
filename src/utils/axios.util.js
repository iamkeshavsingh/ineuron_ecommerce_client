import axios from 'axios'
import { getToken } from './auth.util';


var server = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const serverProtected = axios.create({
    baseURL: 'http://localhost:5000/api'
})



serverProtected.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer ' + getToken();
    return request;
});

export default server;


