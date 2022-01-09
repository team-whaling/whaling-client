import React from 'react';
import { CSSProperties } from 'styled-components';
import color from '../../styles/color';
import Icon, { IconType, TIcon } from '../../components/Icon';
import {
  Column,
  ColumnAround,
  ColumnCenter,
  itemMargin,
} from '../../components/Layout';
import Text, { TextType, TText } from '../../components/Text';
import Button, { ButtonType, TButton } from '../../components/Button';
import size from '../../styles/size';

const index = () => {
  return (
    <Column style={wrapper}>
      <ColumnCenter>
        <Icon iconType={IconType.LandingWhale as TIcon} style={itemMargin} />
        <Icon iconType={IconType.WhalingTitle as TIcon} style={itemMargin} />
      </ColumnCenter>
      <ColumnAround>
        <Text
          type={TextType.Body as TText}
          content="빠른 회원가입으로"
          style={instructionText}
        />
        <Text
          type={TextType.Body as TText}
          content="웨일링의 여정에 함께 해보세요!"
          style={instructionText}
        />
        <Button
          buttonType={ButtonType.Create as TButton}
          content="카카오톡으로 빠른 가입"
          style={button}
        />
        <Text
          type={TextType.Caption as TText}
          content="회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다."
        />
      </ColumnAround>
    </Column>
  );
};

const wrapper: CSSProperties = {
  height: '100%',
  // marginTop: '225px',
};

const instructionText: CSSProperties = {
  color: `${color.darkness[5]}`,
};

const button: CSSProperties = {
  borderRadius: `${size.borderRadius}px`,
  backgroundColor: `${color.yellow.kakaoAuth}`,
  color: 'black',
};

export default index;
