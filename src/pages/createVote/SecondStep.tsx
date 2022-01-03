import React from 'react';
import styled from 'styled-components';
import Button, { createVoteBtnStyle } from '../../components/Button';
const SecondStep = ({ nextStep }: any) => {
  return (
    <div>
      <p>예상 기간을 선택해주세요.</p>
      <p>투표 기간은 1일-8시간/1주일-3일/1개월-1주로 진행됩니다.</p>
      <PeriodButton>1일 8시간 진행</PeriodButton>
      <Button
        buttonType="Progress"
        content="다음"
        style={createVoteBtnStyle}
        onClick={nextStep}
      />
    </div>
  );
};
const PeriodButton = styled.button`
  width: 108px;
  height: 90px;

  border: 0.3px solid #2b2d31;
  border-radius: 10px;
`;
export default SecondStep;
