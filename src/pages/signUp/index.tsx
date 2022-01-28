import React from 'react';
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
import color from '../../styles/color';
import font from '../../styles/font';
import { MainBackWrapper } from '../../styles/global.styles';
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
    <>
      <Row style={MainBackWrapper}>
        <Icon iconType={IconType.MainBack} />
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
              isDisabled
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

export default index;
