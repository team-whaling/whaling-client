import React, { useState, CSSProperties } from 'react';
import color from '../../styles/color';
import font from '../../styles/font';
import styled from 'styled-components';
import Button from '../../components/Button';
const CreateVote = () => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 1:
    case 2:
    case 3:
    case 4:
  }
  return (
    <div>
      <div>뒤로가기</div>
      <Title>
        고래님, <br />
        투표를 생성하시겠습니까?
      </Title>
      <SubTitle>투표 생성시, 고래밥 50개가 차감돼요!</SubTitle>
      <Button
        buttonType="Progress"
        content="투표 만들러가기"
        style={buttonStyle}
      />
    </div>
  );
};
const Title = styled.p`
  font-size: ${font.title[2]}px;
`;
const SubTitle = styled.p`
  font-size: ${font.headline[2]}px;
  color: ${color.blue[4]};
`;
const buttonStyle: CSSProperties = {
  margin: '0 16px',
  display: 'block',
  borderRadius: '10px',
  bottom: '31px',
  position: 'absolute',
};
export default CreateVote;
