import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

const access_token = JSON.parse(
  window.localStorage.getItem('access_token') || '',
);
if (access_token) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`,
  };
}

export default axios;
