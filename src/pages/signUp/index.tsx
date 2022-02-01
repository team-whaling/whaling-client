import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import Button, { ButtonType, TButton } from '../../components/Button';
import Icon, { IconType } from '../../components/Icon';
import {
  Column,
  ColumnAround,
  ColumnBetween,
  itemMargin,
  Row,
} from '../../components/Layout';
import Text, { TextType } from '../../components/Text';
import useInput from '../../components/useInput';
import useAuth from '../../hooks/useAuth';
import color from '../../styles/color';
import font from '../../styles/font';
import { MainBackWrapper } from '../../styles/global.styles';
import size from '../../styles/size';

const SignUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    editNickname,
    nicknameDuplicated,
    initializeNicknameDuplicationInfo,
    nickname,
    checkNicknameDuplication,
  } = useAuth();
  const { content, focused, Input } = useInput({
    existingValue: nickname,
    placeholder: '10자 이내',
    style: {
      width: '268px',
      marginTop: '45px',
      borderBottom: '0px',
      fontWeight: 'bold',
    },
  });

  const isDisabled = nicknameDuplicated;
  const navigate = useNavigate();

  const checkNicknameDuplicationHandler = () => {
    checkNicknameDuplication({ nickname: content });
  };

  const startWhaling = () => {
    editNickname({ nickname: content });
    navigate('/');
    initializeNicknameDuplicationInfo();
  };

  return (
    <>
      <Row style={MainBackWrapper}>
        <Icon
          iconType={IconType.MainBack}
          onClick={() => {
            navigate(`/my-page/${nickname}`);
            initializeNicknameDuplicationInfo();
          }}
        />
      </Row>

      <ColumnBetween
        style={{ height: `calc(100% - 100px)`, marginTop: '43px' }}
      >
        {/* <Column style={{ marginTop: '80px' }}> */}
        <Column>
          <Text type={TextType.Title2} content="닉네임을 설정해주세요" />
          <Row>
            {Input}
            <Button
              buttonType={ButtonType.DuplicateCheck}
              content="중복확인"
              style={{
                marginTop: '45px',
              }}
              onClick={checkNicknameDuplicationHandler}
            />
          </Row>
          <div
            style={{
              marginTop: itemMargin.marginBottom,
              borderTop: `1px solid ${
                focused ? color.darkness[6] : color.darkness[3]
              }`,
            }}
          />
          <Text
            style={{
              ...caption,
              color: `${isDisabled ? color.red[4] : color.blue[4]}`,
            }}
            type={TextType.Caption}
            content={
              isDisabled === undefined
                ? ''
                : isDisabled
                ? '이미 사용중인 닉네임입니다.'
                : '사용 가능한 닉네임입니다.'
            }
          />
        </Column>
        <Button
          style={progressButton}
          buttonType={ButtonType.Create}
          content="웨일링 시작하기"
          disabled={isDisabled}
          onClick={startWhaling}
        />
      </ColumnBetween>
    </>
  );
};

const progressButton: CSSProperties = {
  borderRadius: `${size.borderRadius}px`,
  fontWeight: 'bold',
  marginBottom: '31px',
};

const duplicateCheckBtn: CSSProperties = {};

const caption: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export default SignUp;
