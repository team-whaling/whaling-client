import {
  IEditNickname,
  IGetAccessToken,
  IGetNewAccessToken,
} from './auth/types';
import axios from './CustomAxios';
import { ICreateVotePayload } from './vote/types';
const token = localStorage.getItem('accessToken');

class Api {
  requestCheckUserVerification = async () => {
    const access_token = window.localStorage.getItem('access_token') || '';
    const res = await axios.post(`/auth/token/verify`, {
      token: JSON.parse(access_token),
    });
    return res.data;
  };

  requestGetAccessToken = async (payload: IGetAccessToken) => {
    const res = await axios.post(`/auth`, payload);
    console.log('API RES: ', res);
    return res;
  };

  requestGetNewAccessToken = async (payload: IGetNewAccessToken) => {
    const res = await axios.post('/auth/token/refresh', payload);
    return res.data;
  };

  requestEditNickname = async (payload: IEditNickname) => {
    const res = await axios.patch('/user/nickname', payload);
    return res;
  };

  requestGetVotes = async (id: number) => {
    const res = await axios.get(`/votes/${id}`, {
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
}

const api = new Api();

export default api;
