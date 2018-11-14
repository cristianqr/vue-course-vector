import Axios from 'axios';
import {sharedBus} from './sharedBus.js';


export const httpClient = Axios.create({
    baseURL: 'http://localhost:3000'
});

httpClient.interceptors.request.use((config) => {
    sharedBus.$emit('ajax-loader:show');
    return config;
});

httpClient.interceptors.response.use((response) => {
    setTimeout(() => {
        sharedBus.$emit('ajax-loader:hide');
    }, 1000);
    return response;
}, (error) => {
    sharedBus.$emit('ajax-loader:hide');
    return Promise.reject(error);
});
