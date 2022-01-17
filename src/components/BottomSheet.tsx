import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import Button from './Button';
import { RowBetween, RowCenter } from './Layout';
import Text from './Text';
const BottomSheet = () => {
  return (
    <Container>
      <Text type="Headline" content="고래밥 10개를 사용하여" />
      <Text
        type="Headline"
        content="바로 투표에 참여하실 수 있습니다!"
        style={{ marginBottom: 13 }}
      />
      <Text
        type="Body"
        content="12시간 후에 결과가 공개됩니다."
        style={{ color: `${color.darkness[6]}` }}
      />
      <RowBetween style={{ marginTop: 47, marginBottom: 55 }}>
        <Text type="Headline3" content="웨일링님의 답변" />
        <Text
          type="Headline"
          content="예"
          style={{ color: `${color.blue[4]}`, marginRight: 28 }}
        />
      </RowBetween>
      <RowCenter>
        <Button buttonType="Vote" content="다시 생각할래요" />
        <Button buttonType="Vote" content="네, 투표할게요" willVote={true} />
      </RowCenter>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px 20px 0px 0px;
  padding: 34px 28px;
`;
export default BottomSheet;
