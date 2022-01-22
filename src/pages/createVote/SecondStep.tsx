import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { Column, RowAround } from '../../components/Layout';
import Text from '../../components/Text';
import { RoundedMarker } from '../../styles/createvote.styles';
const SecondStep = () => {
  return (
    <div>
      <Column>
        <Text type="Title2" content="예상 기간을 선택해주세요." />
        <Text
          type="Caption"
          content="투표 기간은 1일-8시간/1주일-3일/1개월-1주로 진행됩니다."
          style={caption}
        />
      </Column>
      <RowAround>
        <PeriodButton>
          <Period>1일</Period>
          <VotePeriod>8시간 진행</VotePeriod>
        </PeriodButton>
        <PeriodButton>
          <Period>1주일</Period>
          <VotePeriod>3일 진행</VotePeriod>
        </PeriodButton>
        <PeriodButton>
          <Period>1개월</Period>
          <VotePeriod>1주일 진행</VotePeriod>
        </PeriodButton>
      </RowAround>
      <Text
        type="Caption"
        content="예시) $비트코인이 "
        style={{ marginLeft: '7px' }}
      />
      <RoundedMarker width={42}>
        <Text type="Caption" content="1개월" style={{ color: '#FFFFFF' }} />
      </RoundedMarker>
      <Text type="Caption" content=" 후에 10%이상 오를까요?" />
    </div>
  );
};

const PeriodButton = styled.button`
  all: unset;

  width: 108px;
  height: 90px;
  &:nth-child(2) {
    margin: 0 10px;
  }

  text-align: center;

  border: 1px solid rgb(43, 45, 49, 0.3);
  border-radius: 10px;
`;

const Period = styled.div`
  font-size: 15px;
`;
const VotePeriod = styled.div`
  font-size: 11px;
`;

const caption: CSSProperties = { marginTop: '8px', marginBottom: '28px' };

export default SecondStep;
