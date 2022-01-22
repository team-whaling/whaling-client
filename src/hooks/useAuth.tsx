import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessTokenThunk } from '../app/auth/thunks';
import { useAppDispatch, useAppSelector } from '../app/store';
import { KAKAO_AUTH_REST_API_KEY, KAKAO_REDIRECT_URL } from '../config';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_AUTH_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.authReducer.authorized);

  const navigate = useNavigate();
  const connectKakaoAuth = () => {
    navigate(KAKAO_AUTH_URL, { replace: true });
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
