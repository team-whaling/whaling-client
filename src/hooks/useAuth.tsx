import React from 'react';
import { getAccessTokenThunk } from '../app/auth/thunks';
import { useAppDispatch, useAppSelector } from '../app/store';
import {
  KAKAO_AUTH_REST_API_KEY,
  KAKAO_REDIRECT_URL,
  KAKAO_REDIRECT_URL_LOCAL,
} from '../config';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.authReducer.authorized);

  const connectKakaoAuth = () => {
    window.location.replace(KAKAO_REDIRECT_URL_LOCAL);
  };
  const checkUserVerification = () => {};
  const getAccessToken = () => {
    dispatch(getAccessTokenThunk());
  };

  return {
    connectKakaoAuth,
    authorized,
    checkUserVerification,
    getAccessToken,
  };
};

export default useAuth;
