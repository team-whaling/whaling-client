import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  IGetAccessToken,
  IGetAccessTokenResponse,
  IGetNewAccessToken,
  IGetNewAccessTokenResponse,
  IMyVotes,
  IUser,
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

export const checkNicknameDuplicationAsync = createAsyncAction(
  'auth/CHECK_NICKNAME_DUPLICATION',
  'auth/CHECK_NICKNAME_DUPLICATION_SUCCESS',
  'auth/CHECK_NICKNAME_DUPLICATION_FAIL',
)<unknown, any, AxiosError>();

export const editNicknameAsync = createAsyncAction(
  'auth/EDIT_NICKNAME',
  'auth/EDIT_NICKNAME/SUCCESS',
  'auth/EDIT_NICKNAME_FAIL',
)<unknown, any, AxiosError>();

export const initializeNicknameDuplicationInfo = createAction(
  'auth/INITIALIZE_NICKNAME_DUPLICATION_INFO',
)();

export const getUserInfoAsync = createAsyncAction(
  'auth/GET_USER_INFO',
  'auth/GET_USER_INFO_SUCCESS',
  'auth/GET_USER_INFO_FAIL',
)<unknown, IUser, AxiosError>();

export const getCreatedVotesAsync = createAsyncAction(
  'auth/GET_CREATED_VOTES',
  'auth/GET_CREATED_VOTES_SUCCESS',
  'auth/GET_CREATED_VOTES_FAIL',
)<unknown, IMyVotes, AxiosError>();

export const getParticipatedVotesAsync = createAsyncAction(
  'auth/GET_PARTICIPATED_VOTES',
  'auth/GET_PARTICIPATED_VOTES_SUCCESS',
  'auth/GET_PARTICIPATED_VOTES_FAIL',
)<unknown, IMyVotes, AxiosError>();
