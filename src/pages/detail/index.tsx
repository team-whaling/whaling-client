import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import {
  Column,
  ColumnCenter,
  Row,
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
          <Row>
            <Text type="Body" content="적중 시 " />
            <Icon iconType="Dollar" style={{ margin: '2px' }} />
            <Text type="Body" content="+20" />
          </Row>
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
        {/* TODO: 사용자의 투표 완료 상태에 따라 투표 결과 막대 그래프를 보여줌 */}
        <RowCenter>
          <Button buttonType="Answer" content="예" />
          <BetweenText>VS</BetweenText>
          <Button buttonType="Answer" content="아니오" />
        </RowCenter>
      </VoteDetail>
      <hr
        style={{
          border: `7px solid ${color.darkness[1]}`,
          marginTop: '20px',
        }}
      />
      <Column style={{ marginLeft: '18px' }}>
        <Text type="Headline" content="핵심 통계" />
        <div>
          <Text type="Body2" content="적중률이 70% 이상" />
          <Text type="Body2" content="인 유저들의 정보들을 취합한 통계입니다" />
          <Text
            type="Body2"
            content="유저의 적중률은 투표한 시점의 적중률로 반영합니다"
          />
        </div>
      </Column>
      {/* TODO: 사용자의 투표 완료 상태에 따라 원그래프를 보여줌 */}
      <div>그래프</div>
      <ColumnCenter style={warning}>
        <Icon iconType="Info" />
        <Text
          type="Caption"
          content="모든 통계와 결과는 유저들의 생각을 정리한 것으로"
        />
        <Text
          type="Caption"
          content="이를 맹목적으로 믿고 따름으로써 일어나는 개개인의 손실과 피해는"
        />
        <Text type="Caption" content="웨일링의 책임이 아님을 명시합니다." />
      </ColumnCenter>
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

const warning: CSSProperties = {
  backgroundColor: `${color.darkness[1]}`,
  paddingTop: '15px',
  paddingBottom: '20px',
};
export default index;
