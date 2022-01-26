import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { RoundedMarker } from '../../styles/createvote.styles';
import { RowBetween } from '../../components/Layout';
const FourthStep = ({ setValue, disabled, setDisabled }: any) => {
  const onUpDownBtnClick = (e: any) => {
    setValue(e.target.innerText);
    setDisabled(!disabled);
  };

  return (
    <div>
      <Text type="Title2" content="예상 추이를 선택해주세요." />
      <UpDownBtnContainer>
        <Button
          buttonType="Question"
          content="올라갈까요"
          onClick={onUpDownBtnClick}
        />
        <Button
          buttonType="Question"
          content="내려갈까요"
          onClick={onUpDownBtnClick}
        />
      </UpDownBtnContainer>
      <div>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 10% 이상 " />
        <RoundedMarker width={68}>
          <Text
            type="Caption"
            content="올라갈까요?"
            style={{ color: '#FFFFFF' }}
          />
        </RoundedMarker>
      </div>
    </div>
  );
};
const UpDownBtnContainer = styled(RowBetween)`
  margin-top: 40px;
`;

export default FourthStep;
