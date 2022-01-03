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

  switch (step) {
    case 1:
      return <FirstStep nextStep={nextStep} />;
    case 2:
      return <SecondStep nextStep={nextStep} />;
    case 3:
      return <ThirdStep nextStep={nextStep} />;
    case 4:
      return <FourthStep nextStep={nextStep} />;
    case 5:
      return <LastStep />;
  }

  return (
    <div>
      <CreateVoteMain nextStep={nextStep} />
    </div>
  );
};

export default CreateVote;
