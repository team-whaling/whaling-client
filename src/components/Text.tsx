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
  Body: 'Body',
  Body2: 'Body2',
  Caption: 'Caption',
};

export type TText = keyof typeof TextType;

const RootSpan = styled.span`
    display: inline-block
    font-style: normal;
`;

export const TextMap = {
  [TextType.Title]: styled(RootSpan)`
    font-size: ${font.title[1]};
    font-weight: bold;
  `,
  [TextType.Title2]: styled(RootSpan)``,
  [TextType.Headline]: styled(RootSpan)``,
  [TextType.Headline2]: styled(RootSpan)``,
  [TextType.Body]: styled(RootSpan)``,
  [TextType.Body2]: styled(RootSpan)``,
  [TextType.Caption]: styled(RootSpan)``,
};

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type: TText;
  content: string;
}

const Text = ({ type, content, style, onClick }: TextProps) => {
  const Text = TextMap[type];
  return (
    <Text style={style} onClick={onClick}>
      {content}
    </Text>
  );
};

export default Text;
