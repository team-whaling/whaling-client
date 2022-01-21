import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import Text from '../Text';
import styled, { css } from 'styled-components';
import { ColumnCenter, RowCenter } from '../Layout';

//mock data
const data = {
  yes: 73.5,
  no: 26.5,
};

interface IBarGraph {
  kind: string;
  completed: boolean;
}

const BarGraph = ({ kind, completed }: IBarGraph) => {
  //kind: card/detail
  //status: ongoing/completed
  const chart: CSSProperties = {
    display: 'flex',
    width: 313,
    height: kind === 'detail' ? 90 : 46,
  };
  return (
    <div style={chart}>
      <Bar data={data.yes} completed={completed} type="left">
        <ColumnCenter>
          <Text type="Body" content="예" style={{ color: 'inherit' }} />
          <Text
            type="Body2"
            content={`${data.yes}%`}
            style={{ color: 'inherit' }}
          />
        </ColumnCenter>
      </Bar>
      <Bar data={data.no} completed={completed} type="right">
        <ColumnCenter>
          <Text type="Body" content="아니오" style={{ color: 'inherit' }} />
          <Text
            type="Body2"
            content={`${data.no}%`}
            style={{ color: 'inherit' }}
          />
        </ColumnCenter>
      </Bar>
    </div>
  );
};

interface BarProps {
  data: number;
  completed: boolean;
  type: string;
}

const Bar = styled(RowCenter)<BarProps>`
  width: ${(props) => props.data}%;
  ${(props) => {
    if (props.data > 50) {
      if (props.completed) {
        return css`
          background-color: ${color.darkness[3]};
          color: ${color.darkness[7]};
        `;
      } else {
        return css`{
          background-color: ${color.blue[4]};
          color: ${color.darkness[0]};
        `;
      }
    } else {
      return css`
        background-color: ${color.darkness[2]};
        color: ${color.darkness[4]};
      `;
    }
  }}

  border-radius: ${(props) =>
    props.type === 'left' ? '10px 0 0 10px' : '0 10px 10px 0'};
`;

export default BarGraph;
