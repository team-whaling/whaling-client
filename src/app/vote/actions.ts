import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { IVotePayload, ICreateVotePayload } from './types';

export const getVotes = createAsyncAction(
  'vote/GET_VOTES_REQUEST',
  'vote/GET_VOTES_SUCCESS',
  'vote/GET_VOTES_FAIL',
)<unknown, IVotePayload[], AxiosError>();

export const createVote = createAsyncAction(
  'vote/CREATE_VOTE_REQUEST',
  'vote/CREATE_VOTE_SUCCESS',
  'vote/CREATE_VOTE_FAIL',
)<unknown, ICreateVotePayload, AxiosError>();

export const postVote = createAsyncAction(
  'vote/POST_VOTE_REQUEST',
  'vote/POST_VOTE_SUCCESS',
  'vote/POST_VOTE_FAIL',
)<unknown, any, AxiosError>();
