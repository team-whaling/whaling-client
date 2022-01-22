import { IGetAccessToken } from './auth/types';
import axios from './CustomAxios';

class Api {
  requestCheckUserVerification = async () => {};
  requestGetAccessToken = async ({ code, redirect_uri }: IGetAccessToken) => {
    const res = await axios.post(`/auth`, { code, redirect_uri });
    console.log('API RES: ', res);
    return res.data;
  };
}

const api = new Api();

export default api;
