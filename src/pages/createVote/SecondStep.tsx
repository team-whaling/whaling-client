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
      <PeriodBtnContainer>
        <PeriodButton>
          1일 <br />
          8시간 진행
        </PeriodButton>
        <PeriodButton>
          1주일 <br />
          3일 진행
        </PeriodButton>
        <PeriodButton>
          1개월 <br />
          1주 진행
        </PeriodButton>
      </PeriodBtnContainer>
      <Text
        type="Caption"
        content="예시) $비트코인이 "
        style={{ marginLeft: '7px' }}
      />
      <RoundedMarker width={'42px'}>
        <Text type="Caption" content="1개월" style={{ color: '#FFFFFF' }} />
      </RoundedMarker>
      <Text type="Caption" content=" 후에 10%이상 오를까요?" />
    </div>
  );
};
const PeriodBtnContainer = styled(RowAround)`
  display: flex;
  justify-content: space-around;

  margin-bottom: 20px;
`;
const PeriodButton = styled.button`
  all: unset;

  width: 108px;
  height: 90px;

  text-align: center;

  border: 0.3px solid #2b2d31;
  border-radius: 10px;
`;

const caption: CSSProperties = { marginTop: '8px', marginBottom: '28px' };

export default SecondStep;
