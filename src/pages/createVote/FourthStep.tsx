import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { RoundedMarker } from '../../styles/createvote.styles';
import { Row, RowBetween } from '../../components/Layout';
import color from '../../styles/color';
import font from '../../styles/font';
const FourthStep = ({ setValue, disabled, setDisabled }: any) => {
  const [target, setTarget] = useState({ id: -1, content: '', color: false });
  const commentArray = [
    { id: 0, content: '올라갈까요', color: false },
    { id: 1, content: '내려갈까요', color: false },
  ];
  const onUpDownBtnClick = (e: any, id: number) => {
    setValue(e.target.innerText);
    setDisabled(!disabled);
    let comment = { ...target };
    comment.color = !comment.color;
    comment.id = id;
    setTarget(comment);
  };

  return (
    <div>
      <Text type="Title2" content="예상 추이를 선택해주세요." />
      <UpDownBtnContainer>
        {commentArray.map((comment) => (
          <QuestionButton
            target={target}
            onClick={(e) => onUpDownBtnClick(e, comment.id)}
          >
            {comment.content}
          </QuestionButton>
        ))}
      </UpDownBtnContainer>
      <Row style={{ marginTop: 20 }}>
        <Text type="Caption" content="예시) $비트코인이 1개월 후에 10% 이상 " />
        <RoundedMarker width={70}>
          <Text
            type="Caption"
            content="올라갈까요?"
            style={{ color: '#FFFFFF' }}
          />
        </RoundedMarker>
      </Row>
    </div>
  );
};
const UpDownBtnContainer = styled(RowBetween)`
  margin-top: 40px;
`;

const QuestionButton = styled.button<{ target: any }>`
  all: unset;

  width: 165px;
  height: 55px;

  font-size: ${font.headline[3]}px;
  font-weight: normal;
  text-align: center;

  border-radius: 10px;
  border: 1px solid rgb(43, 45, 49, 0.2);

  &:nth-child(${({ target }) => target.id + 1}) {
    border: ${({ target }) =>
      target.color ? 'none' : '1px solid rgb(43,45,49,0.2)'};
    background-color: ${({ target }) =>
      target.color ? color.darkness[7] : color.darkness[0]};
    color: ${({ target }) =>
      target.color ? color.darkness[0] : color.darkness[7]};
  }
`;

export default FourthStep;
