import React from 'react';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column } from '../../components/Layout';

const index = () => {
  return (
    <Column>
      <Icon iconType={IconType.HeaderBack as TIcon} />
    </Column>
  );
};

export default index;
