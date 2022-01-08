import styled, { StyledComponent } from 'styled-components';
import color from '../styles/color';
import font from '../styles/font';

const RootButton = styled.button`
  all: unset;

  text-align: center;
`;

export const ButtonType = {
  Progress: 'Progress', // 다음, 투표 만들러 가기
  Participation: 'Participation', // 참여완료, 참여하기
  Question: 'Question', // 오를까요, 내릴까요
  Vote: 'Vote', // 다시 생각할래요, 네 투표할게요
  Hit: 'Hit', // 적중 실패, 적중 성공
};

type TButtonType = keyof typeof ButtonType;

export const ButtonMap: {
  [x: string]: StyledComponent<'button', any, ButtonMapProps>;
} = {
  [ButtonType.Progress]: styled(RootButton)<ButtonMapProps>`
    width: 343px;
    height: 60px;

    font-size: ${font.headline[1]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.disabled ? color.darkness[2] : color.blue[4]};
    color: ${(props) => (props.disabled ? color.darkness[4] : 'white')};
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

    font-size: ${font.body[1]}px;
    font-weight: normal;
    text-align: center;

    border: 0.2px solid #2b2d31;
    border-radius: 10px;

    background-color: ${(props) =>
      props.clicked ? color.darkness[6] : 'white'};
    color: ${(props) => (props.clicked ? 'white' : 'black')};
  `,
  [ButtonType.Vote]: styled(RootButton)<ButtonMapProps>`
    width: 159px;
    height: 56px;

    font-size: ${font.headline[2]}px;
    font-weight: normal;

    background-color: ${(props) =>
      props.willVote ? color.blue[4] : color.blue[1]};
    color: ${(props) => (props.willVote ? 'white' : color.blue[4])};
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
};

interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    ButtonMapProps {
  buttonType: TButtonType;
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
