import { type } from 'os';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';
import { IVote, TComment, TDuration, VoteState } from '../../../app/vote/types';
import ListVoteCard from '../../../components/card/ListVoteCard';
import Icon, { IconType } from '../../../components/Icon';
import { Column, Row, RowBetween } from '../../../components/Layout';
import Text, { TextType } from '../../../components/Text';
import useAuth from '../../../hooks/useAuth';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { MainBackWrapper } from '../../../styles/global.styles';
import { IVoteList, MyVoteListType } from '../types';

const VoteList = (props: IVoteList) => {
  document.body.style.padding = '0';
  const { createdVotes, participatedVotes } = useAuth();
  const [isCompletedList, setIsCompletedList] = useState<boolean>(false); // present list type
  const navigate = useNavigate();
  // props.type: created || participated
  const isCreatedVotes = props.type === MyVoteListType.Created ? true : false;
  const voteInfo = isCreatedVotes ? createdVotes : participatedVotes;
  const votes = voteInfo.votes;
  const ongoingCount = voteInfo.ongoing_count;
  const finishedCount = voteInfo.finished_count;

  return (
    <Column>
      <Row style={{ ...MainBackWrapper, padding: '0 16px' }}>
        <Icon iconType={IconType.MainBack} onClick={() => navigate(-1)} />
      </Row>
      <Column style={titleWrapper}>
        <Text
          type={TextType.Title}
          content={`${isCreatedVotes ? '생성' : '참여'}한 투표`}
        />
        <Text type={TextType.Title} content={`총 ${votes.length}건`} />
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
          content={`총 ${isCompletedList ? finishedCount : ongoingCount}건`}
          style={{ padding: '0 16px', marginTop: '11px' }}
        />
        <Column style={{ alignItems: 'center', overflowY: 'auto' }}>
          {isCreatedVotes &&
            isCompletedList &&
            votes.map(
              (vote: IVote) =>
                vote.state === VoteState.finished && (
                  <ListVoteCard
                    voteState={VoteState.finished}
                    voted={false}
                    voteId={vote.vote_id}
                    coin={vote.coin}
                    voteSentence={{
                      comment: vote.comment,
                      range: vote.range,
                      duration: vote.duration,
                    }}
                  />
                ),
            )}

          {isCreatedVotes &&
            !isCompletedList &&
            votes.map(
              (vote: IVote) =>
                vote.state === VoteState.ongoing && (
                  <ListVoteCard
                    voteState={VoteState.ongoing}
                    voted={false}
                    voteId={vote.vote_id}
                    coin={vote.coin}
                    voteSentence={{
                      comment: vote.comment,
                      range: vote.range,
                      duration: vote.duration,
                    }}
                  />
                ),
            )}

          {!isCreatedVotes &&
            isCompletedList &&
            votes.map((vote: IVote) =>
              vote.state === VoteState.finished ? (
                <ListVoteCard
                  voteState={VoteState.finished}
                  voted={true}
                  voteId={vote.vote_id}
                  coin={vote.coin}
                  voteSentence={{
                    comment: vote.comment,
                    range: vote.range,
                    duration: vote.duration,
                  }}
                />
              ) : (
                <ListVoteCard
                  voteState={VoteState.tracked}
                  voted={true}
                  voteId={vote.vote_id}
                  coin={vote.coin}
                  voteSentence={{
                    comment: vote.comment,
                    range: vote.range,
                    duration: vote.duration,
                  }}
                />
              ),
            )}

          {!isCreatedVotes &&
            !isCompletedList &&
            votes.map(
              (vote: IVote) =>
                vote.state === VoteState.ongoing && (
                  <ListVoteCard
                    voteState={VoteState.ongoing}
                    voted={true}
                    voteId={vote.vote_id}
                    coin={vote.coin}
                    voteSentence={{
                      comment: vote.comment,
                      range: vote.range,
                      duration: vote.duration,
                    }}
                  />
                ),
            )}
        </Column>
      </Column>
    </Column>
  );
};

export interface IVoteSentence {
  comment: TComment;
  duration: TDuration;
  range: number;
}

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
    props.listType === VoteListDetailType.Completed ? 86 : 102}px;
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
