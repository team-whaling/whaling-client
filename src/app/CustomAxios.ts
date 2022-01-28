import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default axios;
