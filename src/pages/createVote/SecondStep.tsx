import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { Column, RowAround } from '../../components/Layout';
import Text from '../../components/Text';
import color from '../../styles/color';
import { RoundedMarker } from '../../styles/createvote.styles';
const SecondStep = ({ setValue, disabled, setDisabled }: any) => {
  const [target, setTarget] = useState({
    id: -1,
    duration: '',
    takes: '',
    color: false,
  });

  const periodArray = [
    { id: 0, duration: '1일', takes: '8시간', color: false },
    { id: 1, duration: '1주일', takes: '3일', color: false },
    { id: 2, duration: '1개월', takes: '1주일', color: false },
  ];

  const onPeriodBtnClick = (e: any, id: number) => {
    setValue(e.target.parentNode.innerText.split('\n'));
    setDisabled(!disabled);
    let period = { ...target };
    period.color = !period.color;
    period.id = id;
    setTarget(period);
  };

  return (
    <div>
      <Column>
        <Text type="Title2" content="예상 기간을 선택해주세요." />
        <Text
          type="Caption"
          content="투표 기간은 1일-8시간/1주일-3일/1개월-1주로 진행됩니다."
          style={caption}
        />
      </Column>
      <RowAround>
        {periodArray.map((period) => (
          <PeriodButton
            target={target}
            key={period.id}
            onClick={(e) => onPeriodBtnClick(e, period.id)}
          >
            <Period>{period.duration}</Period>
            <VotePeriod>{period.takes} 진행</VotePeriod>
          </PeriodButton>
        ))}
      </RowAround>
      <Text
        type="Caption"
        content="예시) $비트코인이 "
        style={{ marginLeft: '7px' }}
      />
      <RoundedMarker width={42}>
        <Text type="Caption" content="1개월" style={{ color: '#FFFFFF' }} />
      </RoundedMarker>
      <Text type="Caption" content=" 후에 10%이상 오를까요?" />
    </div>
  );
};

const PeriodButton = styled.button<{ target: any }>`
  all: unset;

  width: 108px;
  height: 90px;
  &:nth-child(2) {
    margin: 0 10px;
  }

  &:nth-child(${({ target }) => target.id + 1}) {
    background-color: ${({ target }) =>
      target.color ? `${color.darkness[7]}` : '#ffffff'};
    color: ${({ target }) =>
      target.color ? `#ffffff` : `${color.darkness[7]}`};
  }

  text-align: center;

  border: 1px solid rgb(43, 45, 49, 0.3);
  border-radius: 10px;
`;

const Period = styled.div`
  color: inherit;
  font-size: 15px;
`;
const VotePeriod = styled.div`
  color: inherit;
  font-size: 11px;
`;

const caption: CSSProperties = { marginTop: '8px', marginBottom: '28px' };

export default SecondStep;
