import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Text from '../Text';
import Chip, { ChipType } from '../Chip';
import { Row, RowBetween, RowCenter } from '../Layout';
import {
  Comment,
  Duration,
  ICoin,
  TVoteState,
  VoteState,
} from '../../app/vote/types';
import useVote from '../../hooks/useVote';
import useAuth from '../../hooks/useAuth';
import { IVoteSentence } from '../../pages/myPage/voteList';
import { useNavigate } from 'react-router-dom';

interface IListVoteCard extends React.HTMLAttributes<HTMLElement> {
  voteState: TVoteState;
  voted: boolean;
  coin: ICoin;
  voteId: number;
  voteSentence: IVoteSentence;
  // date: string;
}
const ListVoteCard = ({
  voteState,
  voted,
  coin,
  voteId,
  voteSentence,
}: IListVoteCard) => {
  const { participatedVotes, createdVotes } = useAuth();
  const thisVote = participatedVotes.votes.find(
    (vote) => vote.vote_id === voteId,
  );
  const { comment, range, duration } = voteSentence;
  const krDuration =
    duration === Duration.day
      ? '일'
      : duration === Duration.week
      ? '주일'
      : '개월';
  const krComment = comment === Comment[1] ? '오를까요' : '내릴까요';
  const participated = voted
    ? participatedVotes.votes
        .filter((vote) => vote.vote_id === voteId)[0]
        .user.participated_at.substr(2, 8)
    : '';
  const created = voted
    ? ''
    : createdVotes.votes
        .filter((vote) => vote.vote_id === voteId)[0]
        .created_at.substr(2, 8);
  const navigate = useNavigate();

  const seeVoteDetail = () => {
    navigate(`/votes/${voteId}`);
  };

  return (
    <Container onClick={seeVoteDetail}>
      <Row style={{ alignItems: 'center' }}>
        <img
          src={coin.image}
          width={14}
          height={14}
          style={{ marginRight: 3 }}
        />
        <Text type="Body2" content={coin.krname} style={{ marginRight: 8 }} />
        {voted ? (
          <Text
            type="Caption"
            content={`${participated}에 참여`}
            style={{ color: `${color.darkness[4]}` }}
          />
        ) : (
          <Text
            type="Caption"
            content={`${created}에 생성`}
            style={{ color: `${color.darkness[4]}` }}
          />
        )}
      </Row>
      <RowBetween style={{ alignItems: 'flex-end' }}>
        <Text
          type="Body2"
          content={`$${coin.krname}이 1${krDuration} 후에 ${range}%이상 ${krComment}?`}
        />
        {voteState === VoteState.finished && voted && (
          <Chip chipType={ChipType.Wait} />
        )}

        {voteState === VoteState.tracked && voted && (
          <Chip
            chipType={thisVote?.is_answer ? ChipType.Success : ChipType.Fail}
          />
        )}
      </RowBetween>
    </Container>
  );
};
const Container = styled.div`
  width: 317px;

  padding: 13px;
  margin-top: 12px;

  background: #ffffff;

  border-radius: 10px;
  /* border: 1px solid black; */
`;

export default ListVoteCard;
