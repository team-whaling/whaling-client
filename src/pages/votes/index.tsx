import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon, { IconType } from '../../components/Icon';
import { Column, Row } from '../../components/Layout';
import color from '../../styles/color';
import VoteCard from '../../components/card/VoteCard';
import MenuBar from '../../components/MenuBar';
import font from '../../styles/font';
import useVote from '../../hooks/useVote';
import { IVote, IVotePayload, VoteState } from '../../app/vote/types';
import { ObserverTarget } from '../../styles/global.styles';
import Loading from '../../components/loading';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Votes = () => {
  document.body.style.padding = '0';
  document.body.style.backgroundColor = `${color.darkness[0]}`;

  const { votes, getVotes } = useVote();
  const [voteList, setVoteList] = useState<IVotePayload[]>();
  const [menuClicked, setmenuClicked] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const onGoingVotes = votes.filter((vote) => vote.state === 'ongoing');
  const finishedVotes = votes.filter((vote) => vote.state === 'finished');
  const currentList = menuClicked ? onGoingVotes : finishedVotes;

  // const { observingList, isLoaded, setOriginalList } = useInfiniteScroll({
  //   originalList: voteList ? voteList : [],
  // });

  useEffect(() => {
    getVotes();
  }, []);

  useEffect(() => {
    setVoteList(onGoingVotes);
  }, [votes]);

  // useEffect(() => {
  //   setOriginalList(voteList ? voteList : []);
  // }, [voteList]);

  const handleSetCurrentList = (currentList: IVotePayload[]) => {
    setVoteList(currentList);
    if (inputValue)
      if (inputValue)
        setVoteList(
          currentList.filter((votes) => {
            return (
              matchName(votes.coin.code, inputValue) ||
              matchName(votes.coin.krname, inputValue)
            );
          }),
        );
  };

  const menuBtnClick = (e: any) => {
    if (e.target.innerText.substr(0, 2) === '진행') {
      handleSetCurrentList(onGoingVotes);
      setmenuClicked(true);
    } else {
      handleSetCurrentList(finishedVotes);
      setmenuClicked(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const voteSearchResult = currentList.filter((votes) => {
      return (
        matchName(votes.coin.code, e.target.value) ||
        matchName(votes.coin.krname, e.target.value)
      );
    });
    if (e.target.value === '') setVoteList(currentList);
    else setVoteList(voteSearchResult);
    e.target.style.color = `${color.darkness[7]}`;
    setInputValue(e.target.value);
  };

  const matchName = (name: string, keyword: string) => {
    var keyLen = keyword.length;
    name = name.substring(0, keyLen);
    return name === keyword.toUpperCase() && keyLen !== 0;
  };

  return (
    <div>
      <Header className="header">
        <InputWrapper>
          <Icon iconType={IconType.Magnifier} style={{ marginRight: 16 }} />
          <Input
            placeholder="코인명, 티커 검색"
            style={{ color: `${color.darkness[5]}` }}
            onChange={handleInputChange}
            value={inputValue}
          />
        </InputWrapper>
        <MenuWrapper>
          <MenuText onClick={menuBtnClick} menuClicked={menuClicked}>
            진행중인 투표
          </MenuText>
          <MenuText onClick={menuBtnClick} menuClicked={!menuClicked}>
            마감된 투표
          </MenuText>
          {/*TODO: select button*/}
        </MenuWrapper>
      </Header>
      <VoteWrapper>
        {/* {observingList && */}
        {voteList?.map((vote) => (
          <VoteCard key={vote.vote_id} vote={vote} />
        ))}
      </VoteWrapper>
      {/* {observingList && voteList && observingList.length < voteList.length && (
        <ObserverTarget id="observer-target">
          {!isLoaded && <Loading />}
        </ObserverTarget>
      )} */}
      <MenuBar />
    </div>
  );
};

const HEADER_HEIGHT = 107;

const Header = styled(Column)`
  position: fixed;

  height: ${HEADER_HEIGHT}px;
  width: 100%;

  background-color: white;
`;

const InputWrapper = styled(Row)`
  align-items: center;
  padding: 16px 24px;

  border-bottom: 1px solid #eaeaea;
`;

const Input = styled.input`
  all: unset;
`;

const MenuWrapper = styled(Row)`
  margin: 16px 24px 0 24px;
`;

const MenuText = styled.span<{ menuClicked: boolean }>`
  color: ${(props) =>
    props.menuClicked ? color.darkness[7] : color.darkness[4]};
  font-size: ${font.headline[3]}px;
  font-weight: 500;

  border-bottom: ${(props) =>
    props.menuClicked ? `2px solid ${color.darkness[7]}` : 0};

  padding-bottom: 8px;
  &:nth-child(1) {
    margin-right: 11px;
  }
`;

const VoteWrapper = styled(Column)`
  z-index: -1;
  position: relative;
  top: ${HEADER_HEIGHT}px;
  align-items: center;

  width: 375px;
  min-height: 812px;
  padding-bottom: 100px;

  background-color: ${color.darkness[2]};
`;

export default Votes;
