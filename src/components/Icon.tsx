import styled, { StyledComponent } from 'styled-components';
import coloredHome from '../static/icons/colored-home.svg';
import home from '../static/icons/home.svg';
import WhalingTitle from '../static/icons/whaling-title.svg';
import vote from '../static/icons/vote.svg';
import pencil from '../static/icons/pencil.svg';
import goTop from '../static/icons/go-top.svg';
import whale from '../static/icons/whale.svg';
import close from '../static/icons/close.svg';
import westArrow from '../static/icons/direction.svg';
import person from '../static/icons/person.svg';
import info from '../static/icons/info.svg';
import magnifier from '../static/icons/magnifier.svg';
import dollar from '../static/icons/dollar.svg';
import coloredVote from '../static/icons/colored-vote.svg';

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
  BottomBarVote: 'BottomBarVote',
  BottomBarMyPage: 'BottomBarMyPage',

  //////// Fixed Design System
  MainBack: 'MainBack',
  SmallBack: 'SmallBack',
  Person: 'Person',
  Close: 'Close',
  Info: 'Info',
  Magnifier: 'Magnifier',
  Dollar: 'Dollar',
  ColoredHome: 'ColoredHome',
  Home: 'Home',
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

  //////// Fixed Design System

  [IconType.MainBack]: styled(RootIcon)`
    width: 18px;
    height: 10px;
  `,
  [IconType.SmallBack]: styled(RootIcon)`
    width: 12px;
    height: 6px;
  `,
  [IconType.Person]: styled(RootIcon)`
    width: 10px;
    height: 11px;
  `,
  [IconType.Close]: styled(RootIcon)`
    width: 24px;
    height: 24px;
  `,
  [IconType.Info]: styled(RootIcon)`
    width: 16px;
    height: 16px;
  `,
  [IconType.Magnifier]: styled(RootIcon)`
    width: 20px;
    height: 20px;
  `,
  [IconType.Dollar]: styled(RootIcon)`
    width: 14px;
    height: 14px;
  `,
  [IconType.ColoredHome]: styled(RootIcon)`
    width: 26px;
    height: 26px;
  `,
  [IconType.Home]: styled(RootIcon)`
    width: 26px;
    height: 26px;
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

    case IconType.BottomBarVote:
      src = coloredVote;
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

    //////// Fixed Design System
    case IconType.MainBack:
      src = westArrow;
      break;
    case IconType.SmallBack:
      src = westArrow;
      break;
    case IconType.Person:
      src = person;
      break;
    case IconType.Close:
      src = close;
      break;
    case IconType.Info:
      src = info;
      break;
    case IconType.Magnifier:
      src = magnifier;
      break;
    case IconType.Dollar:
      src = dollar;
      break;
    case IconType.Home:
      src = home;
      break;
    case IconType.ColoredHome:
      src = coloredHome;
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
