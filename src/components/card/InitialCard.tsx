import React from 'react';
import styled from 'styled-components';
import color from '../../styles/color';
import Text from '../Text';
import Image from '../Image';
import { Column, Row, RowCenter, StyledLink } from '../Layout';
const InitialCard = () => {
  return (
    <>
      <Container>
        <Column style={{ padding: '18px 24px' }}>
          <Text
            type="Body2"
            content="적중률 100% 도전기!"
            style={{ marginBottom: 13 }}
          />
          <Text type="Headline" content="아직 진행하신 " />
          <Row>
            <Text type="Headline" content="투표가" />
            <Text
              type="Headline"
              content=" 없어요!"
              style={{ whiteSpace: 'pre-wrap', color: `${color.blue[4]}` }}
            />
          </Row>
          <Text type="Headline" content="투표하러 가볼까요?" />
        </Column>
        <Image imgType="Note" />
      </Container>
      <StyledLink to="/votes">
        <VoteButton>
          <Text
            type="Headline2"
            content="투표하러가기"
            style={{
              color: '#ffffff',
            }}
          />
        </VoteButton>
      </StyledLink>
    </>
  );
};
const Container = styled(Row)`
  width: 343px;
  height: 149px;

  margin-top: 16px;

  background: #f2f6fa;
  border-radius: 10px 10px 0 0;
`;

const VoteButton = styled(RowCenter)`
  width: 343px;
  height: 55px;

  background: ${color.blue[4]};
  border-radius: 0px 0px 10px 10px;
`;

export default InitialCard;
