import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { IVotePayload } from './types';
export const getVotes = createAsyncAction(
  'vote/GET_VOTES_REQUEST',
  'vote/GET_VOTES_SUCCESS',
  'vote/GET_VOTES_FAIL',
)<unknown, IVotePayload, AxiosError>();
