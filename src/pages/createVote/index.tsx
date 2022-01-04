import React, { useState } from 'react';
import CreateVoteMain from './CreateVoteMain';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import LastStep from './LastStep';

const CreateVote = () => {
  const [step, setStep] = useState(0);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const getStepPage: any = {
    0: <CreateVoteMain nextStep={nextStep} />,
    1: <FirstStep nextStep={nextStep} />,
    2: <SecondStep nextStep={nextStep} />,
    3: <ThirdStep nextStep={nextStep} />,
    4: <FourthStep nextStep={nextStep} />,
    5: <LastStep />,
  };

  return (
    <div>
      <button onClick={prevStep}>뒤로가기</button>
      {getStepPage[step]}
    </div>
  );
};

export default CreateVote;
