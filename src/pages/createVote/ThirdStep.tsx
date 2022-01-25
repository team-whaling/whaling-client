import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import StepBar from '../../components/StepBar';
import Text from '../../components/Text';
import {
  ProgressBtnWrapper,
  RoundedMarker,
} from '../../styles/createvote.styles';
const ThirdStep = ({ answer, setAnswer, nextStep }: any) => {
  const [value, setValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onClick = () => {
    nextStep();
    setAnswer([...answer, value]);
  };

  return (
    <div>
      <Text type="Title2" content="예상 변동폭을 작성해주세요." />
      <Input
        placeholder="최소 1~최대 300 까지 입력이 가능합니다. (%)"
        value={value}
        onChange={handleInputChange}
      />
      <div>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 " />
        <RoundedMarker width={42}>
          <Text type="Caption" content="10%" style={{ color: '#FFFFFF' }} />
        </RoundedMarker>
        <Text type="Caption" content=" 이상 오를까요?" />
      </div>
      <ProgressBtnWrapper>
        <StepBar step={3} />
        <Button buttonType="Progress" content="다음" onClick={onClick} />
      </ProgressBtnWrapper>
    </div>
  );
};

const Input = styled.input`
  all: unset;

  width: 343px;
  margin-top: 68px;
  padding-bottom: 11px;

  border-bottom: 1.5px solid #c6c8cb;
`;

export default ThirdStep;
