import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Text from '../Text';
import Chip from '../Chip';
import { Row, RowBetween } from '../Layout';
const ListVoteCard = () => {
  let completed = true;
  let voted = true;
  return (
    <Container>
      <Row>
        <img src="" width={14} />
        <Text type="Body2" content="BTC" style={{ marginRight: 8 }} />
        <Text
          type="Caption"
          content="21.12.25에 참여"
          style={{ color: `${color.darkness[4]}` }}
        />
      </Row>
      <RowBetween>
        <Text type="Body2" content="$비트코인이 1개월 후에 10%이상 오를까요?" />
        {completed && voted ? <Chip chipType="Success" /> : ''}
      </RowBetween>
    </Container>
  );
};
const Container = styled.div`
  width: 317px;

  padding: 13px;

  background: #ffffff;

  border-radius: 10px;
  border: 1px solid black;
`;

export default ListVoteCard;
