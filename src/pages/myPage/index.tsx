import React from 'react';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column } from '../../components/Layout';
import MenuBar from '../../components/MenuBar';

const index = () => {
  return (
    <Column>
      <Icon iconType={IconType.MainBack as TIcon} />
      <MenuBar />
    </Column>
  );
};

export default index;
