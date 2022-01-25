import React from 'react';
import {
  checkUserVerificationThunk,
  getAccessTokenThunk,
} from '../app/auth/thunks';
import { useAppDispatch, useAppSelector } from '../app/store';
import { KAKAO_AUTH_REST_API_KEY } from '../config';

const KakaoAuthUri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_AUTH_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.authReducer.authorized);

  const connectKakaoAuth = () => {
    window.location.replace(KakaoAuthUri);
  };
  const checkUserVerification = () => {
    dispatch(checkUserVerificationThunk());
  };
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
