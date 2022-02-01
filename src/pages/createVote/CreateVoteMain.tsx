import React, { CSSProperties } from 'react';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Image from '../../components/Image';
import color from '../../styles/color';
import { ProgressBtnWrapper } from '../../styles/createvote.styles';
import useAuth from '../../hooks/useAuth';
import { ColumnCenter } from '../../components/Layout';
const CreateVoteMain = ({ nextStep }: any) => {
  document.body.style.padding = '0 16px';
  document.body.style.backgroundColor = `${color.darkness[0]}`;
  const { nickname } = useAuth();
  return (
    <ColumnCenter>
      <div>
        <Text type="Title" content={`${nickname}님,`} /> <br />
        <Text type="Title" content="투표를 생성하시겠습니까?" />
        <Text
          type="Headline2"
          content="투표 생성시, 고래밥 50개가 필요해요!"
          style={subTitle}
        />
      </div>

      <ProgressBtnWrapper>
        <Image imgType="CreateVote" />
        <Button buttonType="Create" content="투표 만들기" onClick={nextStep} />
      </ProgressBtnWrapper>
    </ColumnCenter>
  );
};

const subTitle: CSSProperties = {
  marginTop: '34px',
  color: `${color.darkness[6]}`,
};
export default CreateVoteMain;
