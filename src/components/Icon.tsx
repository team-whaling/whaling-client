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
import whole from '../static/icons/whole.svg';
import inprogress from '../static/icons/inprogress.svg';
import completed from '../static/icons/completed.svg';
import logo from '../static/icons/logo.svg';
import mypage from '../static/icons/mypage.svg';
import coloredMypage from '../static/icons/colored-mypage.svg';

export const RootIcon = styled.div`
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
  Whole: 'Whole',
  Inprogress: 'Inprogress',
  Completed: 'Completed',
  Logo: 'Logo',
  Vote: 'Vote',
  ColoredVote: 'ColoredVote',
  MyPage: 'MyPage',
  ColoredMypage: 'ColoredMypage',
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
    width: 65px;
    height: 65px;
  `,
  [IconType.CreateVote]: styled(RootIcon)`
    width: 64px;
    height: 64px;
  `,
  [IconType.Vote]: styled(RootIcon)`
    width: 28px;
    height: 28px;
  `,
  [IconType.ColoredVote]: styled(RootIcon)`
    width: 28px;
    height: 28px;
  `,
  [IconType.ColoredMypage]: styled(RootIcon)`
    width: 30px;
    height: 30px;
  `,
  [IconType.MyPage]: styled(RootIcon)`
    width: 30px;
    height: 30px;
  `,
  [IconType.GoTop]: styled(RootIcon)`
    width: 56px;
    height: 56px;
  `,

  //////// Fixed Design System

  [IconType.MainBack]: styled(RootIcon)`
    width: 10px;
    height: 18px;
  `,
  [IconType.SmallBack]: styled(RootIcon)`
    width: 6px;
    height: 12px;
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
  [IconType.Whole]: styled(RootIcon)`
    width: 20px;
    height: 17px;
  `,
  [IconType.Inprogress]: styled(RootIcon)`
    width: 20px;
    height: 17px;
  `,
  [IconType.Completed]: styled(RootIcon)`
    width: 20px;
    height: 17px;
  `,
  [IconType.Logo]: styled(RootIcon)`
    width: 92px;
    height: 28px;
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
      src = mypage;
      break;
    case IconType.Vote:
      src = vote;
      break;
    case IconType.ColoredVote:
      src = coloredVote;
      break;
    case IconType.MyPage:
      src = mypage;
      break;
    case IconType.ColoredMypage:
      src = coloredMypage;
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
    case IconType.Whole:
      src = whole;
      break;
    case IconType.Inprogress:
      src = inprogress;
      break;
    case IconType.Completed:
      src = completed;
      break;
    case IconType.Logo:
      src = logo;
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
