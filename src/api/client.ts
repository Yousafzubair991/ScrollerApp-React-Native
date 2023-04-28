import axios from 'axios';
import authToken from './authToken';

const defaultOptions = {
  baseURL:
    // `${baseUrl.apiUrl}`
    'https://localhost:44300', //dummy url (import from settings)
  headers: {
    'Content-Type': 'application/json',
  },
};
//interceptors for axios
let authAxios = axios.create(defaultOptions);
authAxios.interceptors.request.use(async function (config) {
  let userToken = `${await authToken.getToken()}`;
  config.headers.Authorization = userToken ? `bearer ${userToken}` : '';
  return config;
});
export default authAxios;
