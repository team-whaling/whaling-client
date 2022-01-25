import React, { useState } from 'react';
import CreateVoteMain from './CreateVoteMain';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import LastStep from './LastStep';
import Button from '../../components/Button';
import direction from '../../static/icons/direction.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CreateVote = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState([]);

  const prevStep = () => {
    setStep(step - 1);
    if (step <= 0) navigate(`/`);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const getStepPage: any = {
    0: <CreateVoteMain nextStep={nextStep} />,
    1: <FirstStep answer={answer} setAnswer={setAnswer} nextStep={nextStep} />,
    2: <SecondStep answer={answer} setAnswer={setAnswer} nextStep={nextStep} />,
    3: <ThirdStep answer={answer} setAnswer={setAnswer} nextStep={nextStep} />,
    4: <FourthStep answer={answer} setAnswer={setAnswer} nextStep={nextStep} />,
    5: <LastStep prevStep={prevStep} answer={answer} />,
  };

  return (
    <div>
      {step < 5 && (
        <BackButton
          src={direction}
          width={10}
          height={18}
          alt="뒤로가기"
          onClick={prevStep}
        />
      )}
      {getStepPage[step]}
    </div>
  );
};
const BackButton = styled.img`
  margin-top: 13px;
  margin-bottom: 43px;
`;

export default CreateVote;
