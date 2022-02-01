import React, { useEffect } from 'react';
import Chip, { ChipType } from '../../components/Chip';
import Text, { TextType } from '../../components/Text';
import Image, { ImgType } from '../../components/Image';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column, ColumnCenter, Row, RowCenter } from '../../components/Layout';
import MenuBar from '../../components/MenuBar';
import GaugeBar from '../../components/GaugeBar';
import color from '../../styles/color';
import MyPageCard from '../../components/card/MyPageCard';
import styled from 'styled-components';
import { MyVoteListType } from './types';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { MainBackWrapper } from '../../styles/global.styles';

const MyPage = () => {
  document.body.style.padding = '0 16px';
  document.body.style.backgroundColor = `${color.darkness[0]}`;
  const {
    user,
    createdVotes,
    participatedVotes,
    getUserInfo,
    getCreatedVotes,
    getParticipatedVotes,
  } = useAuth();
  const navigate = useNavigate();
  const editNickname = () => {
    navigate('/sign-up');
  };

  useEffect(() => {
    getUserInfo();
    getCreatedVotes();
    getParticipatedVotes();
  }, []);

  return (
    <Container>
      <Column style={{ position: 'absolute' }}>
        <ProfileWrapper>
          <Icon
            iconType={IconType.Profile}
            hasProfileImg={!user.is_default_profile}
            profileImgSrc={user.profile_img ? user.profile_img : ''}
            style={{ marginRight: 12 }}
            onClick={editNickname}
          />
          <Column>
            <Text
              type={TextType.Title2}
              content={`${user.nickname || '???'}`}
            />
            <RowCenter>
              <Chip chipType={ChipType.Coin} />
              <Text
                type={TextType.Body2}
                content={`${user.point || 0}개`}
                style={{ color: `${color.blue[4]}`, marginLeft: 6 }}
              />
            </RowCenter>
          </Column>
        </ProfileWrapper>
        <GaugeBar
          nickname={`${user.nickname}`}
          accuracy={user.acc_percent || 0}
        />
        <Image imgType={ImgType.MyPage} />
        <Text
          type={TextType.Headline}
          content="투표 내역"
          style={{ marginTop: 20 }}
        />
        <MyPageCard type={MyVoteListType.Created} />
        <MyPageCard type={MyVoteListType.Participated} />
      </Column>
      <MenuBar />
    </Container>
  );
};

const Container = styled(Column)`
  align-items: center;
  /* height: 812px; */
`;

const ProfileWrapper = styled(Row)`
  /* margin-top: 30px; */
  align-items: center;
`;

export default MyPage;
