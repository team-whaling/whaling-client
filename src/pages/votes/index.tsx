import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon, { IconType } from '../../components/Icon';
import Text from '../../components/Text';
import { Column, Row } from '../../components/Layout';
import color from '../../styles/color';
import VoteCard from '../../components/card/VoteCard';
import MenuBar from '../../components/MenuBar';
import font from '../../styles/font';
import useVote from '../../hooks/useVote';
import { IVotePayload } from '../../app/vote/types';

const Votes = () => {
  document.body.style.padding = '0';
  const { votes, getVotes } = useVote();
  const [voteList, setVoteList] = useState<IVotePayload[]>();

  useEffect(() => {
    getVotes();
    setVoteList(votes.filter((vote) => vote.state === 'ongoing'));
  }, []);

  const [clicked, setClicked] = useState(true);

  const menuBtnClick = (e: any) => {
    if (e.target.innerText.substr(0, 2) === '진행')
      setVoteList(votes.filter((vote) => vote.state === 'ongoing'));
    else setVoteList(votes.filter((vote) => vote.state === 'finished'));
    setClicked(!clicked);
  };

  return (
    <div>
      <InputWrapper>
        <Icon iconType={IconType.Magnifier} style={{ marginRight: 16 }} />
        <Input
          placeholder="코인명, 티커 검색"
          style={{ color: `${color.darkness[5]}` }}
        />
      </InputWrapper>
      <MenuWrapper>
        <MenuText onClick={menuBtnClick} clicked={clicked}>
          진행중인 투표
        </MenuText>
        <MenuText onClick={menuBtnClick} clicked={!clicked}>
          마감된 투표
        </MenuText>
        {/*TODO: select button*/}
        <button />
      </MenuWrapper>
      <VoteWrapper>
        {voteList &&
          voteList.map((vote) => <VoteCard key={vote.vote_id} vote={vote} />)}
      </VoteWrapper>
      <MenuBar />
    </div>
  );
};
const InputWrapper = styled(Row)`
  align-items: center;
  padding: 16px 24px;

  border: 1px solid #eaeaea;
`;

const Input = styled.input`
  all: unset;
`;

const MenuWrapper = styled(Row)`
  margin: 16px 24px 0 24px;
`;

const MenuText = styled.span<{ clicked: boolean }>`
  color: ${(props) => (props.clicked ? color.darkness[7] : color.darkness[4])};
  font-size: ${font.headline[3]}px;
  font-weight: 500;

  border-bottom: ${(props) =>
    props.clicked ? `1px solid ${color.darkness[7]}` : 0};

  padding-bottom: 8px;
  &:nth-child(1) {
    margin-right: 11px;
  }
`;

const VoteWrapper = styled(Column)`
  align-items: center;

  width: 375px;
  min-height: 812px;

  background-color: ${color.darkness[2]};
`;

export default Votes;
