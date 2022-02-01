import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import first from '../static/img/tutorial1.gif';
import second from '../static/img/tutorial2.gif';
import third from '../static/img/tutorial3.gif';
import fourth from '../static/img/tutorial4.gif';
import 'swiper/css';
import color from '../styles/color';
import { ColumnCenter, RowCenter } from './Layout';
import Button from './Button';
import { useNavigate } from 'react-router';

const Tutorial = () => {
  document.body.style.backgroundColor = `${color.darkness[1]}`;
  const navigate = useNavigate();
  const pages = [0, 1, 2, 3];
  const [page, setPage] = useState(0);
  const swiperParams = {
    onSlideChange: (swiper: any) => {
      setPage(swiper.activeIndex);
    },
  };
  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <Image src={first} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={second} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={third} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={fourth} />
      </SwiperSlide>
      <ColumnCenter>
        <RowCenter>
          {pages.map((p) => (
            <Dot page={page} />
          ))}
        </RowCenter>
        <Button
          buttonType="Create"
          content="시작하기"
          disabled={page === 3 ? false : true}
          style={startBtn}
          onClick={() => navigate(`/`)}
        />
      </ColumnCenter>
    </Swiper>
  );
};

const Image = styled.img`
  width: 375px;
  margin-top: -44px;
`;

const Dot = styled.div<{ page: number }>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  margin-right: 10px;

  background: ${color.darkness[4]};

  &:nth-child(${(props) => props.page + 1}) {
    width: 27px;
    background: ${color.darkness[7]};
    border-radius: 35px;
  }
`;

const startBtn: CSSProperties = {
  marginTop: 20,
};

export default Tutorial;
