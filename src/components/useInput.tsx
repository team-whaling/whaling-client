import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';

interface IInput extends React.HTMLAttributes<HTMLInputElement> {}

const useInput = ({ ...props }: IInput) => {
  const [content, setContent] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
  };

  const Input = (
    <input
      type="text"
      placeholder={props.placeholder}
      style={{ ...defaultInput, ...props.style }}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    ></input>
  );

  return { content, Input, focused };
};

const defaultInput: CSSProperties = {
  all: 'unset',
  width: '343px',
  borderBottom: '1.5px solid #c6c8cb',
};

export default useInput;
