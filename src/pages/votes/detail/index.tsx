import React, { CSSProperties, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PieGraph from '../../../components/graph/PieGraph';
import Text from '../../../components/Text';
import Icon from '../../../components/Icon';
import Image from '../../../components/Image';
import {
  Column,
  ColumnCenter,
  Row,
  RowBetween,
  RowCenter,
  StyledLink,
} from '../../../components/Layout';
import Button from '../../../components/Button';
import color from '../../../styles/color';
import BarGraph from '../../../components/graph/BarGraph';
import BottomSheet from '../../../components/BottomSheet';
import useModal from '../../../hooks/useModal';
import detail from '../../../static/img/detail.png';
import detailTracked from '../../../static/img/detail-tracked.png';
import { useNavigate, useParams } from 'react-router';
import { handlePayload } from '../../../utils/handlePayload';
import { IVotePayload } from '../../../app/vote/types';
import axios from 'axios';
import AlertModal from '../../../components/modal/AlertModal';
import useVote from '../../../hooks/useVote';
import Modal from '../../../components/modal/Modal';
import Chip from '../../../components/Chip';
import { calculateLeftTime } from '../../../utils/calculateTime';

const Detail = () => {
  //해당 페이지에서는 양옆 패딩 제거
  document.body.style.padding = '0';
  document.body.style.backgroundColor = `${color.darkness[0]}`;
  {
    /*TODO: 사용자의 투표 완료 상태 API 연결 */
  }

  const { isOpen, toggleModal } = useModal();
  const [answer, setAnswer] = useState('');
  const params = useParams();
  const id = parseInt(params.id!);
  const [payload, setPayload] = useState<IVotePayload>();
  const [voteDetail, setVoteDetail] = useState<IVotePayload>();
  const [voted, setVoted] = useState(false);
  const [ratio, setRatio] = useState(0);
  const [trackedTime, setTrackedTime] = useState('');

  const { coinError } = useVote();

  const fetchDetail = async () => {
    try {
      const res = await axios.get(`/votes/${id}`);
      setPayload(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [voted]);

  useEffect(() => {
    if (payload) {
      setVoteDetail(payload);
      setTrackedTime(payload.tracked_at);
      setRatio(
        Math.round((payload.finished_price / payload.created_price) * 100) /
          100,
      );
    }
  }, [voted, payload]);

  useEffect(() => {
    if (voted) {
      fetchDetail();
      setVoteDetail(payload);
    }
  }, [voted]);

  const onAnswerBtnClick = (e: any) => {
    toggleModal();
    setAnswer(e.target.innerText);
  };

  const navigate = useNavigate();

  return (
    <div>
      {voteDetail && (
        <>
          <Background tracked={false}>
            <RowBetween>
              <Icon iconType="Close" onClick={() => navigate(-1)} />
              <Column>
                <Text
                  type="Body2"
                  content={`${handlePayload(payload).createdAt} - ${
                    handlePayload(payload).finishedAt
                  }`}
                  style={{ marginTop: '14px' }}
                />
                {voteDetail.state === 'tracked' ? (
                  <Row style={{ justifyContent: 'flex-end' }}>
                    {voteDetail.is_answer ? (
                      <Chip chipType="Success" />
                    ) : (
                      <Chip chipType="Fail" />
                    )}
                  </Row>
                ) : (
                  <Row style={{ justifyContent: 'flex-end' }}>
                    <Text
                      type="Body2"
                      content={`${calculateLeftTime(trackedTime)} 후 `}
                      style={{
                        color: `${color.blue[4]}`,
                        whiteSpace: 'pre-wrap',
                      }}
                    />
                    <Text type="Body2" content="결과공개" />
                  </Row>
                )}
              </Column>
            </RowBetween>
            <Column>
              <Text
                type="Headline"
                content={`${
                  voteDetail.neg_participants + voteDetail.pos_participants
                }명 참여중`}
              />
              <Row>
                <Text type="Body" content="적중 시 " />
                <Icon iconType="Dollar" style={{ margin: '2px' }} />
                <Text type="Body" content={`+${voteDetail.earned_point}`} />
              </Row>
            </Column>
          </Background>
          <VoteDetail>
            <CoinImg src={`${voteDetail.coin.image}`} />
            <Text
              type="Headline"
              content={`$${voteDetail.coin.krname}이(가) ${
                handlePayload(payload).duration
              }이후에`}
            />
            <Text
              type="Headline"
              content={`${voteDetail.range}%이상 ${
                handlePayload(payload).comment
              }?`}
            />
            {voteDetail.state === 'tracked' ? (
              <Row>
                <Icon iconType="Person" style={{ marginRight: 4 }} />
                <Text
                  type="Body2"
                  content={`${voteDetail.total_participants}`}
                />
              </Row>
            ) : (
              <Text
                type="Body2"
                content={`*투표 생성 시점 ${voteDetail.created_price}원(업비트)`}
                style={{ marginTop: '8px', marginBottom: '12px' }}
              />
            )}
            {voted ||
            voteDetail.user.choice !== null ||
            voteDetail.state === 'finished' ||
            voteDetail.state === 'tracked' ? (
              <BarGraph
                voteDetail={voteDetail}
                kind="detail"
                state={`${voteDetail.state}`}
              />
            ) : (
              <RowCenter>
                <Button
                  buttonType="Answer"
                  content="예"
                  onClick={onAnswerBtnClick}
                />
                <BetweenText>VS</BetweenText>
                <Button
                  buttonType="Answer"
                  content="아니오"
                  onClick={onAnswerBtnClick}
                />
              </RowCenter>
            )}
          </VoteDetail>
          <hr style={hrStyle} />
          {coinError ? (
            <Modal isOpen={isOpen} toggleModal={toggleModal} type="goVote">
              <AlertModal type="goVote" />
            </Modal>
          ) : (
            <BottomSheet
              isOpen={isOpen}
              toggleModal={toggleModal}
              answer={answer}
              setVoted={setVoted}
              vote={voteDetail}
            />
          )}
          {voteDetail.state === 'tracked' && (
            <ResultWrapper>
              <Row style={{ alignItems: 'center', marginBottom: 16 }}>
                <Text
                  type="Headline"
                  content="실제 결과"
                  style={{ marginRight: 2 }}
                />
                <Icon iconType="Info" />
              </Row>
              <Column>
                <BarWrapper>
                  <Bar type="created" ratio={ratio}>
                    <Text type="Body" content="초기 시점 가격" />
                  </Bar>
                  <Text type="Body" content={`${voteDetail.created_price}원`} />
                </BarWrapper>
                <BarWrapper>
                  <Bar type="tracked" ratio={ratio}>
                    <Text
                      type="Body"
                      content="종료 시점 가격"
                      style={{ color: 'inherit' }}
                    />
                  </Bar>
                  <Text
                    type="Body"
                    content={`${voteDetail.finished_price}원(`}
                  />
                  <Text
                    type="Body"
                    content={`${ratio > 1 ? '+' : '-'}` + `${ratio}%`}
                    style={{
                      color: `${ratio > 1 ? color.red[4] : color.blue[4]}`,
                    }}
                  />
                  <Text type="Body" content=")" />
                </BarWrapper>
              </Column>
              <hr style={hrStyle} />
            </ResultWrapper>
          )}
          <Column style={{ marginLeft: 18 }}>
            <Text type="Headline" content="핵심 통계" />
            <div style={{ marginTop: 4, lineHeight: `100%` }}>
              <Text type="Body2" content="적중률이 70% 이상" />
              <Text
                type="Body2"
                content="인 유저들의 정보들을 취합한 통계입니다"
              />
              <Text
                type="Body2"
                content="유저의 적중률은 투표한 시점의 적중률로 반영합니다"
              />
            </div>
          </Column>
          {voted || voteDetail.user.choice !== null ? (
            <ColumnCenter>
              {voteDetail.pos_whales + voteDetail.neg_whales === 0 ? (
                <Image imgType="NoWhale" />
              ) : (
                <PieGraph voteDetail={voteDetail} />
              )}
            </ColumnCenter>
          ) : (
            <>
              <Image imgType="Blur" />
            </>
          )}
          <ColumnCenter style={warning}>
            <Icon iconType="Info" />
            <Text
              type="Caption"
              content="모든 통계와 결과는 유저들의 생각을 정리한 것으로"
            />
            <Text
              type="Caption"
              content="이를 맹목적으로 믿고 따름으로써 일어나는 개개인의 손실과 피해는"
            />
            <Text type="Caption" content="웨일링의 책임이 아님을 명시합니다." />
          </ColumnCenter>
        </>
      )}
    </div>
  );
};

const Background = styled.div<{ tracked: boolean }>`
  padding: 0 16px;

  background-image: ${(props) =>
    props.tracked ? `url(${detailTracked})` : `url(${detail})`};
  background-size: cover;
  background-repeat: no-repeat;

  height: 211px;
`;

const VoteDetail = styled(ColumnCenter)`
  position: relative;

  width: 100%;

  padding-top: 40px;

  border-radius: 25px 25px 0 0;
  box-shadow: -10px -10px 100px rgba(198, 200, 203, 0.1);
`;

const CoinImg = styled.img`
  position: absolute;
  top: -64px;

  width: 91px;
  height: 91px;

  border-radius: 50%;
  border: 5px solid #ffffff;

  background-color: #ffffff;
`;

const BetweenText = styled.span`
  margin: 0 16px;

  font-weight: bold;
  font-size: 18px;
  color: ${color.blue[4]};
`;

const ResultWrapper = styled.div`
  margin-left: 25px;
`;

const Bar = styled(Row)<{ type: string; ratio: number }>`
  align-items: center;

  ${(props) => {
    if (props.type === 'created') {
      if (props.ratio! > 1)
        return css`
          width: 105px;
        `;
      else
        return css`
          width: 154px;
        `;
    } else {
      if (props.ratio! > 1)
        return css`
          width: 154px;
        `;
      else
        return css`
          width: 105px;
        `;
    }
  }}
  height: 44px;

  margin-right: 16px;
  padding-left: 15px;

  background: ${(props) =>
    props.type === 'created' ? color.darkness[2] : color.darkness[7]};
  color: ${(props) =>
    props.type === 'created' ? color.darkness[7] : `#FFFFFF`};

  border-radius: 10px;
`;

const BarWrapper = styled(Row)`
  align-items: center;
  &:nth-child(1) {
    margin-bottom: 12px;
  }
`;

const hrStyle: CSSProperties = {
  border: `7px solid ${color.darkness[1]}`,
  marginTop: 20,
  marginBottom: 20,
};

const warning: CSSProperties = {
  backgroundColor: `${color.darkness[1]}`,
  paddingTop: 15,
  paddingBottom: 20,
};
export default Detail;
