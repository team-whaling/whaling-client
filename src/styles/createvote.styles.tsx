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

export const RoundedMarker = styled.span<any>`
  background: ${color.darkness[2]};

  border-radius: 35px;

  width: ${(props) => props.width};
  height: 22px;

  display: inline-block;

  text-align: center;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

export const Input = styled.input`
  all: unset;

  width: 343px;
  border-bottom: 1.5px solid #c6c8cb;

  margin-top: 68px;
  margin-bottom: 16px;
`;
