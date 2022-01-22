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
const LastStep = ({ prevStep }: any) => {
  const { isOpen, toggleModal } = useModal();

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
          <Text type="Headline2" content="$이더리움이" />
          <Text type="Headline2" content="1일 후에 30%이상 오를까요?" />
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
          content="투표는 8시간 동안 진행됩니다."
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
