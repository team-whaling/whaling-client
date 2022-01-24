import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import color from '../styles/color';

interface IGaugeBar {
  nickname: string;
  accuracy: number;
}

const GaugeBar = ({ nickname, accuracy }: IGaugeBar) => {
  return (
    <Container>
      <Text type="Body" content={`${nickname}님의 현재 적중률은 `} />
      <Text
        type="Body"
        content={` ${accuracy}% `}
        style={{ color: `${color.blue[4]}`, whiteSpace: 'pre-wrap' }}
      />
      <BarWrapper>
        <BarRatio width={accuracy} />
        <Circle />
      </BarWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 343px;

  margin-top: 20px;
  margin-bottom: 8px;
  padding: 16px;

  background: #ffffff;
  border: 1px solid rgba(198, 200, 203, 0.5);
  box-sizing: border-box;

  box-shadow: 2px 4px 15px rgba(70, 82, 230, 0.05);
  border-radius: 10px;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 307px;
  height: 6px;

  margin-top: 15px;

  background: ${color.blue[1]};
  border-radius: 3px;
`;

const BarRatio = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 100%;

  background: linear-gradient(to right, ${color.blue[1]}, ${color.blue[4]});
  border-radius: 3px 0 0 3px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  border-radius: 50%;
`;

export default GaugeBar;
