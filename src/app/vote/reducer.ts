import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from 'typesafe-actions';
import { createVote, getVote, getVotes } from './actions';
import { TAction, IVotePayload, ICreateVotePayload } from './types';
const initialState = {
  getVote: {
    vote_id: 0,
    coin: {
      code: '',
      krname: '',
      image: '',
    },
    is_admin_vote: true,
    created_at: '',
    updated_at: '',
    state: '',
    finished_at: '',
    tracked_at: '',
    created_price: 0,
    finished_price: 0,
    spent_point: 0,
    earned_point: 0,
    is_answer: true,
    duration: '',
    range: 0,
    comment: '',
    total_participants: 0,
    pos_participants: 0,
    neg_participants: 0,
    pos_whales: 0,
    neg_whales: 0,
    uploader: 0,
    user: {
      choice: 0,
      is_answer: null,
    },
  },
  createVote: {
    coin_code: '',
    duration: '',
    range: 0,
    comment: '',
  },
};

const getVoteReducer = createReducer<IVotePayload[], TAction>([
  initialState.getVote,
]).handleAction(getVotes.success, (state, action) => {
  return action.payload;
});

const createVoteReducer = createReducer<ICreateVotePayload, TAction>(
  initialState.createVote,
).handleAction(createVote.success, (state, action) => {
  return action.payload;
});

export const voteReducer = combineReducers({
  getVoteReducer,
  createVoteReducer,
});
