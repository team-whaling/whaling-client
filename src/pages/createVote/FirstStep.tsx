import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCoinsThunk } from '../../app/coin/thunks';
import { ICoinList } from '../../app/coin/types';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import Icon from '../../components/Icon';
import { Column, Row } from '../../components/Layout';
import Text from '../../components/Text';
import color from '../../styles/color';
import { RoundedMarker } from '../../styles/createvote.styles';

const FirstStep = ({ setValue, value, setDisabled }: any) => {
  const [searchResult, setSearchResult] = useState<ICoinList[]>([]);

  const dispatch = useAppDispatch();
  const coinList = useAppSelector((state: RootState) => state.coinReducer);

  useEffect(() => {
    dispatch(getCoinsThunk());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    const coinSearchResult = coinList.filter((coins: ICoinList) => {
      return (
        matchName(coins.code, e.target.value) ||
        matchName(coins.krname, e.target.value)
      );
    });
    setSearchResult(coinSearchResult);
  };

  const matchName = (name: string, keyword: string) => {
    var keyLen = keyword.length;
    name = name.substring(0, keyLen);
    return name === keyword.toUpperCase() && keyLen !== 0;
  };

  const onSearchClick = (e: any) => {
    setValue(e.target.innerText);
    setDisabled(false);
    setSearchResult([]);
  };

  return (
    <div>
      <Text type="Title2" content="종목을 선택해주세요." />
      <InputWrapper>
        <Icon iconType="Magnifier" />
        <Input
          placeholder="코인명, 티커 검색"
          style={{ color: `${color.darkness[5]}`, marginLeft: 16 }}
          value={value}
          onChange={handleInputChange}
        />
      </InputWrapper>
      {
        <Column>
          {searchResult.map((coin: any) => (
            <Column key={coin.code}>
              <SearchBox onClick={onSearchClick}>
                <img src={coin.image} width={28} style={{ marginRight: 12 }} />
                <Text
                  type="Headline3"
                  content={`${coin.krname}(${coin.code})`}
                />
              </SearchBox>
            </Column>
          ))}
        </Column>
      }
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

const SearchBox = styled(Row)`
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #eaeaea;
`;

export default FirstStep;
