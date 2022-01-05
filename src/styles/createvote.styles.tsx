import ProgressBar from '@ramonak/react-progress-bar';
import styled, { CSSProperties } from 'styled-components';
import color from './color';

//투표 생성 화면
export const ProgressBtnWrapper = styled.div`
  position: absolute;
  bottom: 31px;
  margin: 0;
`;
export const SProgressBar = styled(ProgressBar)`
  margin-bottom: 12px;
`;
export const createVoteBtnStyle: CSSProperties = {
  display: 'block',
  borderRadius: '10px',
};
export const subTitleStyle: CSSProperties = {
  marginTop: '34px',
  color: `${color.darkness[5]}`,
};
