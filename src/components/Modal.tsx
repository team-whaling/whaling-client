import React, { CSSProperties } from 'react';
import Button from './Button';
import { Column } from './Layout';
import styled from 'styled-components';
import Icon from './Icon';
const Modal = ({ isOpen, toggleModal, children }: any) => {
  let buttonContent = '';
  let style: CSSProperties = {};
  switch (children.type.name) {
    case 'CreateSuccessModal':
      buttonContent = '만든 투표 보러가기';
      style = {
        width: 319,
        height: 376,
      };
      break;
    default:
      break;
  }

  return (
    <>
      <ModalBackground isOpen={isOpen} />
      <ModalContainer isOpen={isOpen} style={style}>
        <ModalWrapper>
          <Icon
            iconType="Close"
            style={{ marginLeft: 'auto' }}
            onClick={toggleModal}
          />
          {children}
          <Button
            buttonType="Modal"
            content={buttonContent}
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

  width: ${(props) => props.style?.width}px;
  height: ${(props) => props.style?.height}px;

  z-index: 1000;
`;

const ModalWrapper = styled(Column)`
  padding: 16px;
  justify-content: center;

  border-radius: 15px;

  background-color: #fff;
`;
export default Modal;
