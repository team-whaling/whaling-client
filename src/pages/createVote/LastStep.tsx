import React from 'react';
import color from '../../styles/color';
import styled from 'styled-components';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {
  createVoteBtnStyle,
  voteTimeNoticeStyle,
  ProgressBtnWrapper,
  TextWrapper,
} from '../../styles/createvote.styles';

const LastStep = () => {
  return (
    <LastStepContainer>
      <TextWrapper>
        <Text
          type="Headline2"
          content="웨일링 님의 15번째 궁금증"
          style={{ marginTop: '58px' }}
        />
        <Text
          type="Title"
          content="투표를 생성하시겠습니까?"
          style={{ marginTop: '36px', marginBottom: '16px' }}
        />
        <Text type="Caption" content="투표 생성시, 고래밥 50개가 차감돼요." />
        <Text
          type="Caption"
          content="한번 생성된 투표는 수정이 불가하니 꼼꼼히 확인해주세요!"
        />
      </TextWrapper>
      <CreateVoteCard>
        <Text type="Title2" content="$이더리움이" />
        <Text type="Title2" content="1일 후에 30%이상 오를까요?" />
        <EditButton>
          <Text type="Body" content="수정하러 가기" />
        </EditButton>
      </CreateVoteCard>
      <ProgressBtnWrapper>
        <Text
          type="Body"
          content="투표는 8시간 동안 진행됩니다."
          style={voteTimeNoticeStyle}
        />
        <Button
          buttonType="Progress"
          content="투표 만들기"
          style={createVoteBtnStyle}
        />
      </ProgressBtnWrapper>
    </LastStepContainer>
  );
};
const LastStepContainer = styled.div`
  padding: 0 10px;
`;
const CreateVoteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${color.darkness[1]};

  margin-top: 75px;
  padding: 36px;

  border-radius: 10px;
`;
const EditButton = styled.button`
  all: unset;
  width: 79px;

  margin-top: 24px;
  border-bottom: 1px solid ${color.darkness[5]};

  font-size: 14px;
  letter-spacing: -0.3px;
`;
export default LastStep;
