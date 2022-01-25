import { IGetAccessToken } from './auth/types';
import axios from './CustomAxios';

class Api {
  requestCheckUserVerification = async () => {
    const token = window.localStorage.getItem('token');
    const res = await axios.post(`/auth/token/verify`, token);
    return res.data;
  };

  requestGetAccessToken = async (payload: IGetAccessToken) => {
    const res = await axios.post(`/auth`, payload);
    console.log('API RES: ', res);
    return res;
  };
  requestPostLogin = async () => {};

  requestGetVotes = async (id: number) => {
    const res = await axios.get(`/vote/${id}`);
    return res.data;
  };
}

const api = new Api();

export default api;
