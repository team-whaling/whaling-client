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

  requestGetVote = async (id: number) => {
    const res = await axios.get(`/votes/${id}`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzNDQ4NjAyLCJpYXQiOjE2NDMzNjIyMDIsImp0aSI6ImUwZmRlZGJhNzE1ZjQwODM4MDhlODJkNDYyM2Q0ZTc4IiwidXNlcl9pZCI6MjA2OTQ1MTgwMX0.XOe7k8sHDSOp_rnvSLEU-qjKeCQcjWZHLmygE7fhg50`,
      },
    });
    return res.data;
  };

  requestGetVotes = async () => {
    const res = await axios.get(`/votes`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzNDQ4NjAyLCJpYXQiOjE2NDMzNjIyMDIsImp0aSI6ImUwZmRlZGJhNzE1ZjQwODM4MDhlODJkNDYyM2Q0ZTc4IiwidXNlcl9pZCI6MjA2OTQ1MTgwMX0.XOe7k8sHDSOp_rnvSLEU-qjKeCQcjWZHLmygE7fhg50`,
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
