import React from 'react';
import color from '../../styles/color';
import font from '../../styles/font';
import styled from 'styled-components';
import Button from '../../components/Button';
import {
  createVoteBtnStyle,
  ProgressBtnWrapper,
} from '../../styles/createvote.styles';
const CreateVoteMain = ({ nextStep }: any) => {
  return (
    <>
      <Title>
        고래님, <br />
        투표를 생성하시겠습니까?
      </Title>
      <SubTitle>투표 생성시, 고래밥 50개가 차감돼요!</SubTitle>
      <ProgressBtnWrapper>
        <Button
          buttonType="Progress"
          content="투표 만들러가기"
          style={createVoteBtnStyle}
          onClick={nextStep}
        />
      </ProgressBtnWrapper>
    </>
  );
};
const Title = styled.p`
  font-size: ${font.title[2]}px;
`;
const SubTitle = styled.p`
  font-size: ${font.headline[2]}px;
  color: ${color.blue[4]};
`;

export default CreateVoteMain;
