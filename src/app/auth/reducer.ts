import { createReducer } from 'typesafe-actions';
import {
  checkUserVerificationAsync,
  editNicknameAsync,
  getAccessTokenAsync,
  getCreatedVotesAsync,
  getParticipatedVotesAsync,
  getUserInfoAsync,
  initializeNicknameDuplicationInfo,
} from './actions';
import { IAuthReducer, initialMyVotes, TAction } from './types';

const initialState: IAuthReducer = {
  user: {
    nickname: '',
    duplicated: undefined,
    acc_percent: 0,
    point: 0,
    profile_img: undefined,
    is_default_profile: true,
  },
  authorized: false,
  httpResponseStatus: 0,
  participated_votes: initialMyVotes,
  created_votes: initialMyVotes,
};

export const authReducer = createReducer<IAuthReducer, TAction>(
  initialState,
  {},
)
  .handleAction(getAccessTokenAsync.success, (state, action) => ({
    ...state,
    user: action.payload.user,
    httpResponseStatus: action.payload.httpResponseStatus,
    authorized: true,
  }))
  .handleAction(getAccessTokenAsync.failure, (state, action) => ({
    ...state,
  }))
  .handleAction(checkUserVerificationAsync.success, (state, action) => ({
    ...state,
    authorized: true,
  }))
  .handleAction(checkUserVerificationAsync.failure, (state, action) => ({
    ...state,
    authorized: false,
  }))
  .handleAction(editNicknameAsync.success, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      nickname: action.payload.nickname,
      duplicated: action.payload.duplicated,
    },
  }))
  .handleAction(editNicknameAsync.failure, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      nickname: state.user.nickname,
      duplicated: true,
    },
  }))
  .handleAction(initializeNicknameDuplicationInfo, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      nickname: state.user.nickname,
      duplicated: undefined,
    },
  }))
  .handleAction(getUserInfoAsync.success, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      ...action.payload,
    },
  }))
  .handleAction(getUserInfoAsync.failure, (state, action) => ({
    ...state,
  }))
  .handleAction(getCreatedVotesAsync.success, (state, action) => ({
    ...state,
    created_votes: action.payload,
  }))
  .handleAction(getCreatedVotesAsync.failure, (state, action) => ({
    ...state,
  }))
  .handleAction(getParticipatedVotesAsync.success, (state, action) => ({
    ...state,
    participated_votes: action.payload,
  }))
  .handleAction(getParticipatedVotesAsync.failure, (state, action) => ({
    ...state,
  }));
