import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
export type TAction = ActionType<typeof actions>;
export interface IVotePayload {
  vote_id: number;
  is_admin_vote: boolean;
  choice: boolean;
  created_at: string;
  updated_at: string;
  state: number;
  finished_at: string;
  tracked_at: string;
  created_price: number;
  finished_price: null;
  spent_point: number;
  earned_point: number;
  is_answer: boolean;
  duration: string;
  range: number;
  comment: string;
  total_participants: number;
  pos_participants: number;
  neg_participants: number;
  pos_whales: number;
  neg_whales: number;
  uploader: number;
}
