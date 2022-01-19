import { createReducer } from 'typesafe-actions';
import { getVotes } from './actions';
import { TAction, IVotePayload } from './types';
const initialState = {
  vote_id: 1,
  is_admin_vote: true,
  choice: true,
  created_at: new Date(2018, 11, 24, 10, 33, 30, 0),
  updated_at: new Date(2018, 11, 24, 10, 33, 30, 0),
  state: 0,
  finished_at: new Date(2018, 11, 24, 10, 33, 30, 0),
  tracked_at: new Date(2018, 11, 24, 10, 33, 30, 0),
  created_price: 1000,
  finished_price: null,
  spent_point: 10,
  earned_point: 20,
  is_answer: false,
  duration: 'day',
  range: 10,
  comment: 'up',
  total_participants: 0,
  pos_participants: 0,
  neg_participants: 0,
  pos_whales: 0,
  neg_whales: 0,
  uploader: 0,
};
export const voteReducer = createReducer<IVotePayload, TAction>(
  initialState,
).handleAction(getVotes.success, (state, action) => action.payload);
