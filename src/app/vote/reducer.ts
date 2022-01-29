import { createReducer } from 'typesafe-actions';
import { createVote, getVotes, postVote } from './actions';
import {
  TAction,
  IVoteReducer,
  VoteState,
  Duration,
  Comment,
  Choice,
} from './types';
const initialState = {
  votes: [
    {
      vote_id: 0,
      coin: {
        code: '',
        krname: '',
        image: '',
      },
      is_admin_vote: true,
      created_at: '',
      updated_at: '',
      state: VoteState.ongoing,
      finished_at: '',
      tracked_at: '',
      created_price: 0,
      finished_price: 0,
      spent_point: 0,
      earned_point: 0,
      is_answer: true,
      duration: Duration.day,
      range: 0,
      comment: Comment[0],
      total_participants: 0,
      pos_participants: 0,
      neg_participants: 0,
      pos_whales: 0,
      neg_whales: 0,
      uploader: 0,
      user: {
        choice: Choice[1],
        is_answer: null,
      },
    },
  ],
  create: {
    coin_code: '',
    duration: '',
    range: 0,
    comment: '',
  },
  coinError: false,
};

export const voteReducer = createReducer<IVoteReducer, TAction>(initialState)
  .handleAction(getVotes.success, (state, action) => ({
    ...state,
    votes: action.payload,
  }))
  .handleAction(createVote.success, (state, action) => ({
    ...state,
    create: action.payload,
  }))
  .handleAction(postVote.success, (state, action) => ({
    ...state,
  }))
  .handleAction(postVote.failure, (state, action) => ({
    ...state,
    coinError: true,
  }))
  .handleAction(createVote.failure, (state, action) => ({
    ...state,
    coinError: true,
  }));
