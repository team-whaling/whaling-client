import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import Text from '../Text';
import styled, { css } from 'styled-components';
import { ColumnCenter, RowCenter } from '../Layout';

//mock data

interface IBarGraph {
  data: {
    yes: number;
    no: number;
    total: number;
  };
  kind: string;
  state: string;
}

const BarGraph = ({ data, kind, state }: IBarGraph) => {
  //kind: card/detail
  //status: ongoing/finished/tracked
  const chart: CSSProperties = {
    display: 'flex',
    width: 313,
    height: kind === 'detail' ? 90 : 46,
  };

  return (
    <div style={chart}>
      <Bar data={data.yes / data.total} state={state} type="left">
        <ColumnCenter>
          <Text type="Body" content="예" style={{ color: 'inherit' }} />
          <Text
            type="Body2"
            content={`${Math.round((data.yes / data.total) * 100)}%`}
            style={{ color: 'inherit' }}
          />
        </ColumnCenter>
      </Bar>
      <Bar data={data.no / data.total} state={state} type="right">
        <ColumnCenter>
          <Text type="Body" content="아니오" style={{ color: 'inherit' }} />
          <Text
            type="Body2"
            content={`${Math.round((data.no / data.total) * 100)}%`}
            style={{ color: 'inherit' }}
          />
        </ColumnCenter>
      </Bar>
    </div>
  );
};

interface BarProps {
  data: number;
  state: string;
  type: string;
}

const Bar = styled(RowCenter)<BarProps>`
  width: ${(props) => props.data * 100}%;
  ${(props) => {
    if (props.data * 100 >= 50) {
      if (props.state === 'finished' || props.state === 'tracked') {
        return css`
          background-color: ${color.darkness[3]};
          color: ${color.darkness[7]};
        `;
      }
      if (props.state === 'ongoing') {
        return css`
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
