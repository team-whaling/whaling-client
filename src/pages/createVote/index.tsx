import React, { useState } from 'react';
import CreateVoteMain from './CreateVoteMain';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import LastStep from './LastStep';
import {
  ProgressBtnWrapper,
  SProgressBar,
} from '../../styles/createvote.styles';
import Button from '../../components/Button';
import direction from '../../static/icons/direction.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CreateVote = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const prevStep = () => {
    setStep(step - 1);
    if (step <= 0) navigate(`/`);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const getStepPage: any = {
    0: <CreateVoteMain nextStep={nextStep} />,
    1: <FirstStep />,
    2: <SecondStep />,
    3: <ThirdStep />,
    4: <FourthStep />,
    5: <LastStep prevStep={prevStep} />,
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
      {step > 0 && step < 5 && (
        <ProgressBtnWrapper>
          <Step>{step}/4</Step>
          <SProgressBar
            completed={25 * step}
            bgColor="#4652E6"
            height="4px"
            width="335px"
            borderRadius="2px"
            isLabelVisible={false}
            baseBgColor="#ECECEC"
            maxCompleted={100}
            animateOnRender
          />
          <Button buttonType="Progress" content="다음" onClick={nextStep} />
        </ProgressBtnWrapper>
      )}
    </div>
  );
};
const BackButton = styled.img`
  margin-top: 13px;
  margin-bottom: 43px;
`;

const Step = styled.p`
  margin-bottom: 8px;
  margin-right: 9px;

  text-align: right;
`;
export default CreateVote;
