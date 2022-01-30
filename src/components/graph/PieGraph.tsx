import React, { CSSProperties } from 'react';
import { ResponsivePie } from '@nivo/pie';
import Text from '../Text';
import color from '../../styles/color';
import { ColumnCenter } from '../Layout';

const PieGraph = ({ voteDetail }: any) => {
  const whaleData = [
    {
      id: 'pos',
      label: '예',
      value: parseInt(`${voteDetail.pos_whales}`),
    },
    {
      id: 'neg',
      label: '아니오',
      value: parseInt(`${voteDetail.neg_whales}`),
    },
  ];
  const sortedData = whaleData.sort(
    (a: { value: number }, b: { value: number }) => b.value - a.value,
  );

  return (
    <div style={rootStyle}>
      <ResponsivePie
        margin={margin}
        data={sortedData}
        innerRadius={0.9}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        colors={[`${color.blue[4]}`, `${color.darkness[3]}`]}
        legends={[
          {
            anchor: 'right',
            direction: 'row',
            justify: false,
            translateX: -60,
            translateY: 120,
            itemWidth: 50,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            itemTextColor: '#000',
            symbolSize: 12,
          },
        ]}
      />
      <ColumnCenter style={overlay}>
        <Text type="Body" content="웨일의 선택" />
        <Text type="Title" content={`"${sortedData[0].label}"`} />
        <Text
          type="Headline"
          content={`${Math.round(
            (sortedData[0].value /
              (sortedData[0].value + sortedData[1].value)) *
              100,
          )}%`}
          style={{ marginBottom: '20px' }}
        />
      </ColumnCenter>
    </div>
  );
};
const margin = { top: 0, right: 0, bottom: 30, left: 0 };

const rootStyle: CSSProperties = {
  position: 'relative',
  marginTop: 19,
  marginBottom: 48,
  width: 228,
  height: 228,
};

const overlay: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default PieGraph;
