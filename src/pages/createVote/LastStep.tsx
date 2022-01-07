import React from 'react';
import Button from '../../components/Button';
import {
  createVoteBtnStyle,
  ProgressBtnWrapper,
} from '../../styles/createvote.styles';

const LastStep = () => {
  return (
    <div>
      <p>웨일링 님의 15번째 궁금증</p>
      <p>투표를 생성하시겠습니까?</p>
      <p>
        투표 생성시, 고래밥 50개가 차감돼요. <br />
        한번 생성된 투표는 수정이 불가하니 꼼꼼히 확인해주세요!
      </p>
      <ProgressBtnWrapper>
        <Button
          buttonType="Progress"
          content="투표 만들기"
          style={createVoteBtnStyle}
        />
      </ProgressBtnWrapper>
    </div>
  );
};

export default LastStep;
