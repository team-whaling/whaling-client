import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_REST_API_KEY, KAKAO_REDIRECT_URL } from '../config';

const useAuth = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_AUTH_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
  const navigate = useNavigate();
  const connectKakaoAuth = () => {
    navigate(KAKAO_AUTH_URL, { replace: true });
  };
  return {
    connectKakaoAuth,
  };
};

export default useAuth;
