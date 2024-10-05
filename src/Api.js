import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://192.168.137.1/api',
    baseURL: 'http://localhost:8081',
    // baseURL: 'https://halahomes.waysdatalabs.com/api',
    withCredentials: true,
});

export default api;