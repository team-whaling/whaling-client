import React, { useState } from 'react';
import FirstStep from './FirstStep';
import CreateVoteMain from './CreateVoteMain';
const CreateVote = () => {
  const [step, setStep] = useState(0);
  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
    case 3:
    case 4:
  }
  return (
    <div>
      <div>뒤로가기</div>
      <CreateVoteMain nextStep={nextStep} />
    </div>
  );
};

export default CreateVote;
