import styled, { StyledComponent } from 'styled-components';
import alertWhale from '../static/img/alert-whale.png';
import blur from '../static/img/blur.png';
import createVote from '../static/img/create-vote.png';
import detailTracked from '../static/img/detail-tracked.png';
import detail from '../static/img/detail.png';
import loading from '../static/img/loading.png';
import main from '../static/img/main.png';
import mypage from '../static/img/mypage.png';
import note from '../static/img/note.png';
import success from '../static/img/success.png';
import whaleGraphic from '../static/img/whaling-graphic.png';

export const RootImg = styled.img`
  all: unset;
`;

export const ImgType = {
  AlertWhale: 'AlertWhale',
  Blur: 'Blur',
  CreateVote: 'CreateVote',
  DetailTracked: 'DetailTracked',
  Detail: 'Detail',
  Loading: 'Loading',
  Main: 'Main',
  MyPage: 'MyPage',
  Note: 'Note',
  Success: 'Success',
  WhaleGraphic: 'WhaleGraphic',
};

type TImg = keyof typeof ImgType;

interface ImgMapProps extends React.HTMLAttributes<HTMLElement> {
  imgType: TImg;
}

const ImgMap: {
  [x: string]: StyledComponent<'img', any, any>;
} = {
  [ImgType.AlertWhale]: styled(RootImg)`
    width: 319px;
    height: 308px;
  `,
  [ImgType.Blur]: styled(RootImg)`
    width: 375px;
    height: 227px;
  `,
  [ImgType.CreateVote]: styled(RootImg)`
    position: relative;
    width: 340px;

    top: 250px;
    left: -10px;
  `,
  [ImgType.Detail]: styled(RootImg)`
    width: 375px;
    height: 227px;
  `,
  [ImgType.DetailTracked]: styled(RootImg)`
    width: 375px;
    height: 227px;
  `,
  [ImgType.Loading]: styled(RootImg)`
    width: 260px;
    height: 147px;
  `,
  [ImgType.Main]: styled(RootImg)`
    width: 375px;
    height: 290px;
  `,
  [ImgType.MyPage]: styled(RootImg)`
    width: 343px;
    height: 105px;
  `,
  [ImgType.Note]: styled(RootImg)`
    width: 134px;
    height: 149px;
  `,
  [ImgType.Success]: styled(RootImg)`
    width: 319px;
    height: 192px;
  `,
  [ImgType.WhaleGraphic]: styled(RootImg)`
    width: 118.57px;
    height: 158.51px;
  `,
};

const Image = ({ imgType, style }: ImgMapProps) => {
  const Image = ImgMap[imgType];
  let src;
  switch (imgType) {
    case ImgType.AlertWhale:
      src = alertWhale;
      break;
    case ImgType.Blur:
      src = blur;
      break;
    case ImgType.CreateVote:
      src = createVote;
      break;
    case ImgType.Detail:
      src = detail;
      break;
    case ImgType.DetailTracked:
      src = detailTracked;
      break;
    case ImgType.Loading:
      src = loading;
      break;
    case ImgType.Main:
      src = main;
      break;
    case ImgType.MyPage:
      src = mypage;
      break;
    case ImgType.Note:
      src = note;
      break;
    case ImgType.Success:
      src = success;
      break;
    case ImgType.WhaleGraphic:
      src = whaleGraphic;
      break;
    default:
      break;
  }

  return <Image src={src} style={style} />;
};
export default Image;
