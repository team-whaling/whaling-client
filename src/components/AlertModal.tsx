import React from 'react';
import color from '../styles/color';
import { TextAlignCenter } from './Layout';
import Text from './Text';
const AlertModal = () => {
  return (
    <TextAlignCenter>
      <Text type="Headline" content="고래밥이 부족해요!" />
      <Text
        type="Body2"
        content="투표 첫 생성 시, 고래밥 100개를 드려요! 지금 첫 투표를 만들러 가볼까요?"
        style={{ color: `${color.darkness[6]}` }}
      />
    </TextAlignCenter>
  );
};

export default AlertModal;
