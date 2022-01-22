import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
import { ColumnCenter, RowBetween, StyledLink } from './Layout';
const MenuBar = () => {
  const path = useLocation().pathname.slice(1);

  return (
    <Container>
      <StyledLink to="/">
        <ColumnCenter>
          <Icon iconType={path === '' ? 'ColoredHome' : 'Home'} />
          <MenuText>홈</MenuText>
        </ColumnCenter>
      </StyledLink>
      <StyledLink to="/votes">
        <ColumnCenter>
          <Icon iconType={path === 'votes' ? 'ColoredVote' : 'Vote'} />
          <MenuText>투표하기</MenuText>
        </ColumnCenter>
      </StyledLink>
      <StyledLink to="/my-page">
        <ColumnCenter>
          <Icon
            iconType={path.includes('my-page') ? 'ColoredMypage' : 'MyPage'}
          />
          <MenuText>마이페이지</MenuText>
        </ColumnCenter>
      </StyledLink>
    </Container>
  );
};

const Container = styled(RowBetween)`
  height: 78px;

  padding: 0 37px;

  background-color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MenuText = styled.span`
  font-size: 8px;
`;

export default MenuBar;
