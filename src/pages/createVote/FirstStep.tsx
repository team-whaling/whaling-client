import React, { CSSProperties } from 'react';
import Text from '../../components/Text';
import color from '../../styles/color';
import { RoundedMarker, Input } from '../../styles/createvote.styles';
const FirstStep = () => {
  return (
    <div>
      <Text type="Title2" content="종목을 선택해주세요." />
      <Input
        placeholder="코인명, 티커 검색"
        style={{ color: `${color.darkness[5]}` }}
      />
      <div>
        <Text type="Caption" content="예시) " />
        <RoundedMarker width={71}>
          <Text
            type="Caption"
            content="$비트코인"
            style={{ color: '#FFFFFF' }}
          />
        </RoundedMarker>
        <Text type="Caption" content=" 이 1개월 후에 10%이상 오를까요?" />
      </div>
    </div>
  );
};

export default FirstStep;
