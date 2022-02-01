import React, { useEffect, useState } from 'react';
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
import StepBar from '../../components/StepBar';
import { ProgressBtnWrapper } from '../../styles/createvote.styles';
import { Column, ColumnCenter } from '../../components/Layout';

const CreateVote = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState('');

  const onProgressBtnClick = () => {
    nextStep();
    if (step === 1) setAnswer({ ...answer, coinCode: value });
    else if (step === 2) setAnswer({ ...answer, duration: value });
    else if (step === 3) setAnswer({ ...answer, range: value });
    else if (step === 4) setAnswer({ ...answer, comment: value });
    setValue('');
  };

  const prevStep = () => {
    setStep(step - 1);
    if (step <= 0) navigate(`/`);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    setDisabled(true);
  }, [step]);

  const getStepPage: any = {
    0: <CreateVoteMain nextStep={nextStep} />,
    1: (
      <FirstStep value={value} setValue={setValue} setDisabled={setDisabled} />
    ),
    2: (
      <SecondStep
        setValue={setValue}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    ),
    3: (
      <ThirdStep value={value} setValue={setValue} setDisabled={setDisabled} />
    ),
    4: (
      <FourthStep
        setValue={setValue}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    ),
    5: <LastStep prevStep={prevStep} answer={answer} />,
  };

  return (
    <Column>
      {step < 5 && (
        <BackButton
          src={direction}
          width={10}
          height={18}
          alt="뒤로가기"
          onClick={prevStep}
        />
      )}
      <ColumnCenter>
        {getStepPage[step]}
        {step > 0 && step < 5 && (
          <ProgressBtnWrapper>
            <StepBar step={step} />
            <Button
              buttonType="Progress"
              content="다음"
              onClick={onProgressBtnClick}
              disabled={disabled}
            />
          </ProgressBtnWrapper>
        )}
      </ColumnCenter>
    </Column>
  );
};
const BackButton = styled.img`
  margin-top: 13px;
  margin-bottom: 43px;
`;

export default CreateVote;
