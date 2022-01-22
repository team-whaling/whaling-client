import React from 'react';
import { CSSProperties } from 'styled-components';
import color from '../../styles/color';
import Icon, { IconType, TIcon } from '../../components/Icon';
import {
  Column,
  ColumnAround,
  ColumnCenter,
  itemMargin,
  Row,
} from '../../components/Layout';
import Text, { TextType, TText } from '../../components/Text';
import Button, { ButtonType, TButton } from '../../components/Button';
import size from '../../styles/size';
import useAuth from '../../hooks/useAuth';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { connectKakaoAuth } = useAuth();

  return (
    <ColumnAround style={wrapper}>
      <ColumnCenter style={iconWrapper}>
        <Icon iconType={IconType.LandingWhale as TIcon} style={itemMargin} />
        <Icon iconType={IconType.WhalingTitle as TIcon} style={itemMargin} />
      </ColumnCenter>
      <Column style={textWrapper}>
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
        </ColumnAround>
        <Button
          buttonType={ButtonType.Create as TButton}
          content="카카오톡으로 빠른 가입"
          style={button}
          onClick={connectKakaoAuth}
        />
        <Row style={{ marginTop: '53px' }}>
          <Text
            style={mainCaption}
            type={TextType.Caption as TText}
            content="회원가입 시"
          />
          <Text
            style={anchorText}
            type={TextType.Caption as TText}
            content="개인정보 처리방침"
          />
          <Text
            style={mainCaption}
            type={TextType.Caption as TText}
            content="과"
          />
          <Text
            style={anchorText}
            type={TextType.Caption as TText}
            content="이용약관"
          />
          <Text
            style={mainCaption}
            type={TextType.Caption as TText}
            content="을 확인하였으며, 동의합니다."
          />
        </Row>
      </Column>
    </ColumnAround>
  );
};

const wrapper: CSSProperties = {
  height: '100%',
};

const iconWrapper: CSSProperties = {
  marginTop: '225px',
};

const textWrapper: CSSProperties = {
  height: '279px',
};

const mainCaption: CSSProperties = {};

const anchorText: CSSProperties = {
  color: `${color.blue[4]}`,
  margin: '0 0 0 5px',
};

const instructionText: CSSProperties = {
  color: `${color.darkness[5]}`,
};

const button: CSSProperties = {
  borderRadius: `${size.borderRadius}px`,
  backgroundColor: `${color.yellow.kakaoAuth}`,
  color: 'black',
  marginTop: '26px',
};

export default index;
