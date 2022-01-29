import React, { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
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
import { useParams } from 'react-router';
import { handlePayload } from '../../../utils/handlePayload';
import { IVotePayload } from '../../../app/vote/types';
import axios from 'axios';
import useVote from '../../../hooks/useVote';

const Detail = () => {
  //해당 페이지에서는 양옆 패딩 제거
  document.body.style.padding = '0';
  {
    /*TODO: 사용자의 투표 완료 상태 API 연결 */
  }

  const voted = false;
  const { isOpen, toggleModal } = useModal();
  const [answer, setAnswer] = useState('');
  const params = useParams();
  const id = parseInt(params.id!);
  const [payload, setPayload] = useState<IVotePayload>();
  const [voteDetail, setVoteDetail] = useState<IVotePayload>();
  const { votes, postVote } = useVote();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`/votes/${id}`);
        setPayload(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetail();
  }, [postVote]);

  useEffect(() => {
    if (payload) {
      setVoteDetail(handlePayload(payload));
    }
  }, [payload]);

  const onAnswerBtnClick = (e: any) => {
    toggleModal();
    setAnswer(e.target.innerText);
  };

  return (
    <div>
      {voteDetail && (
        <>
          <Background tracked={false}>
            <RowBetween>
              <StyledLink to="/votes">
                <Icon iconType="Close" />
              </StyledLink>
              <Column>
                <Text
                  type="Body2"
                  content={`${voteDetail.created_at} - ${voteDetail.finished_at}`}
                  style={{ marginTop: '14px' }}
                />
                <div>
                  <Text
                    type="Body2"
                    content="12시간 후 "
                    style={{
                      color: `${color.blue[4]}`,
                      whiteSpace: 'pre-wrap',
                    }}
                  />
                  <Text type="Body2" content="결과공개" />
                </div>
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
              content={`$${voteDetail.coin.krname}이(가) ${voteDetail.duration}이후에`}
            />
            <Text
              type="Headline"
              content={`${voteDetail.range}%이상 ${voteDetail.comment}?`}
            />
            <Text
              type="Body2"
              content={`*투표 생성 시점 ${voteDetail.created_price}원`}
              style={{ marginTop: '8px', marginBottom: '12px' }}
            />
            {voted ? (
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
          <BottomSheet
            isOpen={isOpen}
            toggleModal={toggleModal}
            answer={answer}
          />
          <Column style={{ marginLeft: '18px' }}>
            <Text type="Headline" content="핵심 통계" />
            <div>
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
        </>
      )}
      {/* TODO: 사용자의 투표 완료 상태에 따라 원그래프를 보여줌 */}
      {voteDetail && (
        <>
          {voted ? (
            <ColumnCenter>
              <PieGraph voteDetail={voteDetail} />
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

const hrStyle: CSSProperties = {
  border: `7px solid ${color.darkness[1]}`,
  marginTop: '20px',
};

const warning: CSSProperties = {
  backgroundColor: `${color.darkness[1]}`,
  paddingTop: '15px',
  paddingBottom: '20px',
};
export default Detail;
