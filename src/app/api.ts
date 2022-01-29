import {
  IEditNickname,
  IGetAccessToken,
  IGetNewAccessToken,
} from './auth/types';
import axios from './CustomAxios';
import { ICreateVotePayload } from './vote/types';

class Api {
  requestCheckUserVerification = async () => {
    const access_token = window.localStorage.getItem('access_token') || '';
    console.log('requset check user verification ACCESS_TOKEN: ', access_token);
    const res = await axios.post(`/auth/token/verify`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(access_token)}`,
      },
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

  requestGetVotes = async () => {
    const res = await axios.get(`/votes`);
    return res.data;
  };

  requestGetCoins = async () => {
    const res = await axios.get(`/coins`);
    return res.data;
  };

  requestCreateVote = async (payload: ICreateVotePayload) => {
    const res = await axios.post(`/votes/`, payload);
    return res.data;
  };

  requestAccuracy = async () => {
    const res = await axios.get(`/acc-percent`);
    return res.data;
  };
}

const api = new Api();

export default api;
