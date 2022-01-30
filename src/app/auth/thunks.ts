import api from '../api';
import { RootState } from '../store';
import { ThunkAction } from '@reduxjs/toolkit';

import {
  checkUserVerificationAsync,
  editNicknameAsync,
  getAccessTokenAsync,
  getCreatedVotesAsync,
  getNewAccessTokenAsync,
  getParticipatedVotesAsync,
  getUserInfoAsync,
  initializeNicknameDuplicationInfo,
} from './actions';
import {
  IEditNickname,
  IGetAccessTokenResponse,
  IGetNewAccessToken,
  IGetNewAccessTokenResponse,
  TAction,
} from './types';
import { TAction as LoadingAction } from '../loading/types';
import axios, { AxiosResponse } from 'axios';
import {
  setCheckingTokenLoading,
  setGettingTokenLoading,
} from '../loading/actions';
import {
  initializeLocalStorage,
  setAccessToken,
  setLocalStorage,
} from '../../utils';

const expirationTime = 86400; // second

export function checkUserVerificationThunk(): ThunkAction<
  void,
  RootState,
  null,
  // TAction & LoadingAction
  any
> {
  return async (dispatch) => {
    dispatch(setCheckingTokenLoading(true));

    const { request, success, failure } = checkUserVerificationAsync;
    dispatch(request(null));
    try {
      const res = await api.requestCheckUserVerification();

      dispatch(success(res));
    } catch (e: any) {
      console.log('CHECK USER VERIFICATION THUNK ERR: ', e);
      initializeLocalStorage();
      // window.location.replace(`${process.env.REACT_APP_FRONT_URL}/login`);
      dispatch(failure(e));
    }

    dispatch(setCheckingTokenLoading(false));
  };
}

// OAuth Kakao Login : send kakao code to server
export function getAccessTokenThunk(): ThunkAction<void, RootState, null, any> {
  return async (dispatch) => {
    dispatch(setGettingTokenLoading(true));
    const code = window.localStorage.getItem('code');
    const parsedCode = JSON.parse(code ? code : '');

    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI
      ? process.env.REACT_APP_KAKAO_REDIRECT_URI
      : '';
    const payload = {
      code: parsedCode,
      redirect_uri: redirect_uri,
    };

    const { request, success, failure } = getAccessTokenAsync;
    dispatch(request(null));

    try {
      const axiosResponse: AxiosResponse<IGetAccessTokenResponse, any> =
        await api.requestGetAccessToken(payload);

      const res: IGetAccessTokenResponse = {
        ...axiosResponse.data,
        httpResponseStatus: axiosResponse.status,
      };

      dispatch(success(res));

      setLocalStorage({
        access_token: res.token.access_token,
        refresh_token: res.token.refresh_token,
      });

      setTimeout(() => {
        dispatch(
          getNewAccessTokenThunk({ refresh_token: res.token.refresh_token }),
        );
      }, expirationTime * 1000);
    } catch (e: any) {
      console.log('GET ACCESSS TOKEN THUNK ERR: ', e);
      dispatch(failure(e));
    }

    dispatch(setGettingTokenLoading(false));
  };
}

export function getNewAccessTokenThunk(
  payload: IGetNewAccessToken,
): ThunkAction<void, RootState, null, any> {
  return async (dispatch) => {
    const { request, success, failure } = getNewAccessTokenAsync;

    dispatch(request(null));

    try {
      const res: IGetNewAccessTokenResponse =
        await api.requestGetNewAccessToken(payload);

      dispatch(success(res));

      setAccessToken(res.access);
      setTimeout(() => {
        const refresh_token = window.localStorage.getItem('refresh_token');
        dispatch(
          getNewAccessTokenThunk({
            refresh_token: JSON.parse(refresh_token || ''),
          }),
        );
      }, expirationTime * 1000);
    } catch (e: any) {
      console.log('GET NEW ACCESS TOKEN ERR: ', e);
      // expired refresh token => login is needed
      initializeLocalStorage();
      window.location.replace(`${process.env.REACT_APP_FRONT_URL}/login`);
      dispatch(failure(e));
    }
  };
}

export function editNicknameThunk({
  nickname,
}: IEditNickname): ThunkAction<void, RootState, null, any> {
  return async (dispatch) => {
    const { request, success, failure } = editNicknameAsync;
    dispatch(request(null));
    try {
      const res: AxiosResponse<any, any> = await api.requestEditNickname({
        nickname,
      });
      dispatch(success({ nickname: nickname, duplicated: false }));
    } catch (e: any) {
      console.log('EDIT USER NICKNAME ERR: ', e);
      dispatch(failure(e));
    }
  };
}

export function getUserInfoThunk(): ThunkAction<void, RootState, null, any> {
  return async (dispatch) => {
    const { request, success, failure } = getUserInfoAsync;

    dispatch(request(null));

    try {
      const res = await api.requestGetUserInfo();
      dispatch(success(res));
    } catch (e: any) {
      console.log('GET USER INFO THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}

export function getCreatedVotesThunk(): ThunkAction<
  void,
  RootState,
  null,
  any
> {
  return async (dispatch) => {
    const { request, success, failure } = getCreatedVotesAsync;

    dispatch(request(null));

    try {
      const res = await api.requestGetCreatedVotes();
      dispatch(success(res));
    } catch (e: any) {
      console.log('GET CREATED VOTES THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}

export function getParticipatedVotesThunk(): ThunkAction<
  void,
  RootState,
  null,
  any
> {
  return async (dispatch) => {
    const { request, success, failure } = getParticipatedVotesAsync;

    dispatch(request(null));

    try {
      const res = await api.requestGetParticipatedVotes();
      dispatch(success(res));
    } catch (e: any) {
      console.log('GET PARTICIPATED VOTES THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}
