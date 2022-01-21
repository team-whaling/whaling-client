import styled, {
  StyledComponent,
  ThemeContext,
  ThemedStyledFunction,
} from 'styled-components';
import font from '../styles/font';

export const TextType = {
  Title: 'Title',
  Title2: 'Title2',
  Headline: 'Headline',
  Headline2: 'Headline2',
  Headline3: 'Headline3',
  Body: 'Body',
  Body2: 'Body2',
  Caption: 'Caption',
};

export type TText = keyof typeof TextType;

const RootSpan = styled.span`
  display: inline-block;
  font-style: normal;
`;

export const TextMap = {
  [TextType.Title]: styled(RootSpan)`
    font-size: ${font.title[1]}px;
    font-weight: 700;
  `,
  [TextType.Title2]: styled(RootSpan)`
    font-size: ${font.title[2]}px;
    font-weight: 700;
  `,
  [TextType.Headline]: styled(RootSpan)`
    font-size: ${font.headline[1]}px;
    font-weight: 700;
  `,
  [TextType.Headline2]: styled(RootSpan)`
    font-size: ${font.headline[1]}px;
    font-weight: 500;
  `,
  [TextType.Headline3]: styled(RootSpan)`
    font-size: ${font.headline[3]}px;
    font-weight: 500;
  `,
  [TextType.Body]: styled(RootSpan)`
    font-size: ${font.body[1]}px;
    font-weight: 500;
  `,
  [TextType.Body2]: styled(RootSpan)`
    font-size: ${font.body[2]}px;
    font-weight: 500;
  `,
  [TextType.Caption]: styled(RootSpan)`
    font-size: ${font.caption[1]}px;
    font-weight: 400;
  `,
};

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type: TText;
  content: string;
}

const Text = ({ type, content, style, onClick, ...props }: TextProps) => {
  const Text = TextMap[type];
  return (
    <Text style={style} onClick={onClick}>
      {content}
    </Text>
  );
};

export default Text;
