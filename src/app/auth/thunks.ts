import api from '../api';
import { RootState } from '../store';
import { ThunkAction } from '@reduxjs/toolkit';

import { checkUserVerificationAsync, getAccessTokenAsync } from './actions';
import { IGetAccessTokenResponse, TAction } from './types';
import { KAKAO_REDIRECT_URI } from '../../config';

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
    console.log('THUNK CODE: ', code);
    const payload = {
      code: code ? code : '',
      redirect_uri: KAKAO_REDIRECT_URI,
    };

    const { request, success, failure } = getAccessTokenAsync;
    dispatch(request(null));

    try {
      const res: IGetAccessTokenResponse = await api.requestGetAccessToken(
        payload,
      );
      dispatch(success(res));
      window.localStorage.setItem('token', JSON.stringify(res.token));
    } catch (e: any) {
      console.log('GET ACCESSS TOKEN THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}
