import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import styled from 'styled-components';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Modal from '../../components/modal/Modal';
import {
  voteTimeNoticeStyle,
  ProgressBtnWrapper,
} from '../../styles/createvote.styles';
import useModal from '../../hooks/useModal';
import { ColumnCenter } from '../../components/Layout';
import CreateSuccessModal from '../../components/modal/CreateSuccessModal';
import AlertModal from '../../components/modal/AlertModal';
import useVote from '../../hooks/useVote';
import useAuth from '../../hooks/useAuth';
const LastStep = ({ answer, prevStep }: any) => {
  const { isOpen, toggleModal } = useModal();
  const { createVote, coinError } = useVote();
  const { nickname, createdVotes } = useAuth();

  const createPayload = (answer: any) => {
    let coinCode = answer.coinCode.match(/\((.*?)\)/)![1];
    let duration = '';
    if (answer.duration[0] === '1일') duration = 'day';
    else if (answer.duration[0] === '1주일') duration = 'week';
    else if (answer.duration[0] === '1달') duration = 'month';
    let range = parseInt(answer.range);
    let comment = answer.comment === '올라갈까요' ? 'up' : 'down';
    const payload = {
      coin_code: coinCode,
      duration: duration,
      range: range,
      comment: comment,
    };
    console.log(payload);
    return payload;
  };

  const onCreateBtnClick = () => {
    const payload = createPayload(answer);
    createVote(payload);
    toggleModal();
  };

  return (
    <ColumnCenter>
      <TextWrapper>
        <Text
          type="Headline2"
          content={`${nickname} 님의 ${
            createdVotes.votes.length + 1
          }번째 궁금증`}
          style={headline}
        />
        <Text type="Title" content="투표를 생성하시겠습니까?" style={title} />
        <Text
          type="Caption"
          content="투표 생성시, 고래밥 50개가 차감돼요."
          style={caption}
        />
        <Text
          type="Caption"
          content="한번 생성된 투표는 수정이 불가하니 꼼꼼히 확인해주세요!"
          style={caption}
        />
        <CreateVoteCard>
          <Text type="Headline2" content={`$${answer.coinCode}이(가)`} />
          <Text
            type="Headline2"
            content={`${answer.duration[0]} 후에 ${answer.range}%만큼 ${answer.comment}?`}
          />
          <EditButton>
            <Text
              type="Body"
              content="수정하러 가기"
              style={caption}
              onClick={prevStep}
            />
          </EditButton>
        </CreateVoteCard>
      </TextWrapper>
      <ProgressBtnWrapper>
        <Text
          type="Body"
          content={`투표는 ${answer.duration[1]} 동안 진행됩니다.`}
          style={voteTimeNoticeStyle}
        />
        <Button
          buttonType="Create"
          content="투표 만들기"
          onClick={onCreateBtnClick}
        />
      </ProgressBtnWrapper>
      {coinError ? (
        <Modal isOpen={isOpen} toggleModal={toggleModal} type="goVote">
          <AlertModal type="goVote" />
        </Modal>
      ) : (
        <Modal isOpen={isOpen} toggleModal={toggleModal} type="create">
          <CreateSuccessModal />
        </Modal>
      )}
    </ColumnCenter>
  );
};
const TextWrapper = styled.div`
  padding: 0 10px;
`;

const CreateVoteCard = styled(ColumnCenter)`
  background: ${color.darkness[1]};

  margin-top: 75px;
  padding-top: 35px;
  padding-bottom: 30px;

  border-radius: 10px;
`;

const EditButton = styled.button`
  all: unset;

  margin-top: 24px;
  border-bottom: 1px solid ${color.darkness[5]};

  font-size: 14px;
  letter-spacing: -0.3px;
`;

const headline: CSSProperties = { marginTop: '58px' };

const title: CSSProperties = { marginTop: '36px', marginBottom: '16px' };

const caption: CSSProperties = { color: `${color.darkness[6]}` };

export default LastStep;
