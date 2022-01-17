import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import Text from '../Text';
import styled from 'styled-components';
import { ColumnCenter, RowCenter } from '../Layout';

//mock data
const data = {
  yes: 73.5,
  no: 26.5,
};

const BarGraph = ({ kind }: { kind: string }) => {
  const chart: CSSProperties = {
    display: 'flex',
    width: 313,
    height: kind === 'detail' ? 90 : 46,
  };
  return (
    <div style={chart}>
      <Bar type="yes">
        <ColumnCenter>
          <Text type="Body" content="예" style={{ color: '#ffffff' }} />
          <Text
            type="Body2"
            content={`${data.yes}%`}
            style={{ color: '#ffffff' }}
          />
        </ColumnCenter>
      </Bar>
      <Bar type="no">
        <ColumnCenter>
          <Text
            type="Body"
            content="아니오"
            style={{ color: `${color.darkness[4]}` }}
          />
          <Text
            type="Body2"
            content={`${data.no}%`}
            style={{ color: `${color.darkness[4]}` }}
          />
        </ColumnCenter>
      </Bar>
    </div>
  );
};

interface BarProps {
  type: string;
}

const Bar = styled(RowCenter)<BarProps>`
  width: ${(props) => (props.type === 'yes' ? data.yes : data.no)}%;
  background-color: ${(props) =>
    props.type === 'yes' ? color.blue[4] : color.darkness[2]};

  border-radius: ${(props) =>
    props.type === 'yes' ? '10px 0 0 10px' : '0 10px 10px 0'};
`;

export default BarGraph;
