import React from 'react';
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
import { IVoteSentence } from '../../pages/myPage/voteList';

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
  const { getVote } = useVote();
  const thisVote = getVote(voteId);
  const { comment, range, duration } = voteSentence;
  const krDuration =
    duration === Duration.day
      ? '일'
      : duration === Duration.week
      ? '주일'
      : '개월';
  const krComment = comment === Comment[1] ? '오를까요' : '내릴까요';

  return (
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <img
          src={coin.image}
          width={14}
          height={14}
          style={{ marginRight: 3 }}
        />
        <Text type="Body2" content={coin.krname} style={{ marginRight: 8 }} />
        <Text
          type="Caption"
          content={`21.12.25에 ${voted ? '참여' : '생성'}`}
          style={{ color: `${color.darkness[4]}` }}
        />
      </Row>
      <RowBetween>
        <Text
          type="Body2"
          content={`$${coin.krname}이 1${krDuration} 후에 ${range}%이상 ${krComment}?`}
        />
        {voteState === VoteState.finished && voted && (
          <Chip
            chipType={thisVote.is_answer ? ChipType.Success : ChipType.Fail}
          />
        )}

        {voteState === VoteState.tracked && voted && (
          <Chip chipType={ChipType.Wait} />
        )}
      </RowBetween>
    </Container>
  );
};
const Container = styled.div`
  width: 317px;

  padding: 13px;
  margin: 12px 0;

  background: #ffffff;

  border-radius: 10px;
  /* border: 1px solid black; */
`;

export default ListVoteCard;
