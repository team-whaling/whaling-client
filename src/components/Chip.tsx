import styled, { css, StyledComponent } from 'styled-components';
import font from '../styles/font';
import color from '../styles/color';
const RootChip = styled.div`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChipType = {
  Success: 'Success', //적중 성공
  Fail: 'Fail', //적중 실패
  Wait: 'Wait', //결과 대기
  Coin: 'Coin', //고래밥
};

type TChip = keyof typeof ChipType;

interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  chipType: TChip;
}

const ChipMap: {
  [x: string]: StyledComponent<'div', any, any>;
} = {
  [ChipType.Success]: styled(RootChip)`
    width: 56px;
    height: 23px;

    font-size: ${font.caption[1]}px;
    color: ${color.blue[4]};
    background-color: ${color.blue[1]};

    border-radius: 11.5px;
  `,
  [ChipType.Fail]: styled(RootChip)`
    width: 56px;
    height: 23px;

    font-size: ${font.caption[1]}px;
    color: ${color.red[4]};
    background-color: ${color.red[1]};

    border-radius: 11.5px;
  `,
  [ChipType.Wait]: styled(RootChip)`
    width: 56px;
    height: 23px;

    font-size: ${font.caption[1]}px;
    color: ${color.darkness[7]};
    background-color: ${color.darkness[3]};

    border-radius: 11.5px;
  `,
  [ChipType.Coin]: styled(RootChip)`
    width: 50px;
    height: 17px;

    font-size: ${font.body[2]}px;
    color: #fff;

    background-color: ${color.blue[4]};

    border-radius: 5px;
  `,
};

const Chip = ({ chipType, style }: ChipProps) => {
  const Chip = ChipMap[chipType];
  let content = '';
  switch (chipType) {
    case 'Success':
      content = '적중성공';
      break;
    case 'Fail':
      content = '적중실패';
      break;
    case 'Wait':
      content = '결과대기';
      break;
    case 'Coin':
      content = '고래밥';
      break;
    default:
      break;
  }
  return <Chip style={style}>{content}</Chip>;
};

export default Chip;
