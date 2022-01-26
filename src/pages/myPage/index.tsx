import React from 'react';
import Chip, { ChipType } from '../../components/Chip';
import Text, { TextType } from '../../components/Text';
import Image, { ImgType } from '../../components/Image';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column, Row, RowCenter } from '../../components/Layout';
import MenuBar from '../../components/MenuBar';
import GaugeBar from '../../components/GaugeBar';
import color from '../../styles/color';
import MyPageCard from '../../components/card/MyPageCard';
import styled from 'styled-components';
import { MyVoteListType } from './types';

const index = () => {
  return (
    <Container>
      <ProfileWrapper>
        <Icon iconType={IconType.Profile} style={{ marginRight: 12 }} />
        <Column>
          <Text type={TextType.Title2} content="고래" />
          <RowCenter>
            <Chip chipType={ChipType.Coin} />
            <Text
              type={TextType.Body2}
              content="3000개"
              style={{ color: `${color.blue[4]}`, marginLeft: 6 }}
            />
          </RowCenter>
        </Column>
      </ProfileWrapper>
      <GaugeBar nickname={'고래'} accuracy={63} />
      <Image imgType={ImgType.MyPage} />
      <Text
        type={TextType.Headline}
        content="투표 내역"
        style={{ marginTop: 20 }}
      />
      <MyPageCard type={MyVoteListType.Created} />
      <MyPageCard type={MyVoteListType.Participated} />
      <MenuBar />
    </Container>
  );
};

const Container = styled(Column)`
  margin-top: 48px;
`;

const ProfileWrapper = styled(Row)`
  align-items: center;
`;

export default index;
