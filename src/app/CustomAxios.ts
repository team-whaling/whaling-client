import axios from 'axios';
import { SERVER_URL } from '../config';

axios.defaults.baseURL = SERVER_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
};

export default axios;
