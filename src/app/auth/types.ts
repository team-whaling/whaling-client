import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Comment, Duration, IVote, VoteState } from '../vote/types';

export interface IUser {
  nickname: string;
  duplicated: boolean | undefined;
  acc_percent: number;
  point: number;
  profile_img: null | undefined | string;
  is_default_profile: boolean;
}

export interface IAuthReducer {
  user: IUser;
  authorized: boolean;
  httpResponseStatus: number;
  participated_votes: IMyVotes;
  created_votes: IMyVotes;
}

export interface IGetAccessToken {
  code: string;
  redirect_uri: string;
}

export interface IGetAccessTokenResponse {
  user: IUser;
  token: {
    refresh_token: string;
    access_token: string;
  };
  httpResponseStatus: number;
}

export interface IGetNewAccessToken {
  refresh: string;
}

export interface IGetNewAccessTokenResponse {
  access: string;
  expirationTime: number;
}

export interface IEditNickname {
  nickname: string;
}

export interface IMyVotes {
  ongoing_count: number;
  finished_count: number;
  votes: IVote[];
}

export const initialMyVotes: IMyVotes = {
  ongoing_count: 0,
  finished_count: 0,
  votes: [
    {
      vote_id: -1,
      coin: { code: '', krname: '', image: '' },
      state: VoteState.ongoing,
      created_at: '',
      finished_at: '',
      earned_point: 0,
      duration: Duration.day,
      range: 0,
      comment: Comment[0],
      total_participants: 0,
    },
  ],
};

export type TAction = ActionType<typeof actions>;

// Created Votes
// {
//   "ongoing_count": 2,
//   "finished_count": 0,
//   "votes": [
//     {
//       "vote_id": 5,
//       "coin": {
//         "code": "BTC",
//         "krname": "비트코인",
//         "image": "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=018"
//       },
//       "state": "ongoing",
//       "created_at": "2022-01-22T07:05:19.206269",
//       "finished_at": "2022-01-23T00:05:00",
//       "earned_point": 20,
//       "duration": "day",
//       "range": 15,
//       "comment": "up",
//       "total_participants": 0
//     },
//     {
//       "vote_id": 6,
//       "coin": {
//         "code": "BTC",
//         "krname": "비트코인",
//         "image": "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=018"
//       },
//       "state": "ongoing",
//       "created_at": "2022-01-22T08:09:52.945557",
//       "finished_at": "2022-01-29T17:09:00",
//       "earned_point": 20,
//       "duration": "month",
//       "range": 105,
//       "comment": "down",
//       "total_participants": 0
//     }
//   ]
// }

// Participated Votes
// {
//   "ongoing_count": 0,
//   "finished_count": 1,
//   "votes": [
//     {
//       "vote_id": 3,
//       "coin": {
//         "code": "AAVE",
//         "krname": "에이브",
//         "image": "https://cryptologos.cc/logos/aave-aave-logo.svg?v=018"
//       },
//       "state": "tracked",
//       "created_at": "2022-01-19T13:17:07.575804",
//       "finished_at": "2022-01-19T22:55:00",
//       "earned_point": 20,
//       "duration": "day",
//       "range": 5,
//       "comment": "up",
//       "total_participants": 102
//     }
//   ]
// }
