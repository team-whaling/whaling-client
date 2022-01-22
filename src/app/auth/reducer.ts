import { createReducer } from 'typesafe-actions';
import { checkUserVerificationAsync } from './actions';
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
  .handleAction(checkUserVerificationAsync.success, (state, action) => ({
    ...state,
    authorized: true,
  }))
  .handleAction(checkUserVerificationAsync.failure, (state, action) => ({
    ...state,
    authorized: false,
  }));
