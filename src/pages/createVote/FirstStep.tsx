import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import { RoundedMarker } from '../../styles/createvote.styles';
const FirstStep = () => {
  return (
    <div>
      <Text type="Title2" content="종목을 선택해주세요." />
      <CoinSearchInput placeholder="코인명, 티커 검색" />
      <Text type="Caption" content="예시) " />
      <RoundedMarker width={'71px'}>
        <Text type="Caption" content="$비트코인" style={{ color: '#FFFFFF' }} />
      </RoundedMarker>
      <Text type="Caption" content=" 이 1개월 후에 10%이상 오를까요?" />
    </div>
  );
};
const CoinSearchInput = styled.input`
  all: unset;

  width: 343px;
  border-bottom: 1.5px solid #c6c8cb;

  margin-top: 68px;
  margin-bottom: 16px;
`;

export default FirstStep;
