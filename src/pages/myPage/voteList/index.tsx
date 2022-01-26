import { type } from 'os';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';
import ListVoteCard from '../../../components/card/ListVoteCard';
import Icon, { IconType } from '../../../components/Icon';
import { Column, Row, RowBetween } from '../../../components/Layout';
import Text, { TextType } from '../../../components/Text';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { MainBackWrapper } from '../../../styles/global.styles';
import { IVoteList, MyVoteListType } from '../types';

const VoteList = (props: IVoteList) => {
  document.body.style.padding = '0';
  const [isCompletedList, setIsCompletedList] = useState<boolean>(false);
  const navigate = useNavigate();
  const type = props.type; // created || participated

  return (
    <Column>
      <Row style={{ ...MainBackWrapper, padding: '0 16px' }}>
        <Icon iconType={IconType.MainBack} onClick={() => navigate(-1)} />
      </Row>
      <Column style={titleWrapper}>
        <Text
          type={TextType.Title}
          content={`${
            type === MyVoteListType.Created ? '생성' : '참여'
          }한 투표`}
        />
        <Text type={TextType.Title} content={`총 ${28}건`} />
      </Column>
      <Row style={menuWrapper}>
        <VoteListDeatilMenu
          isCompletedList={isCompletedList}
          listType={VoteListDetailType.Running}
          onClick={() => setIsCompletedList(false)}
        >
          진행중인 투표
        </VoteListDeatilMenu>
        <VoteListDeatilMenu
          isCompletedList={isCompletedList}
          listType={VoteListDetailType.Completed}
          onClick={() => setIsCompletedList(true)}
        >
          완료된 투표
        </VoteListDeatilMenu>
      </Row>

      <Column
        style={{
          backgroundColor: `${color.darkness[2]}`,
          width: '100%',
          minHeight: '602px',
        }}
      >
        <Text
          type={TextType.Body}
          content={`총 ${6}건`}
          style={{ padding: '0 16px', marginTop: '11px' }}
        />
        <Column style={{ alignItems: 'center', overflowY: 'auto' }}>
          {type === MyVoteListType.Created ? (
            <>
              <ListVoteCard completed={false} voted={false} />
              <ListVoteCard completed={false} voted={false} />
              <ListVoteCard completed={false} voted={false} />
              <ListVoteCard completed={false} voted={false} />
              <ListVoteCard completed={false} voted={false} />
              <ListVoteCard completed={false} voted={false} />
            </>
          ) : isCompletedList ? (
            <>
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
              <ListVoteCard completed={true} voted={true} />
            </>
          ) : (
            <>
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
              <ListVoteCard completed={false} voted={true} />
            </>
          )}
        </Column>
      </Column>
    </Column>
  );
};

const VoteListDetailType: {
  Completed: 'Completed';
  Running: 'Running';
} = {
  Completed: 'Completed',
  Running: 'Running',
};

type TVoteListDetail = keyof typeof VoteListDetailType;

const titleWrapper: CSSProperties = {
  marginTop: '18px',
  justifyContent: 'space-around',
  minWidth: '112px',
  minHeight: '68px',
  padding: '0 16px',
};

const menuWrapper: CSSProperties = {
  marginTop: '15px',
  padding: '0 16px',
};

const VoteListDeatilMenu = styled.div<{
  listType: TVoteListDetail;
  isCompletedList: boolean;
}>`
  font-size: ${font.headline[3]}px;
  font-weight: 500;
  /* Comleted List Type || Running List Type */
  color: ${(props) =>
    (props.listType === VoteListDetailType.Completed &&
      props.isCompletedList) ||
    (props.listType === VoteListDetailType.Running && !props.isCompletedList)
      ? color.darkness[7]
      : color.darkness[4]};

  width: ${(props) =>
    props.listType === VoteListDetailType.Completed ? 78 : 92}px;
  height: 32px;
  margin: 0 11px 0 0;

  border-bottom: ${(props) =>
      (props.listType === VoteListDetailType.Completed &&
        props.isCompletedList) ||
      (props.listType === VoteListDetailType.Running && !props.isCompletedList)
        ? 2
        : 0}px
    solid ${color.darkness[7]};

  &:hover {
    cursor: pointer;
  }
`;

export default VoteList;
