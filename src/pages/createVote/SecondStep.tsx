import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Column, RowAround } from '../../components/Layout';
import StepBar from '../../components/StepBar';
import Text from '../../components/Text';
import {
  ProgressBtnWrapper,
  RoundedMarker,
} from '../../styles/createvote.styles';
const SecondStep = ({ answer, setAnswer, nextStep }: any) => {
  const [period, setPeriod] = useState('');
  const [disabled, setDisabled] = useState(true);

  const onPeriodBtnClick = (e: any) => {
    setPeriod(e.target.parentNode.innerText.split('\n'));
    setDisabled(!disabled);
  };

  const onClick = () => {
    nextStep();
    setAnswer([...answer, period]);
  };

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
        <PeriodButton onClick={onPeriodBtnClick}>
          <Period>1일</Period>
          <VotePeriod>8시간 진행</VotePeriod>
        </PeriodButton>
        <PeriodButton onClick={onPeriodBtnClick}>
          <Period>1주일</Period>
          <VotePeriod>3일 진행</VotePeriod>
        </PeriodButton>
        <PeriodButton onClick={onPeriodBtnClick}>
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
      <ProgressBtnWrapper>
        <StepBar step={2} />
        <Button
          buttonType="Progress"
          content="다음"
          onClick={onClick}
          disabled={disabled}
        />
      </ProgressBtnWrapper>
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
