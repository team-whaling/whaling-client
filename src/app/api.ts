import { IGetAccessToken } from './auth/types';
import axios from './CustomAxios';
import { ICreateVotePayload } from './vote/types';
const token = localStorage.getItem('accessToken');

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

  requestGetVotes = async () => {
    const res = await axios.get(`/votes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  requestGetCoins = async () => {
    const res = await axios.get(`/coins`);
    return res.data;
  };

  requestCreateVote = async (payload: ICreateVotePayload) => {
    const res = await axios.post(`/votes`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  requestAccuracy = async () => {
    const res = await axios.get(`/acc-percent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };
}

const api = new Api();

export default api;
