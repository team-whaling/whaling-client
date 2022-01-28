import { createReducer } from 'typesafe-actions';
import { createVote, getVotes } from './actions';
import {
  TAction,
  IVotePayload,
  IVoteReducer,
  ICreateVotePayload,
} from './types';
const initialState = {
  vote_id: 3,
  coin: {
    code: 'AAVE',
    krname: '에이브',
    image: 'https://cryptologos.cc/logos/aave-aave-logo.svg?v=018',
  },
  is_admin_vote: true,
  created_at: '2022-01-19T13:17:07.575804',
  updated_at: '2022-01-19T13:54:42.634545',
  state: 'tracked',
  finished_at: '2022-01-19T22:55:00',
  tracked_at: '2022-01-19T22:56:00',
  created_price: 250000,
  finished_price: 257700,
  spent_point: 10,
  earned_point: 20,
  is_answer: true,
  duration: 'day',
  range: 5,
  comment: 'up',
  total_participants: 100,
  pos_participants: 30,
  neg_participants: 70,
  pos_whales: 20,
  neg_whales: 30,
  uploader: 47426160,
  user: {
    choice: 1,
    is_answer: null,
  },
};

export const voteReducer = createReducer<IVotePayload, TAction>(
  initialState,
).handleAction(getVotes.success, (state, action) => {
  return action.payload;
});
