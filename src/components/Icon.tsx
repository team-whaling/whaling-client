import styled, { StyledComponent } from 'styled-components';
import home from '../static/icons/home.svg';
import myPage from '../static/icons/my-page.svg';
import vote from '../static/icons/vote.svg';
import pencil from '../static/icons/pencil.svg';
import goTop from '../static/icons/go-top.svg';

export const RootIcon = styled.div`
  all: unset;
`;

export const RootImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconType = {
  Profile: 'Profile',
  CreateVote: 'CreateVote',
  GoTop: 'GoTop',
  BottomBarHome: 'BottomBarHome',
  BottomBarVote: 'BottomBarVote',
  BottomBarMyPage: 'BottomBarMyPage',
};

type TIcon = keyof typeof IconType;

interface IconMapProps extends React.HTMLAttributes<HTMLElement> {
  iconType: TIcon;
}

export const IconMap: {
  [x: string]: StyledComponent<'div', any, any>;
} = {
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
};

const Icon = ({ iconType }: IconMapProps) => {
  const Icon = IconMap[iconType];
  let src;
  switch (iconType) {
    case IconType.Profile:
    case IconType.BottomBarHome:
      src = home;
      break;
    case IconType.BottomBarVote:
      src = vote;
      break;
    case IconType.BottomBarMyPage:
      src = myPage;
      break;
    case IconType.CreateVote:
      src = pencil;
      break;
    case IconType.GoTop:
      src = goTop;
      break;
    default:
      src = '';
  }
  return (
    <Icon>
      <RootImg src={src} />
    </Icon>
  );
};

export default Icon;
