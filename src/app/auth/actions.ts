import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { IGetAccessToken, IGetAccessTokenResponse } from './types';

export const checkUserVerificationAsync = createAsyncAction(
  'auth/CHECK_USER_VERIFICATION',
  'auth/CHECK_USER_VERIFICATION_SUCCESS',
  'auth/CHECK_USER_VERIFICATION_FAIL',
)<unknown, any, AxiosError>();

export const getAccessTokenAsync = createAsyncAction(
  'auth/GET_ACCESS_TOKEN',
  'auth/GET_ACCESS_TOKEN_SUCCESS',
  'auth/GET_ACCESS_TOKEN_FAIL',
)<unknown, IGetAccessTokenResponse, AxiosError>();

// export const getRefreshTokenAsync = createAsyncAction(
//   'auth/GET_REFRESH_TOKEN',
//   'auth/GET_REFRESH_TOKEN_SUCCESS',
//   'auth/GET_REFRESH_TOKEN_FAIL',
// )<unknown, any, AxiosError>();
