import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Text from '../Text';
import { Row, RowBetween } from '../Layout';
import BarGraph from '../graph/BarGraph';
import color from '../../styles/color';
const MainVoteCard = () => {
  let completed = false;
  return (
    <Container>
      <RowBetween>
        <Row>
          <img src="" width={14} /> <Text type="Body2" content="BTC" />
          <Text
            type="Body2"
            content=" / "
            style={{ color: `${color.darkness[5]}`, whiteSpace: 'pre-wrap' }}
          />
          <Icon iconType="Person" />
        </Row>
        <Text type="Caption" content="48분 후 종료" />
      </RowBetween>
      <Text type="Body" content="$비트코인이" />
      <Text type="Body" content="1개월 후에 10%이상 오를까요?" />
      <div style={{ marginTop: 9 }}>
        <BarGraph kind="card" completed={completed} />
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
