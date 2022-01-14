import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { RoundedMarker } from '../../styles/createvote.styles';
const FourthStep = () => {
  return (
    <div>
      <Text type="Title2" content="예상 추이를 선택해주세요." />
      <UpDownBtnContainer>
        <Button buttonType="Question" content="올라갈까요" />
        <Button buttonType="Question" content="내려갈까요" />
      </UpDownBtnContainer>
      <div>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 10% 이상 " />
        <RoundedMarker style={roundMarker}>
          <Text
            type="Caption"
            content="오를까요?"
            style={{ color: '#FFFFFF' }}
          />
        </RoundedMarker>
      </div>
    </div>
  );
};
const UpDownBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
`;

const roundMarker: CSSProperties = {
  width: '62px',
};
export default FourthStep;
