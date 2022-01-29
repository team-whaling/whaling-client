import React, { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';
import Text, { TextType, TText } from '../Text';
import { ColumnCenter, RowAround, RowBetween } from '../Layout';
import Icon, { IconType } from '../Icon';
import color from '../../styles/color';
import { useNavigate } from 'react-router-dom';
import { IMyPageCard, MyVoteListType } from '../../pages/myPage/types';
import useAuth from '../../hooks/useAuth';

const MyPageCard = (props: IMyPageCard) => {
  const { createdVotes, participatedVotes } = useAuth();
  const title = props.type === MyVoteListType.Created ? '생성' : '참여';
  const isCreatedVotes = props.type === MyVoteListType.Created ? true : false;
  const link = isCreatedVotes ? 'created-votes' : 'participated-votes';

  const votes = isCreatedVotes ? createdVotes.votes : participatedVotes.votes;

  const ongoingCount = isCreatedVotes
    ? createdVotes.ongoing_count
    : participatedVotes.ongoing_count;

  const finishedCount = isCreatedVotes
    ? createdVotes.finished_count
    : participatedVotes.finished_count;

  const navigate = useNavigate();

  const goVoteList = () => {
    navigate(`${link}`);
  };

  return (
    <Container onClick={goVoteList}>
      <RowBetween style={{ margin: '11px 16px' }}>
        <Text type={TextType.Headline3} content={`내가 ${title}한 투표`} />
        <Icon
          iconType={IconType.MainBack}
          style={{ display: 'flex', transform: 'rotate(180deg)' }}
        />
      </RowBetween>
      <hr style={hrStyle} />
      <RowAround style={{ margin: '29px 0' }}>
        <ColumnCenter>
          <Icon iconType={IconType.Whole} />
          <Text
            type={TextType.Caption}
            content="전체"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type={TextType.Headline3} content={`${votes.length}건`} />
        </ColumnCenter>
        <ColumnCenter>
          <Icon iconType={IconType.Inprogress} />
          <Text
            type={TextType.Caption}
            content="진행"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type={TextType.Headline3} content={`${ongoingCount}건`} />
        </ColumnCenter>
        <ColumnCenter>
          <Icon iconType={IconType.Completed} />
          <Text
            type={TextType.Caption}
            content="완료"
            style={{ color: `${color.darkness[5]}` }}
          />
          <Text type={TextType.Headline3} content={`${finishedCount}건`} />
        </ColumnCenter>
      </RowAround>
    </Container>
  );
};

const hrStyle: CSSProperties = {
  border: `1px solid ${color.darkness[3]}`,
};

const Container = styled.div`
  width: 343px;
  height: 165px;

  margin-top: 16px;

  background: #ffffff;
  border: 1px solid rgba(198, 200, 203, 0.5);
  border-radius: 10px;

  box-shadow: 2px 4px 15px rgba(70, 82, 230, 0.05);
`;
export default MyPageCard;
