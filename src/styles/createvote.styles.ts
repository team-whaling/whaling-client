import ProgressBar from '@ramonak/react-progress-bar';
import styled, { CSSProperties } from 'styled-components';
import { Column, Row, RowCenter } from '../components/Layout';
import color from './color';

//투표 생성 화면
export const ProgressBtnWrapper = styled(Column)`
  position: absolute;
  bottom: 31px;

  margin: 0;
`;

export const voteTimeNoticeStyle: CSSProperties = {
  display: 'inline-block',
  textAlign: 'center',

  marginBottom: '16px',

  color: `${color.blue[4]}`,
};

export const RoundedMarker = styled(RowCenter)<{ width: number }>`
  background: ${color.darkness[7]};

  border-radius: 35px;

  margin: 0 4px;

  width: ${(props) => props.width}px;
  height: 22px;
`;
