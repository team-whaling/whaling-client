import { Dispatch, SetStateAction } from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import color from '../styles/color';
import { Column } from './Layout';

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

interface ILoading extends React.HTMLAttributes<HTMLElement> {
  ref?: Dispatch<SetStateAction<any>>;
}

const Loading = (props: ILoading) => {
  return (
    <Wrapper ref={props.ref}>
      <ReactLoading type="bubbles" color={color.blue[3]} />
    </Wrapper>
  );
};

export default Loading;
