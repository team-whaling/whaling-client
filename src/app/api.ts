import {
  IEditNickname,
  IGetAccessToken,
  IGetNewAccessToken,
} from './auth/types';
import axios from './CustomAxios';
import { ICreateVotePayload, IPostVote } from './vote/types';

class Api {
  requestCheckUserVerification = async () => {
    const access_token = window.localStorage.getItem('access_token') || '1';
    const res = await axios.post(`/auth/token/verify`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(access_token)}`,
      },
    });
    return res.data;
  };

  requestGetAccessToken = async (payload: IGetAccessToken) => {
    const res = await axios.post(`/auth`, payload);
    return res;
  };

  requestGetNewAccessToken = async (payload: IGetNewAccessToken) => {
    const res = await axios.post('/auth/token/refresh/', payload);
    return res.data;
  };

  requestEditNickname = async (payload: IEditNickname) => {
    const res = await axios.patch('/user/nickname', payload);
    return res;
  };

  requestGetUserInfo = async () => {
    const res = await axios.get('/user');
    return res.data;
  };

  requestGetCreatedVotes = async () => {
    const res = await axios.get('/user/created-votes');
    return res.data;
  };

  requestGetParticipatedVotes = async () => {
    const res = await axios.get('/user/participated-votes');
    return res.data;
  };

  requestGetSingleVote = async (id: number) => {
    const res = await axios.get(`/votes/${id}`);
    return res.data;
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

  requestPostVote = async (id: number, payload: IPostVote) => {
    const res = await axios.post(`/votes/${id}/choice/`, payload);
    return res.data;
  };

  requestAccuracy = async () => {
    const res = await axios.get(`/acc-percent`);
    return res.data;
  };
}

const api = new Api();

export default api;
