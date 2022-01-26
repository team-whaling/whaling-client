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
const LastStep = ({ answer, prevStep }: any) => {
  const { isOpen, toggleModal } = useModal();
  console.log(answer);

  let [coinCode, durationArray, range, comment] = answer;

  const createPayload = (answer: any) => {
    coinCode = answer[0].match(/\((.*?)\)/)![1];
    let duration = '';
    if (durationArray[1] === '1일') duration = 'day';
    else if (answer[1][1] === '1주일') duration = 'week';
    else duration = 'month';
    range = parseInt(range);
    if (comment === '올라갈까요') comment = 'up';
    else comment = 'down';
    const payload = {
      coin_code: coinCode,
      duration: duration,
      range: range,
      comment: comment,
    };
  };

  createPayload(answer);

  return (
    <ColumnCenter>
      <TextWrapper>
        <Text
          type="Headline2"
          content="웨일링 님의 15번째 궁금증"
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
          <Text type="Headline2" content={`$${answer[0]}이(가)`} />
          <Text
            type="Headline2"
            content={`${answer[1][0]} 후에 ${answer[2]}%만큼 ${answer[3]}?`}
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
          content={`투표는 ${answer[1][1]} 동안 진행됩니다.`}
          style={voteTimeNoticeStyle}
        />
        <Button
          buttonType="Create"
          content="투표 만들기"
          onClick={toggleModal}
        />
      </ProgressBtnWrapper>
      {isOpen && (
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
