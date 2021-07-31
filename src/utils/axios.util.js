import axios from 'axios'


var server = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export default server;
