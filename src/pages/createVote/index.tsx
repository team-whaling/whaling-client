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
  return (
    <div>
      {(() => {
        if (step === 0) return <CreateVoteMain nextStep={nextStep} />;
        else if (step === 1) return <FirstStep nextStep={nextStep} />;
        else if (step === 2) return <SecondStep nextStep={nextStep} />;
        else if (step === 3) return <ThirdStep nextStep={nextStep} />;
        else if (step === 4) return <FourthStep nextStep={nextStep} />;
        else if (step === 5) return <LastStep />;
      })()}
    </div>
  );
};

export default CreateVote;
