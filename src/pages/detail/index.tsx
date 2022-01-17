import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import {
  Column,
  ColumnCenter,
  RowBetween,
  RowCenter,
} from '../../components/Layout';
import Button from '../../components/Button';
import color from '../../styles/color';
const index = () => {
  return (
    <div style={{ width: '375px' }}>
      <div style={{ padding: '0 16px' }}>
        <RowBetween>
          <Icon iconType="Close" />
          <Column>
            <Text type="Body2" content="21.12.16 - 21.12.25" />
            <Text type="Body2" content="12시간 후 결과공개" />
          </Column>
        </RowBetween>
        <Column>
          <Text type="Headline" content="201명 참여중" />
          <Text type="Body" content="적중 시 +20" />
        </Column>
      </div>
      <VoteDetail>
        <CoinImg />
        <Text type="Headline" content="$비트코인이 1개월 후에" />
        <Text type="Headline" content="10%이상 오를까요?" />
        <Text
          type="Body2"
          content="*투표 생성 시점 8400원"
          style={{ marginTop: '8px', marginBottom: '12px' }}
        />
        <RowCenter>
          <Button buttonType="Answer" content="예" />
          <BetweenText>VS</BetweenText>
          <Button buttonType="Answer" content="아니오" />
        </RowCenter>
      </VoteDetail>
    </div>
  );
};

const VoteDetail = styled(ColumnCenter)`
  position: relative;

  width: 100%;

  margin-top: 69px;
  padding-top: 40px;

  border-radius: 25px 25px 0 0;
  border-top: 1px solid black;
`;

const CoinImg = styled.img`
  position: absolute;
  top: -64px;

  width: 91px;
  height: 91px;

  border-radius: 50%;
  border: 5px solid black;

  background-color: #ffffff;
`;

const BetweenText = styled.span`
  margin: 0 16px;

  font-weight: bold;
  font-size: 18px;
  color: ${color.blue[4]};
`;
export default index;
