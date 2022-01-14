import React, { CSSProperties } from 'react';
import Button from '../../components/Button';
import Text from '../../components/Text';
import color from '../../styles/color';
import {
  createVoteBtnStyle,
  ProgressBtnWrapper,
} from '../../styles/createvote.styles';
const CreateVoteMain = ({ nextStep }: any) => {
  return (
    <>
      <div>
        <Text type="Title" content="고래님," /> <br />
        <Text type="Title" content="투표를 생성하시겠습니까?" />
        <Text
          type="Headline2"
          content="투표 생성시, 고래밥 50개가 차감돼요!"
          style={subTitle}
        />
      </div>
      <ProgressBtnWrapper>
        <Button
          buttonType="Create"
          content="투표 만들기"
          style={createVoteBtnStyle}
          onClick={nextStep}
        />
      </ProgressBtnWrapper>
    </>
  );
};

const subTitle: CSSProperties = {
  marginTop: '34px',
  color: `${color.darkness[6]}`,
};
export default CreateVoteMain;
