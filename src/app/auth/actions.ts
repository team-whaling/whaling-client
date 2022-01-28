import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  IGetAccessToken,
  IGetAccessTokenResponse,
  IGetNewAccessToken,
  IGetNewAccessTokenResponse,
} from './types';

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

export const getNewAccessTokenAsync = createAsyncAction(
  'auth/GET_NEW_ACCESS_TOKEN',
  'auth/GET_NEW_ACCESS_TOKEN_SUCCESS',
  'auth/GET_NEW_ACCESS_TOKEN_FAIL',
)<unknown, IGetNewAccessTokenResponse, AxiosError>();

export const editNicknameAsync = createAsyncAction(
  'auth/EDIT_NICKNAME',
  'auth/EDIT_NICKNAME/SUCCESS',
  'auth/EDIT_NICKNAME_FAIL',
)<unknown, any, AxiosError>();

export const initializeNicknameDuplicationInfo = createAction(
  'auth/INITIALIZE_NICKNAME_DUPLICATION_INFO',
)();
