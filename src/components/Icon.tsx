import styled, { StyledComponent } from 'styled-components';

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
  BottomBar: 'BottomBar',
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
  [IconType.BottomBar]: styled(RootIcon)`
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
    case IconType.BottomBar:
    case IconType.CreateVote:
    case IconType.GoTop:
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
