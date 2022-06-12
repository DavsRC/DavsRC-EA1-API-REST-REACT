import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'https://localhost:3000/'

});

export {
    axiosInstance
}