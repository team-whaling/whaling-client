import { createReducer } from 'typesafe-actions';
import { checkUserVerificationAsync, getAccessTokenAsync } from './actions';
import { IAuthReducer, TAction } from './types';

const initialState: IAuthReducer = {
  user: {
    nickname: '',
  },
  authorized: false,
};

export const authReducer = createReducer<IAuthReducer, TAction>(
  initialState,
  {},
)
  .handleAction(getAccessTokenAsync.success, (state, action) => ({
    ...state,
    user: action.payload.user,
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
  }));
