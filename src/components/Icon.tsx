import styled, { StyledComponent } from 'styled-components';
import home from '../static/icons/home.svg';
import WhalingTitle from '../static/icons/whaling-title.svg';
import vote from '../static/icons/vote.svg';
import pencil from '../static/icons/pencil.svg';
import goTop from '../static/icons/go-top.svg';
import whale from '../static/icons/whale.svg';
import close from '../static/icons/close.svg';
import westArrow from '../static/icons/direction.svg';

export const RootIcon = styled.div`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;

export const RootImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconType = {
  WhalingTitle: 'WhalingTitle',
  LandingWhale: 'LandingWhale',
  Profile: 'Profile',
  CreateVote: 'CreateVote',
  GoTop: 'GoTop',
  BottomBarHome: 'BottomBarHome',
  BottomBarVote: 'BottomBarVote',
  BottomBarMyPage: 'BottomBarMyPage',
  Close: 'Close',
  HeaderBack: 'HeaderBack',
};

export type TIcon = keyof typeof IconType;

interface IconMapProps extends React.HTMLAttributes<HTMLElement> {
  iconType: TIcon;
}

export const IconMap: {
  [x: string]: StyledComponent<'div', any, any>;
} = {
  [IconType.WhalingTitle]: styled(RootIcon)`
    width: 210px;
    height: 56px;
  `,
  [IconType.LandingWhale]: styled(RootIcon)`
    width: 88px;
    height: 118px;
  `,
  [IconType.Profile]: styled(RootIcon)`
    width: 61px;
    height: 61px;
  `,
  [IconType.CreateVote]: styled(RootIcon)`
    width: 64px;
    height: 64px;
  `,
  [IconType.BottomBarHome]: styled(RootIcon)`
    width: 28px;
    height: 28px;
  `,
  [IconType.BottomBarVote]: styled(RootIcon)`
    width: 28px;
    height: 28px;
  `,
  [IconType.BottomBarMyPage]: styled(RootIcon)`
    width: 28px;
    height: 28px;
  `,
  [IconType.GoTop]: styled(RootIcon)`
    width: 56px;
    height: 56px;
  `,
  [IconType.Close]: styled(RootIcon)`
    width: 12px;
    height: 12px;
  `,
  [IconType.HeaderBack]: styled(RootIcon)`
    width: 18px;
    height: 10px;
  `,
};

const Icon = ({ iconType, style, onClick }: IconMapProps) => {
  const Icon = IconMap[iconType];
  let src;
  switch (iconType) {
    case IconType.WhalingTitle:
      src = WhalingTitle;
      break;
    case IconType.LandingWhale:
      src = whale;
      break;
    case IconType.Profile:
    case IconType.BottomBarHome:
      src = home;
      break;
    case IconType.BottomBarVote:
      src = vote;
      break;
    case IconType.BottomBarMyPage:
      src = whale;
      break;
    case IconType.CreateVote:
      src = pencil;
      break;
    case IconType.GoTop:
      src = goTop;
      break;
    case IconType.Close:
      src = close;
      break;
    case IconType.HeaderBack:
      src = westArrow;
      break;
    default:
      src = '';
  }
  return (
    <Icon style={style}>
      <RootImg src={src} onClick={onClick} />
    </Icon>
  );
};

export default Icon;
