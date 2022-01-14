import React, { CSSProperties } from 'react';
import Text from './Text';
import color from '../styles/color';
import { TextAlignCenter } from './Layout';
const CreateSuccessModal = () => {
  return (
    <TextAlignCenter>
      <Text type="Headline2" content="투표 생성이 " style={textSpace} />
      <Text
        type="Headline2"
        content="완료"
        style={{ color: `${color.blue[4]}` }}
      />
      <Text type="Headline2" content=" 되었습니다!" style={textSpace} />
    </TextAlignCenter>
  );
};

const textSpace: CSSProperties = {
  whiteSpace: 'pre-wrap',
};
export default CreateSuccessModal;
