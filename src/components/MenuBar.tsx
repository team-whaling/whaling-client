import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { ColumnCenter, RowBetween } from './Layout';
const MenuBar = () => {
  return (
    <Container>
      <ColumnCenter>
        <Icon iconType="Home" />
        <MenuText>홈</MenuText>
      </ColumnCenter>
      <ColumnCenter>
        <Icon iconType="BottomBarVote" />
        <MenuText>투표하기</MenuText>
      </ColumnCenter>
      <ColumnCenter>
        <Icon iconType="BottomBarMyPage" />
        <MenuText>마이페이지</MenuText>
      </ColumnCenter>
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

export default MenuBar;
