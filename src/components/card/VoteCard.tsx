import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Icon from '../Icon';
import Text from '../Text';
import direction from '../../static/icons/direction.svg';
import { Row, RowBetween, RowCenter } from '../Layout';
import BarGraph from '../graph/BarGraph';
import { useNavigate } from 'react-router-dom';
const VoteCard = ({ vote }: any) => {
  // TODO: type은 props로 받을 것
  const navigate = useNavigate();
  let voted = true;
  let completed = false;
  const data = {
    yes: 1,
    no: 1,
  };
  return (
    <Container>
      <RowBetween>
        <Row>
          <img src={`${vote.coin.image}`} width={14} />
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
        </Row>
        {completed ? '' : <Text type="Caption" content="48분 후 종료" />}
      </RowBetween>
      <Text type="Body" content={`${vote.coin.krname}이`} /> <br />
      <Text
        type="Body"
        content={`${vote.duration} 후에 ${vote.range}%이상 ${vote.comment}?`}
      />
      {completed ? (
        <div style={{ marginTop: 9 }}>
          <BarGraph data={data} kind="card" completed={completed} />
        </div>
      ) : (
        <RowBetween style={{ marginTop: 14 }}>
          {voted ? (
            <Text
              type="Body2"
              content={`적중시 고래밥 ${vote.earned_point}개 증정!`}
              style={{ color: `${color.darkness[5]}` }}
            />
          ) : (
            <Text
              type="Body2"
              content="결과가 변화했는지 확인해볼까요? "
              style={{ color: `${color.darkness[5]}` }}
            />
          )}
          <RowCenter>
            {voted ? (
              <Text
                type="Body"
                content="참여하기"
                style={{ color: `${color.blue[4]}` }}
                onClick={() => navigate(`/votes/${vote.vote_id}`)}
              />
            ) : (
              <Text type="Body" content="참여 완료" />
            )}
            <DirectionIcon src={direction} />
          </RowCenter>
        </RowBetween>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 311px;
  1height: 99px;

  padding: 12px;
  margin-top: 16px;

  background-color: #ffffff;
  border-radius: 10px;

  border: 1px solid black;
`;

const DirectionIcon = styled.img`
  width: 12px;
  height: 6px;

  transform: rotate(180deg);

  fill: ${color.blue[4]};
`;
export default VoteCard;
