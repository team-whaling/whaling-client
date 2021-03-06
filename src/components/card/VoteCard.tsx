import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Icon from '../Icon';
import Text from '../Text';
import blueDirection from '../../static/icons/blue-direction.svg';
import direction from '../../static/icons/direction.svg';
import { Row, RowBetween, RowCenter } from '../Layout';
import BarGraph from '../graph/BarGraph';
import { useNavigate } from 'react-router-dom';
import { handlePayload } from '../../utils/handlePayload';
import { calculateLeftTime } from '../../utils/calculateTime';
const VoteCard = ({ vote }: any) => {
  // TODO: type은 props로 받을 것
  const finishedTime = vote.finished_at;
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/votes/${vote.vote_id}`)}>
      <RowBetween>
        <RowCenter>
          <img
            src={`${vote.coin.image}`}
            width={14}
            height={14}
            style={{ marginRight: 3 }}
          />
          <Text type="Body2" content={`${vote.coin.code}`} />
          <Text
            type="Body2"
            content=" / "
            style={{ color: `${color.darkness[5]}`, whiteSpace: 'pre-wrap' }}
          />
          <Icon iconType="Person" />
          <Text
            type="Body2"
            content={` ${vote.total_participants}`}
            style={{ color: `${color.darkness[5]}`, whiteSpace: 'pre-wrap' }}
          />
        </RowCenter>
        {vote.state === 'finished' ? (
          ''
        ) : (
          <Text
            type="Caption"
            content={`${calculateLeftTime(finishedTime)} 후 종료`}
            style={{ color: color.darkness[6] }}
          />
        )}
      </RowBetween>
      <Text
        type="Body"
        content={`$${vote.coin.krname}이(가)`}
        style={{ marginTop: 8 }}
      />{' '}
      <br />
      <Text
        type="Body"
        content={`${handlePayload(vote).duration} 후에 ${vote.range}%이상 ${
          handlePayload(vote).comment
        }?`}
      />
      {vote.state === 'finished' ? (
        <>
          {vote.total_participants > 0 ? (
            <div style={{ marginTop: 9 }}>
              <BarGraph voteDetail={vote} kind="card" state={vote.state} />
            </div>
          ) : (
            ''
          )}
        </>
      ) : (
        <RowBetween style={{ marginTop: 14 }}>
          {vote.user.choice === null ? (
            <>
              {vote.is_admin_vote ? (
                <Text
                  type="Body2"
                  content={`이 투표는 고래밥없이 투표할 수 있어요!`}
                  style={{ color: `${color.darkness[5]}` }}
                />
              ) : (
                <Text
                  type="Body2"
                  content={`적중시 고래밥 ${vote.earned_point}개 증정!`}
                  style={{ color: `${color.darkness[5]}` }}
                />
              )}
            </>
          ) : (
            <Text
              type="Body2"
              content="결과가 변화했는지 확인해볼까요? "
              style={{ color: `${color.darkness[5]}` }}
            />
          )}
          <RowCenter>
            {vote.user.choice === null ? (
              <>
                <Text
                  type="Body"
                  content="참여하기"
                  style={{ color: `${color.blue[4]}` }}
                  onClick={() => navigate(`/votes/${vote.vote_id}`)}
                />
                <DirectionIcon src={blueDirection} />
              </>
            ) : (
              <>
                <Text
                  type="Body"
                  content="참여완료"
                  onClick={() => navigate(`/votes/${vote.vote_id}`)}
                />
                <DirectionIcon src={direction} />
              </>
            )}
          </RowCenter>
        </RowBetween>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 311px;

  padding: 12px 16px 16px 16px;
  margin-top: 16px;

  background-color: #ffffff;
  border-radius: 10px;
`;

const DirectionIcon = styled.img`
  width: 6px;
  height: 12px;

  margin-left: 3px;

  transform: rotate(180deg);

  fill: ${color.blue[4]};
`;
export default VoteCard;
