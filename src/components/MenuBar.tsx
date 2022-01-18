import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
import { ColumnCenter, RowBetween } from './Layout';
const MenuBar = () => {
  return (
    <Container>
      <StyledLink to="/">
        <ColumnCenter>
          <Icon iconType="Home" />
          <MenuText>홈</MenuText>
        </ColumnCenter>
      </StyledLink>
      <StyledLink to="/">
        <ColumnCenter>
          <Icon iconType="BottomBarVote" />
          <MenuText>투표하기</MenuText>
        </ColumnCenter>
      </StyledLink>
      <StyledLink to="/my-page">
        <ColumnCenter>
          <Icon iconType="BottomBarMyPage" />
          <MenuText>마이페이지</MenuText>
        </ColumnCenter>
      </StyledLink>
    </Container>
  );
};

const Container = styled(RowBetween)`
  height: 78px;

  padding: 0 53px;

  background-color: #fff;
`;

const MenuText = styled.span`
  font-size: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default MenuBar;
