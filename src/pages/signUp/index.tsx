import React from 'react';
import { CSSProperties } from 'styled-components';
import Button, { ButtonType, TButton } from '../../components/Button';
import {
  Column,
  ColumnAround,
  ColumnBetween,
  itemMargin,
  Row,
} from '../../components/Layout';
import Text, { TextType, TText } from '../../components/Text';
import useInput from '../../components/useInput';
import color from '../../styles/color';
import font from '../../styles/font';
import size from '../../styles/size';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { content, focused, Input } = useInput({
    placeholder: '10자 이내',
    style: {
      width: '268px',
      marginTop: '45px',
      borderBottom: '0px',
      fontWeight: 'bold',
    },
  });

  const isDisabled = content.length > 0 ? false : true; // 닉네임 중복확인으로 수정 필요

  return (
    <ColumnBetween style={{ height: '100%' }}>
      <Column style={{ marginTop: '137px' }}>
        <Text type={TextType.Title2 as TText} content="닉네임을 설정해주세요" />
        <Row>
          {Input}
          <Button
            buttonType={ButtonType.DuplicateCheck as TButton}
            content="중복확인"
            style={{
              marginTop: '45px',
            }}
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
          style={caption}
          type={TextType.Caption as TText}
          content={
            isDisabled
              ? '이미 사용중인 닉네임입니다.'
              : '사용 가능한 닉네임입니다.'
          }
        />
      </Column>
      <Button
        style={progressButton}
        buttonType={ButtonType.Create as TButton}
        content="웨일링 시작하기"
        disabled={isDisabled}
      />
    </ColumnBetween>
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

export default index;
