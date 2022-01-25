import api from '../api';
import { RootState } from '../store';
import { ThunkAction } from '@reduxjs/toolkit';

import { checkUserVerificationAsync, getAccessTokenAsync } from './actions';
import { IGetAccessTokenResponse, TAction } from './types';
import { AxiosResponse } from 'axios';

export function checkUserVerificationThunk(): ThunkAction<
  void,
  RootState,
  null,
  TAction
> {
  return async (dispatch) => {
    const { request, success, failure } = checkUserVerificationAsync;
    dispatch(request(0));
    // dispatch(setAuthLoading(true));
    try {
      const res = await api.requestCheckUserVerification();
      dispatch(success(res));
    } catch (e: any) {
      console.log('CHECK USER VERIFICATION THUNK ERR: ', e);
      dispatch(failure(e));
    }

    // dispatch(setAuthLoading(false));
  };
}

export function getAccessTokenThunk(): ThunkAction<
  void,
  RootState,
  null,
  TAction
> {
  return async (dispatch) => {
    const code = window.localStorage.getItem('code');
    const parsedCode = JSON.parse(code ? code : '');
    console.log('THUNK CODE: ', parsedCode);
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI
      ? process.env.REACT_APP_KAKAO_REDIRECT_URI
      : '';
    const payload = {
      code: parsedCode,
      redirect_uri: redirect_uri,
    };
    console.log('PAYLOAD', payload);

    const { request, success, failure } = getAccessTokenAsync;
    dispatch(request(null));

    try {
      const axiosResponse: AxiosResponse<IGetAccessTokenResponse, any> =
        await api.requestGetAccessToken(payload);

      const res: IGetAccessTokenResponse = axiosResponse.data;
      const status: number = axiosResponse.status;

      dispatch(success(res));
      window.localStorage.setItem(
        'accessToken',
        JSON.stringify(res.token.access_token),
      );
      window.localStorage.setItem(
        'refreshToken',
        JSON.stringify(res.token.refresh_token),
      );

      if (status === 201) {
        // initial user
        const signupPage = process.env.REACT_APP_FRONT_SIGNUP_URL
          ? process.env.REACT_APP_FRONT_SIGNUP_URL
          : '';
        window.location.replace(signupPage);
      } else if (status === 200) {
        const mainPage = process.env.REACT_APP_FRONT_URL
          ? process.env.REACT_APP_FRONT_URL
          : '';
        window.location.replace(mainPage);
      }
    } catch (e: any) {
      console.log('GET ACCESSS TOKEN THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}
