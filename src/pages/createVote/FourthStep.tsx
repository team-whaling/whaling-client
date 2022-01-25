import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {
  ProgressBtnWrapper,
  RoundedMarker,
} from '../../styles/createvote.styles';
import { RowBetween } from '../../components/Layout';
import StepBar from '../../components/StepBar';
const FourthStep = ({ answer, setAnswer, nextStep }: any) => {
  const onClick = (e: any) => {
    nextStep();
    setAnswer([...answer, e.target.innerText]);
  };

  return (
    <div>
      <Text type="Title2" content="예상 추이를 선택해주세요." />
      <UpDownBtnContainer>
        <Button buttonType="Question" content="올라갈까요" onClick={onClick} />
        <Button buttonType="Question" content="내려갈까요" onClick={onClick} />
      </UpDownBtnContainer>
      <div>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 10% 이상 " />
        <RoundedMarker width={68}>
          <Text
            type="Caption"
            content="올라갈까요?"
            style={{ color: '#FFFFFF' }}
          />
        </RoundedMarker>
      </div>
      <ProgressBtnWrapper>
        <StepBar step={4} />
        <Button buttonType="Progress" content="다음" onClick={onClick} />
      </ProgressBtnWrapper>
    </div>
  );
};
const UpDownBtnContainer = styled(RowBetween)`
  margin-top: 40px;
`;

export default FourthStep;
