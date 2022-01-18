import ProgressBar from '@ramonak/react-progress-bar';
import styled, { CSSProperties } from 'styled-components';
import { Column } from '../components/Layout';
import color from './color';

//투표 생성 화면
export const ProgressBtnWrapper = styled(Column)`
  position: absolute;
  bottom: 31px;

  margin: 0;
`;

export const SProgressBar = styled(ProgressBar)`
  margin-bottom: 12px;
`;

export const voteTimeNoticeStyle: CSSProperties = {
  display: 'inline-block',
  textAlign: 'center',

  marginBottom: '16px',

  color: `${color.blue[4]}`,
};

export const RoundedMarker = styled.span<any>`
  background: ${color.darkness[7]};

  border-radius: 35px;

  width: ${(props) => props.width}px;

  display: inline-block;
  margin: 20px 4px 0 4px;

  text-align: center;
`;

export const Input = styled.input`
  all: unset;

  width: 343px;
  border-bottom: 1.5px solid #c6c8cb;

  margin-top: 68px;
`;
