import React from 'react';
import Button, { createVoteBtnStyle } from '../../components/Button';

const ThirdStep = ({ nextStep }: any) => {
  return (
    <div>
      <p>예상 변동폭을 작성해주세요.</p>
      <input placeholder="최소 1~최대 300 까지 입력이 가능합니다." />
      <Button
        buttonType="Progress"
        content="다음"
        style={createVoteBtnStyle}
        onClick={nextStep}
      />
    </div>
  );
};

export default ThirdStep;
