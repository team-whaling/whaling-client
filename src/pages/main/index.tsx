import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import MainVoteCard from '../../components/card/MainVoteCard';
import InitialCard from '../../components/card/InitialCard';
import Icon from '../../components/Icon';
import {
  Column,
  ColumnCenter,
  Row,
  RowBetween,
  StyledLink,
} from '../../components/Layout';
import MenuBar from '../../components/MenuBar';
import Text from '../../components/Text';
import color from '../../styles/color';
import main from '../../static/img/main.png';
const index = () => {
  //해당 페이지에서는 양옆 패딩 제거
  document.body.style.padding = '0';
  let userVote = 0;
  return (
    <Container>
      <AccuracyWrapper>
        <Icon iconType="Logo" />
        <Time>
          <Text
            type="Body2"
            content="1월 18일 기준"
            style={{ color: `${color.darkness[4]}` }}
          />
          <Icon iconType="Info" style={{ width: 12, height: 12 }} />
        </Time>
        <Text type="Title" content="현재 웨일링 적중률은 " /> <br />
        <Text
          type="Title"
          content="70.1% "
          style={{ color: `${color.blue[4]}` }}
        />
        <Text type="Title" content="입니다." />
      </AccuracyWrapper>
      <VoteListWrapper>
        <RowBetween style={{ margin: '0 20px' }}>
          <Text type="Headline" content="고래님이 참여한 투표" />
          <Icon
            iconType="MainBack"
            style={{ display: 'flex', transform: 'rotate(180deg)' }}
          />
        </RowBetween>
        <ColumnCenter>
          {userVote > 0 ? <MainVoteCard /> : <InitialCard />}
        </ColumnCenter>
      </VoteListWrapper>
      <StyledLink to="/create">
        <Icon iconType="CreateVote" style={createVoteStyle} />
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
  margin-top: 42px;
  padding: 30px 0;

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

export default index;
