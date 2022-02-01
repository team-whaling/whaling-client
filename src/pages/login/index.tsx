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
import Image, { ImgType } from '../../components/Image';

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { connectKakaoAuth } = useAuth();

  return (
    <ColumnAround style={wrapper}>
      <ColumnCenter style={iconWrapper}>
        <Icon iconType={IconType.LandingWhale} style={itemMargin} />
        <Icon iconType={IconType.WhalingTitle} style={itemMargin} />
      </ColumnCenter>
      <Column style={textWrapper}>
        <ColumnAround>
          <Text
            type={TextType.Body}
            content="빠른 회원가입으로"
            style={instructionText}
          />
          <Text
            type={TextType.Body}
            content="웨일링의 여정에 함께 해보세요!"
            style={instructionText}
          />
        </ColumnAround>
        <Image imgType={ImgType.KakaoLogin} style={button} />
        <Row style={{ marginTop: '53px' }}>
          <Text
            style={mainCaption}
            type={TextType.Caption}
            content="회원가입 시"
          />
          <Text
            style={anchorText}
            type={TextType.Caption}
            content="개인정보 처리방침"
          />
          <Text style={mainCaption} type={TextType.Caption} content="과" />
          <Text style={anchorText} type={TextType.Caption} content="이용약관" />
          <Text
            style={mainCaption}
            type={TextType.Caption}
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
  // borderRadius: `${size.borderRadius}px`,
  // backgroundColor: `${color.yellow.kakaoAuth}`,
  // color: 'black',
  marginTop: '26px',
};

export default Login;
