import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Text from '../Text';
import { Row, RowBetween, RowCenter } from '../Layout';
import BarGraph from '../graph/BarGraph';
import color from '../../styles/color';
import { handlePayload } from '../../utils/handlePayload';
const MainVoteCard = ({ vote }: any) => {
  return (
    <Container>
      <RowBetween>
        <RowCenter>
          <img
            src={`${vote.coin.image}`}
            width={14}
            height={14}
            style={{ marginRight: 3 }}
          />
          <Text type="Body2" content={`$${vote.coin.code}`} />
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
        <Text type="Caption" content="48분 후 종료" />
      </RowBetween>
      <Text type="Body" content={`$${vote.coin.krname}이(가)`} /> <br />
      <Text
        type="Body"
        content={`${handlePayload(vote).duration} 후에 ${vote.range}%이상 ${
          handlePayload(vote).comment
        }?`}
      />
      <div style={{ marginTop: 9 }}>
        <BarGraph voteDetail={vote} kind="card" state={vote.state} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 311px;
  1height: 99px;

  padding: 12px;
  margin-top: 16px;

  background-color: #ffffff;
  box-shadow: 2px 4px 15px rgba(70, 82, 230, 0.05);

  border-radius: 10px;
  border: 1px solid rgba(232, 233, 235, 0.5);
`;

export default MainVoteCard;
