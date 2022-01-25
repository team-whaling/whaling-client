import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import styled from 'styled-components';
import { Column } from './Layout';
const StepBar = ({ step }: { step: number }) => {
  return (
    <div>
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
        //animateOnRender
      />
    </div>
  );
};

export const ProgressBtnWrapper = styled(Column)`
  position: absolute;
  bottom: 31px;

  margin: 0;
`;

export const SProgressBar = styled(ProgressBar)`
  margin-bottom: 12px;
`;
const Step = styled.p`
  margin-bottom: 8px;
  margin-right: 9px;

  text-align: right;
`;

export default StepBar;
