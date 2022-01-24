import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { Column, ColumnCenter, Row, RowAround, RowBetween } from '../Layout';
import Icon from '../Icon';
import color from '../../styles/color';
const MyPageCard = () => {
  return (
    <Container>
      <RowBetween style={{ margin: '11px 16px' }}>
        <Text type="Headline3" content="내가 생성한 투표" />
        <Icon
          iconType="MainBack"
          style={{ display: 'flex', transform: 'rotate(180deg)' }}
        />
      </RowBetween>
      <hr style={hrStyle} />
      <RowAround style={{ margin: '29px 0' }}>
        <ColumnCenter>
          <Icon iconType="Whole" />
          <Text
            type="Caption"
            content="전체"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type="Headline3" content="12건" />
        </ColumnCenter>
        <ColumnCenter>
          <Icon iconType="Inprogress" />
          <Text
            type="Caption"
            content="진행"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type="Headline3" content="6건" />
        </ColumnCenter>
        <ColumnCenter>
          <Icon iconType="Completed" />
          <Text
            type="Caption"
            content="완료"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type="Headline3" content="6건" />
        </ColumnCenter>
      </RowAround>
    </Container>
  );
};

const hrStyle: CSSProperties = {
  border: `1px solid ${color.darkness[3]}`,
};

const Container = styled.div`
  width: 343px;
  height: 165px;

  margin-top: 16px;

  background: #ffffff;
  border: 1px solid rgba(198, 200, 203, 0.5);
  border-radius: 10px;

  box-shadow: 2px 4px 15px rgba(70, 82, 230, 0.05);
`;
export default MyPageCard;
