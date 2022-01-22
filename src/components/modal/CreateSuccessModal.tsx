import React, { CSSProperties } from 'react';
import Text from '../Text';
import Image from '../Image';
import color from '../../styles/color';
import { ColumnCenter, TextAlignCenter } from '../Layout';
import styled from 'styled-components';
const CreateSuccessModal = () => {
  return (
    <ColumnCenter>
      <TextAlignCenter>
        <Text type="Headline2" content="투표 생성이 " style={textSpace} />
        <Text
          type="Headline2"
          content="완료"
          style={{ color: `${color.blue[4]}` }}
        />
        <Text type="Headline2" content=" 되었습니다!" style={textSpace} />
        <Image imgType="Success" />
        <Marker>
          <Text type="Body2" content="남은 고래밥 3000개" />
        </Marker>
      </TextAlignCenter>
    </ColumnCenter>
  );
};

const textSpace: CSSProperties = {
  whiteSpace: 'pre-wrap',
};

const Marker = styled.div`
  width: 120px;

  margin: auto;
  margin-bottom: 15px;

  background: ${color.darkness[2]};
  border-radius: 16.5px;
`;
export default CreateSuccessModal;
