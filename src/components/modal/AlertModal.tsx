import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import { TextAlignCenter } from '../Layout';
import Text from '../Text';
import Image from '../Image';
import styled from 'styled-components';
const AlertModal = ({ type }: { type: string }) => {
  return (
    <TextAlignCenter>
      <Image imgType="AlertWhale" style={alertImgStyle} />
      <TextWrapper>
        <Text
          type="Headline"
          content="고래밥이 부족해요!"
          style={{ marginBottom: 8 }}
        />
        <Text
          type="Body2"
          content={
            type === 'goVote'
              ? '운영자 투표 참여 후, 실제 결과를 기다려보세요.'
              : '투표 첫 생성 시, 고래밥 100개를 드려요!'
          }
          style={{ color: `${color.darkness[6]}` }}
        />
        <Text
          type="Body2"
          content={
            type === 'goVote'
              ? '적중 시 고래밥 30개를 드려요!'
              : '지금 첫 투표를 만들러 가볼까요?'
          }
          style={{ color: `${color.darkness[6]}` }}
        />
      </TextWrapper>
    </TextAlignCenter>
  );
};
const alertImgStyle: CSSProperties = {
  position: 'relative',
  bottom: 20,
};
const TextWrapper = styled.div`
  position: absolute;
  bottom: 90px;
  line-height: normal;
`;

export default AlertModal;
