import { createAction } from 'typesafe-actions';

export const setCheckingTokenLoading = createAction(
  'loading/SET_CHECKING_TOKEN_LOADING',
)<boolean>();

export const setGettingTokenLoading = createAction(
  'loading/SET_GETTING_TOKEN_LOADING',
)<boolean>();
