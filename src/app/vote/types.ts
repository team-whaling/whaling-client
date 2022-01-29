import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
export type TAction = ActionType<typeof actions>;
export interface IVotePayload {
  vote_id: number;
  coin: {
    code: string;
    krname: string;
    image: string;
  };
  is_admin_vote: boolean;
  created_at: string;
  updated_at: string;
  state: string;
  finished_at: string;
  tracked_at: string;
  created_price: number;
  finished_price: number;
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
  user: {
    choice: number;
    is_answer: null;
  };
}

export interface IVoteReducer {
  votes: IVotePayload[];
  create: ICreateVotePayload;
}

export interface ICreateVotePayload {
  coin_code: string;
  duration: string;
  range: number;
  comment: string;
}
