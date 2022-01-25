import axios from 'axios';

const ACCESS_TOKEN = window.localStorage.getItem('accessToken');
// const PARSED_ACCESS_TOKEN = JSON.parse(ACCESS_TOKEN ? ACCESS_TOKEN : '');
const REFRESH_TOKEN = window.localStorage.getItem('refreshToken');
// const PARSED_REFRESH_TOKEN = JSON.parse(REFRESH_TOKEN ? REFRESH_TOKEN : '');

const baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.baseURL = baseURL;

// if (ACCESS_TOKEN) {
//   axios.defaults.headers.common = {
//     Authorization: `Bearer ${PARSED_ACCESS_TOKEN}`,
//   };
// }
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default axios;
