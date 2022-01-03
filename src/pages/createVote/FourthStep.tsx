import React from 'react';
import styled from 'styled-components';
import Button, { createVoteBtnStyle } from '../../components/Button';
import color from '../../styles/color';
const FourthStep = ({ nextStep }: any) => {
  return (
    <div>
      <p>예상 추이를 선택해주세요.</p>
      <UpDownBtnContainer>
        <UpDownBtn>오를까요</UpDownBtn>
        <UpDownBtn>내릴까요</UpDownBtn>
      </UpDownBtnContainer>
      <Button
        buttonType="Progress"
        content="다음"
        style={createVoteBtnStyle}
        onClick={nextStep}
      />
    </div>
  );
};
const UpDownBtnContainer = styled.div`
  display: flex;

  margin: 0 16px;
`;
const UpDownBtn = styled.button`
  all: unset;

  text-align: center;

  width: 165px;
  height: 55px;

  margin-right: 12px;

  border: 0.2px solid #2b2d31;
  border-radius: 10px;
`;
export default FourthStep;
