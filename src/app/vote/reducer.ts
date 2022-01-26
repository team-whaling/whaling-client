import { createReducer } from 'typesafe-actions';
import { createVote, getVotes } from './actions';
import { TAction, IVotePayload, IVoteReducer } from './types';
export const voteReducer = createReducer<IVoteReducer, TAction>([])
  .handleAction(getVotes.success, (state, action) => {
    return action.payload;
  })
  .handleAction(createVote.success, (state, action) => {
    return action.payload;
  });
