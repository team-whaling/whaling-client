import React from 'react';
import Button, { createVoteBtnStyle } from '../../components/Button';
const FirstStep = () => {
  return (
    <div>
      <p>종목을 선택해주세요.</p>
      <input placeholder="코인명, 티커 검색"></input>
      <Button buttonType="Progress" content="다음" style={createVoteBtnStyle} />
    </div>
  );
};

export default FirstStep;
