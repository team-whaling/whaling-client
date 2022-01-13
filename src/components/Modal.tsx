import React from 'react';
import Button from './Button';
import { Column } from './Layout';
import styled from 'styled-components';
const Modal = ({ isOpen, toggleModal }: any) => {
  return (
    <>
      <ModalBackground isOpen={isOpen} />
      <ModalContainer isOpen={isOpen}>
        <ModalWrapper>
          <div>텍스트</div>
          <Button
            buttonType="Modal"
            content="만든 투표 보러 가기"
            onClick={toggleModal}
          />
        </ModalWrapper>
      </ModalContainer>
    </>
  );
};

interface ModalProps {
  isOpen: boolean;
}

const ModalBackground = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalContainer = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalWrapper = styled(Column)`
  background-color: #fff;
  border-radius: 15px;
  padding: 16px;
`;

export default Modal;
