import React from 'react';
import { getAccessTokenThunk } from '../app/auth/thunks';
import { useAppDispatch, useAppSelector } from '../app/store';
import {
  KAKAO_AUTH_REST_API_KEY,
  KAKAO_REDIRECT_URL,
  KAKAO_REDIRECT_URL_LOCAL,
} from '../config';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_AUTH_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL_LOCAL}&response_type=code`;

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.authReducer.authorized);

  const connectKakaoAuth = () => {
    window.location.replace(KAKAO_AUTH_URL);
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
