import React from 'react';
import styled from 'styled-components';
import Button, { createVoteBtnStyle } from '../../components/Button';
const FourthStep = ({ nextStep }: any) => {
  return (
    <div>
      <p>예상 추이를 선택해주세요.</p>
      <UpDownBtn>오를까요</UpDownBtn>
      <Button
        buttonType="Progress"
        content="다음"
        style={createVoteBtnStyle}
        onClick={nextStep}
      />
    </div>
  );
};
const UpDownBtn = styled.button`
  width: 165px;
  height: 55px;

  background: #2b2d31;

  border-radius: 10px;
`;
export default FourthStep;
