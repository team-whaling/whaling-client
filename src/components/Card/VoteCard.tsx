import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Icon from '../Icon';
import Text from '../Text';
import direction from '../../static/icons/direction.svg';
import { Row, RowBetween, RowCenter } from '../Layout';
import BarGraph from '../graph/BarGraph';
const VoteCard = () => {
  // TODO: type은 props로 받을 것
  //type은 ongoing, completed, tracked
  let type = 'tracked';
  return (
    <Container>
      <RowBetween>
        <Row>
          <img src="" width={14} /> / <Icon iconType="Person" />
        </Row>
        <Text type="Caption" content="48분 후 종료" />
      </RowBetween>
      <Text type="Body" content="$스테이터스네트워크토큰이" />
      <Text type="Body" content="1개월 후에 10%이상 오를까요?" />
      {type === 'tracked' ? (
        <div style={{ marginTop: 9 }}>
          <BarGraph kind="card" />
        </div>
      ) : (
        <RowBetween style={{ marginTop: 14 }}>
          {type === 'ongoing' ? (
            <Text
              type="Body2"
              content="적중시 고래밥 20개 증정!"
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
            {type === 'ongoing' ? (
              <Text
                type="Body"
                content="참여하기"
                style={{ color: `${color.blue[4]}` }}
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
  margin: 0;

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
