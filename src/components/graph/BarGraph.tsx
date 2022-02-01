import React, { CSSProperties } from 'react';
import color from '../../styles/color';
import Text from '../Text';
import styled, { css } from 'styled-components';
import { ColumnCenter, Row, RowCenter } from '../Layout';
import Icon, { IconType } from '../Icon';

//mock data

interface IBarGraph {
  voteDetail: any;
  kind: string;
  state: string;
}

const BarGraph = ({ voteDetail, kind, state }: IBarGraph) => {
  //kind: card/detail
  //status: ongoing/finished/tracked

  const chart: CSSProperties = {
    display: 'flex',
    width: 313,
    height: kind === 'detail' ? 90 : 46,
    marginTop: 12,
  };

  const participant = {
    yes: parseInt(`${voteDetail.pos_participants}`),
    no: parseInt(`${voteDetail.neg_participants}`),
    total: parseInt(`${voteDetail.total_participants}`),
  };

  const yesRate = (participant.yes / participant.total) * 100;
  const noRate = (participant.no / participant.total) * 100;
  const userVoted = voteDetail.user.choice; // 1 / 2

  return (
    <div style={chart}>
      {participant.yes > 0 && (
        <Bar
          data={participant.yes / participant.total}
          state={state}
          type="left"
        >
          <TextWrapper>
            <AnswerWrapper>
              <Text type="Body" content="예" style={{ color: 'inherit' }} />
              {userVoted === 1 && yesRate >= noRate ? (
                <Icon iconType={IconType.VotedWhite} />
              ) : (
                userVoted === 1 && <Icon iconType={IconType.VotedGray} />
              )}
            </AnswerWrapper>
            <Text
              type="Body2"
              content={`${Math.round(
                (participant.yes / participant.total) * 100,
              )}%`}
              style={{ color: 'inherit' }}
            />
          </TextWrapper>
        </Bar>
      )}
      {participant.no > 0 && (
        <Bar
          data={participant.no / participant.total}
          state={state}
          type="right"
        >
          <TextWrapper>
            <AnswerWrapper>
              <Text type="Body" content="아니오" style={{ color: 'inherit' }} />
              {userVoted === 2 && noRate > yesRate ? (
                <Icon iconType={IconType.VotedWhite} />
              ) : (
                userVoted === 2 && <Icon iconType={IconType.VotedGray} />
              )}
            </AnswerWrapper>
            <Text
              type="Body2"
              content={`${Math.round(
                (participant.no / participant.total) * 100,
              )}%`}
              style={{ color: 'inherit' }}
            />
          </TextWrapper>
        </Bar>
      )}
    </div>
  );
};

interface BarProps {
  data: number;
  state: string;
  type: string;
}

const AnswerWrapper = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const TextWrapper = styled(ColumnCenter)`
  line-height: 120%;
`;

const Bar = styled(RowCenter)<BarProps>`
  width: ${(props) => props.data * 100}%;
  ${(props) => {
    if (props.data * 100 > 50) {
      if (props.state === 'finished' || props.state === 'tracked') {
        return css`
          background-color: ${color.darkness[3]};
          color: ${color.darkness[7]};
        `;
      }
      if (props.state === 'ongoing') {
        return css`
          background-color: ${color.blue[4]};
          color: ${color.darkness[0]};
        `;
      }
    } else if (props.data * 100 === 50) {
      if (props.state === 'finished' || props.state === 'tracked') {
        if (props.type === 'left') {
          return css`
            background-color: ${color.darkness[3]};
            color: ${color.darkness[7]};
          `;
        }
        if (props.type === 'right') {
          return css`
            background-color: ${color.darkness[1]};
            color: ${color.darkness[4]};
          `;
        }
      }
      if (props.state === 'ongoing') {
        if (props.type === 'left') {
          return css`
            background-color: ${color.blue[4]};
            color: ${color.darkness[0]};
          `;
        }
        if (props.type === 'right') {
          return css`
            background-color: ${color.darkness[2]};
            color: ${color.darkness[4]};
          `;
        }
      }
    } else {
      return css`
        background-color: ${color.darkness[2]};
        color: ${color.darkness[4]};
      `;
    }
  }}

  ${(props) => {
    if (props.data * 100 === 100) {
      return css`
        border-radius: 10px;
      `;
    } else {
      if (props.type === 'left')
        return css`
          border-radius: 10px 0 0 10px;
        `;
      else
        return css`
          border-radius: 0 10px 10px 0;
        `;
    }
  }}
`;

export default BarGraph;
