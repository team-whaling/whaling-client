import React, { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
import MainVoteCard from '../../components/card/MainVoteCard';
import InitialCard from '../../components/card/InitialCard';
import Icon, { IconType } from '../../components/Icon';
import {
  Column,
  ColumnCenter,
  Row,
  RowBetween,
  StyledLink,
} from '../../components/Layout';
import MenuBar from '../../components/MenuBar';
import Text, { TextType } from '../../components/Text';
import color from '../../styles/color';
import main from '../../static/img/main.png';
import api from '../../app/api';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ObserverTarget } from '../../styles/global.styles';
import Loading from '../../components/loading';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
const Main = () => {
  //해당 페이지에서는 양옆 패딩 제거
  document.body.style.padding = '0';
  document.body.style.backgroundColor = `${color.darkness[1]}`;
  const today = new Date();
  const [accuracy, setAccuracy] = useState(0);
  const { nickname, participatedVotes, getParticipatedVotes } = useAuth();
  const ongoingVotes = participatedVotes.votes.filter(
    (vote) => vote.state === 'ongoing',
  );
  const navigate = useNavigate();

  const { isLoaded, setOriginalList, observingList } = useInfiniteScroll({
    originalList: ongoingVotes,
  });

  useEffect(() => {
    const ongoing = participatedVotes.votes.filter(
      (vote) => vote.state === 'ongoing',
    );
    if (!ongoing) return;
    setOriginalList(ongoing);
  }, [participatedVotes]);

  useEffect(() => {
    getParticipatedVotes();

    const fetchAccuracy = async () => {
      try {
        const res = await api.requestAccuracy();
        setAccuracy(res.acc_percent);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccuracy();
  }, []);

  return (
    <Container>
      <Column
        style={{
          width: '100%',
          height: '163px',
          // backgroundColor: 'white',
        }}
      >
        <AccuracyWrapper
          // style={{ position: 'fixed' }}
          className="accuracy-wrapper"
        >
          <Icon iconType={IconType.Logo} />
          <Time>
            <Text
              type={TextType.Body}
              content={`${today.getMonth() + 1}월 ${today.getDate()}일`}
              style={{ color: `${color.darkness[4]}` }}
            />
          </Time>
          <Text
            type={TextType.Title}
            content="현재 웨일링 적중률은 "
            style={{ lineHeight: `150%` }}
          />
          <br />
          <Text
            type={TextType.Title}
            content={`${accuracy}% `}
            style={{ color: `${color.blue[4]}`, lineHeight: `150%` }}
          />
          <Text type={TextType.Title} content="입니다." />
        </AccuracyWrapper>
      </Column>
      <VoteListWrapper>
        <RowBetween style={{ margin: '0 20px' }}>
          <Text
            type={TextType.Headline}
            content={`${nickname}님이 참여한 투표`}
          />
          <Icon
            iconType={IconType.MainBack}
            style={{ display: 'flex', transform: 'rotate(180deg)' }}
            onClick={() => navigate(`/my-page/${nickname}/participated-votes`)}
          />
        </RowBetween>

        <ColumnCenter>
          {observingList && participatedVotes.votes.length > 0 ? (
            observingList.map((vote, index) => <MainVoteCard vote={vote} />)
          ) : (
            <InitialCard />
          )}
        </ColumnCenter>
        <div
          style={{ width: '100%', height: '100px', backgroundColor: 'white' }}
        />
        {observingList &&
          ongoingVotes &&
          observingList.length < ongoingVotes.length && (
            <ObserverTarget id="observer-target">
              {!isLoaded && <Loading />}
            </ObserverTarget>
          )}
      </VoteListWrapper>

      <StyledLink to="/create">
        <Icon iconType={IconType.CreateVote} style={createVoteStyle} />
      </StyledLink>
      <MenuBar />
    </Container>
  );
};
const Container = styled.div`
  padding-top: 10px;
  background-color: ${color.darkness[1]};

  background-image: url(${main});
  background-size: contain;
  background-position-y: -44px;
`;

const AccuracyWrapper = styled.div`
  margin-left: 24px;
`;

const Time = styled(Row)`
  align-items: flex-start;
  margin-top: 37px;
  margin-bottom: 5px;
`;

const VoteListWrapper = styled(Column)`
  margin-top: 40px;
  padding: 30px 0;
  margin-bottom: 100px;

  background: #ffffff;

  border-radius: 20px 20px 0px 0px;

  box-shadow: -10px -10px 100px rgba(198, 200, 203, 0.1);
`;

const createVoteStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1,
  bottom: 94,
  right: 16,
  width: 56,
};

export default Main;
