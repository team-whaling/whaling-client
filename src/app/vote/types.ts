import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
export type TAction = ActionType<typeof actions>;
export interface IVotePayload extends IVote {
  is_admin_vote: boolean;
  updated_at: string;
  finished_at: string;
  created_price: number;
  finished_price: number;
  spent_point: number;
  is_answer: boolean;
  pos_participants: number;
  neg_participants: number;
  pos_whales: number;
  neg_whales: number;
  uploader: number;
  user: IVoter;
  tracked_at: string;
}

export interface IVote {
  vote_id: number;
  coin: ICoin;
  state: TVoteState;
  created_at: string;
  finished_at: string;
  earned_point: number;
  duration: TDuration;
  range: number;
  comment: TComment;
  total_participants: number;
  user: IVoter;
}
export interface IPostVote {
  choice: TChoice;
}

export const Choice: {
  1: 1;
  2: 2;
} = {
  1: 1, // Yes
  2: 2, // No
};

export type TChoice = keyof typeof Choice;

export interface IVoter {
  choice: TChoice;
  is_answer: boolean | null | undefined;
  participated_at: string;
}

export const Duration: {
  day: 'day';
  week: 'week';
  month: 'month';
} = {
  day: 'day',
  week: 'week',
  month: 'month',
};

export type TDuration = keyof typeof Duration;

export interface ICoin {
  code: string;
  krname: string;
  image: string;
}

export const VoteState: {
  ongoing: 'ongoing';
  finished: 'finished';
  tracked: 'tracked';
} = {
  ongoing: 'ongoing',
  finished: 'finished',
  tracked: 'tracked',
};

export type TVoteState = keyof typeof VoteState;

export const Comment: {
  up: 'up';
  down: 'down';
} = {
  up: 'up',
  down: 'down',
};

export type TComment = keyof typeof Comment;

export interface IVoteReducer {
  votes: IVotePayload[];
  create: ICreateVotePayload;
  coinError: boolean;
}

export interface ICreateVotePayload {
  coin_code: string;
  duration: string;
  range: number;
  comment: string;
}

export const SET_SHOW_ALERTMODAL = 'vote/SET_SHOW_ALERTMODAL';
