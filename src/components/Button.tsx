import styled, { StyledComponent } from 'styled-components';
import color from '../styles/color';
import font from '../styles/font';
import size from '../styles/size';

const RootButton = styled.button`
  all: unset;

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonType = {
  Create: 'Create', //투표 만들기
  Progress: 'Progress', // 다음
  Participation: 'Participation', // 참여완료, 참여하기
  Question: 'Question', // 오를까요, 내릴까요
  Vote: 'Vote', // 다시 생각할래요, 네 투표할게요
  Hit: 'Hit', // 적중 실패, 적중 성공
  Answer: 'Answer', //예, 아니요
  Modal: 'Modal', //모달 버튼
  DuplicateCheck: 'DuplicateCheck', // 중복확인 버튼 (회원가입시)
};

export type TButton = keyof typeof ButtonType;

export const ButtonMap: {
  [x: string]: StyledComponent<'button', any, ButtonMapProps>;
} = {
  [ButtonType.Create]: styled(RootButton)<ButtonMapProps>`
    width: 343px;
    height: 60px;

    font-size: ${font.headline[2]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.disabled ? color.darkness[3] : color.darkness[7]};
    color: ${(props) =>
      props.disabled ? color.darkness[7] : color.darkness[0]};

    border-radius: 10px;
  `,
  [ButtonType.Progress]: styled(RootButton)<ButtonMapProps>`
    width: 343px;
    height: 60px;

    font-size: ${font.headline[2]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.disabled ? color.darkness[3] : color.blue[4]};
    color: ${(props) =>
      props.disabled ? color.darkness[5] : color.darkness[0]};

    border-radius: 10px;
  `,
  [ButtonType.Participation]: styled(RootButton)<ButtonMapProps>`
    width: 307px;
    height: 40px;

    font-size: ${font.body[1]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.participated ? color.darkness[6] : color.blue[4]};
    color: white;
  `,
  [ButtonType.Question]: styled(RootButton)<ButtonMapProps>`
    width: 165px;
    height: 55px;

    font-size: ${font.headline[3]}px;
    font-weight: normal;
    text-align: center;

    border: ${(props) =>
      props.clicked ? 'none' : '1px solid rgb(43,45,49,0.2)'};
    border-radius: 10px;

    background-color: ${(props) =>
      props.clicked ? color.darkness[7] : color.darkness[0]};
    color: ${(props) => (props.clicked ? color.darkness[0] : '#000000')};
  `,
  [ButtonType.Vote]: styled(RootButton)<ButtonMapProps>`
    width: 165px;
    height: 55px;
    &:nth-child(1) {
      margin-right: 12px;
    }

    font-size: ${font.headline[3]}px;
    font-weight: normal;

    border-radius: 10px;

    background-color: ${(props) =>
      props.willVote ? color.blue[4] : color.blue[1]};
    color: ${(props) => (props.willVote ? color.darkness[0] : color.blue[4])};
  `,
  [ButtonType.Hit]: styled(RootButton)<ButtonMapProps>`
    width: 88px;
    height: 45px;

    border-radius: 22.5px;

    font-size: ${font.headline[2]};
    font-weight: normal;
    color: ${(props) => (props.hitted ? color.blue[4] : color.red[4])};
    background-color: ${(props) =>
      props.hitted ? color.blue[1] : color.red[1]};
  `,
  [ButtonType.Answer]: styled(RootButton)<ButtonMapProps>`
    width: 130px;
    height: 90px;

    border-radius: 10px;

    font-size: ${font.headline[3]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.clicked ? color.blue[4] : color.darkness[2]};
    color: ${(props) =>
      props.clicked ? color.darkness[0] : color.darkness[7]};
  `,
  [ButtonType.Modal]: styled(RootButton)<ButtonMapProps>`
    width: 287px;
    height: 55px;

    border-radius: 10px;

    background-color: ${color.blue[4]};
    color: ${color.darkness[0]};
  `,
  [ButtonType.DuplicateCheck]: styled(RootButton)<ButtonMapProps>`
    width: 80px;
    height: 30px;
    border-radius: ${size.borderRadius}px;
    background-color: ${color.darkness[2]};
    font-size: ${font.body[1]}px;
    font-weight: bold;
    color: ${color.darkness[7]};
  `,
};

interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    ButtonMapProps {
  buttonType: TButton;
  content: string;
}

interface ButtonMapProps {
  disabled?: boolean;
  participated?: boolean;
  clicked?: boolean;
  willVote?: boolean;
  hitted?: boolean;
}

const Button = ({
  buttonType,
  content,
  style,
  onClick,
  disabled,
  participated,
  clicked,
  willVote,
  hitted,
  ...props
}: ButtonProps) => {
  const Button = ButtonMap[buttonType];
  return (
    <Button
      style={style}
      onClick={onClick}
      disabled={disabled}
      participated={participated}
      clicked={clicked}
      willVote={willVote}
      hitted={hitted}
    >
      {content}
    </Button>
  );
};

export default Button;
