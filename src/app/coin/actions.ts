import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { ICoinList } from './types';

export const getCoins = createAsyncAction(
  'coin/GET_COINS_REQUEST',
  'coin/GET_COINS_SUCCESS',
  'coin/GET_COINS_FAIL',
)<unknown, ICoinList[], AxiosError>();
