import React from 'react';
import { initializeNicknameDuplicationInfo } from '../app/auth/actions';
import {
  checkUserVerificationThunk,
  editNicknameThunk,
  getAccessTokenThunk,
} from '../app/auth/thunks';
import { IEditNickname } from '../app/auth/types';
import { useAppDispatch, useAppSelector } from '../app/store';
import { KAKAO_AUTH_REST_API_KEY } from '../config.js';

const KakaoAuthUri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_AUTH_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector((state) => state.authReducer.authorized);
  const nickname = useAppSelector((state) => state.authReducer.user.nickname);
  const httpResponseStatus = useAppSelector(
    (state) => state.authReducer.httpResponseStatus,
  );
  const nicknameDuplicated = useAppSelector(
    (state) => state.authReducer.user.duplicated,
  );

  const checkingToken = useAppSelector(
    (state) => state.loadingReducer.checkigToken,
  );
  const gettingToken = useAppSelector(
    (state) => state.loadingReducer.gettingToken,
  );

  const connectKakaoAuth = () => {
    window.location.replace(KakaoAuthUri);
  };
  const checkUserVerification = () => {
    dispatch(checkUserVerificationThunk());
  };
  const getAccessToken = () => {
    dispatch(getAccessTokenThunk());
  };

  const editNickname = ({ nickname }: IEditNickname) => {
    dispatch(editNicknameThunk({ nickname }));
  };

  const initializeNicknameDuplicationInfoHandler = () => {
    dispatch(initializeNicknameDuplicationInfo());
  };

  return {
    connectKakaoAuth,
    authorized,
    nickname,
    httpResponseStatus,
    nicknameDuplicated,
    checkingToken,
    gettingToken,
    checkUserVerification,
    getAccessToken,
    editNickname,
    initializeNicknameDuplicationInfo: initializeNicknameDuplicationInfoHandler,
  };
};

export default useAuth;
