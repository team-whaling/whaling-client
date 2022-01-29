import { createReducer } from 'typesafe-actions';
import { createVote, getVotes } from './actions';
import { TAction, IVoteReducer } from './types';
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
  ],
  create: {
    coin_code: '',
    duration: '',
    range: 0,
    comment: '',
  },
};

export const voteReducer = createReducer<IVoteReducer, TAction>(initialState)
  .handleAction(getVotes.success, (state, action) => ({
    ...state,
    votes: action.payload,
  }))
  .handleAction(createVote.success, (state, action) => ({
    ...state,
    create: action.payload,
  }));
