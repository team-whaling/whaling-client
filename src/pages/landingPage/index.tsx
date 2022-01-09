import React from 'react';
import { CSSProperties } from 'styled-components';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column } from '../../components/Layout';
import Text, { TextType, TText } from '../../components/Text';

const index = () => {
  return (
    <Column style={wrapper}>
      <Column style={landingWrapper}>
        <Icon iconType={IconType.LandingWhale as TIcon} style={item} />

        <Icon iconType={IconType.WhalingTitle as TIcon} style={item} />
        <Text
          type={TextType.Headline3 as TText}
          content="함께 고래가 되는 여정, 웨일링"
          style={item}
        />
      </Column>
    </Column>
  );
};

const wrapper: CSSProperties = {
  width: '100%',
  height: '100%',

  justifyContent: 'center',
  alignItems: 'center',
};

const landingWrapper: CSSProperties = {
  justifyContent: 'center',
  alignItems: 'center',
};

const item: CSSProperties = {
  marginBottom: '1rem',
};

export default index;
