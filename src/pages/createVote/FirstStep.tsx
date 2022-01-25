import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ICoinList } from '../../app/coin/types';
import Icon from '../../components/Icon';
import { Row } from '../../components/Layout';
import Text from '../../components/Text';
import useCoin from '../../hooks/useCoin';
import color from '../../styles/color';
import { RoundedMarker } from '../../styles/createvote.styles';

const FirstStep = () => {
  const [coin, setCoin] = useState('');
  const { coinList } = useCoin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCoin(e.target.value);
  };

  // const coinSearchResult = coinList.filter((coins: ICoinList) => {
  //   return coins.code.includes(coin);
  // });

  return (
    <div>
      <Text type="Title2" content="종목을 선택해주세요." />
      <InputWrapper>
        <Icon iconType="Magnifier" />
        <Input
          placeholder="코인명, 티커 검색"
          style={{ color: `${color.darkness[5]}`, marginLeft: 16 }}
          onChange={handleInputChange}
        />
      </InputWrapper>
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

const InputWrapper = styled(Row)`
  align-items: center;

  width: 343px;
  margin-top: 68px;
  padding-bottom: 11px;

  border-bottom: 1.5px solid #c6c8cb;
`;

const Input = styled.input`
  all: unset;
`;

export default FirstStep;
