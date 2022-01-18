import React from 'react';
import Text from '../../components/Text';
import { Input, RoundedMarker } from '../../styles/createvote.styles';
const ThirdStep = () => {
  return (
    <div>
      <Text type="Title2" content="예상 변동폭을 작성해주세요." />
      <Input placeholder="최소 1~최대 300 까지 입력이 가능합니다. (%)" />
      <div>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 " />
        <RoundedMarker width={42}>
          <Text type="Caption" content="10%" style={{ color: '#FFFFFF' }} />
        </RoundedMarker>
        <Text type="Caption" content=" 이상 오를까요?" />
      </div>
    </div>
  );
};

export default ThirdStep;
