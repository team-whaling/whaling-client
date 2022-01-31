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
  const [menuClicked, setmenuClicked] = useState(true);

  useEffect(() => {
    getVotes();
  }, []);

  useEffect(() => {
    setVoteList(votes.filter((vote) => vote.state === 'ongoing'));
  }, [votes]);

  const menuBtnClick = (e: any) => {
    if (e.target.innerText.substr(0, 2) === '진행')
      setVoteList(votes.filter((vote) => vote.state === 'ongoing'));
    else setVoteList(votes.filter((vote) => vote.state === 'finished'));
    setmenuClicked(!menuClicked);
  };

  const [searchResult, setSearchResult] = useState<IVotePayload[] | undefined>(
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const voteSearchResult = voteList?.filter((votes) => {
      return (
        matchName(votes.coin.code, e.target.value) ||
        matchName(votes.coin.krname, e.target.value)
      );
    });
    setSearchResult(voteSearchResult);
  };

  const matchName = (name: string, keyword: string) => {
    var keyLen = keyword.length;
    name = name.substring(0, keyLen);
    return name === keyword.toUpperCase() && keyLen !== 0;
  };

  return (
    <div>
      <InputWrapper>
        <Icon iconType={IconType.Magnifier} style={{ marginRight: 16 }} />
        <Input
          placeholder="코인명, 티커 검색"
          style={{ color: `${color.darkness[5]}` }}
          onChange={handleInputChange}
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
        <button />
      </MenuWrapper>
      <VoteWrapper>
        {searchResult?.map((vote) => (
          <VoteCard key={vote.vote_id} vote={vote} />
        ))}
        {searchResult?.length === 0 &&
          voteList?.map((vote) => <VoteCard key={vote.vote_id} vote={vote} />)}
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

const MenuText = styled.span<{ menuClicked: boolean }>`
  color: ${(props) =>
    props.menuClicked ? color.darkness[7] : color.darkness[4]};
  font-size: ${font.headline[3]}px;
  font-weight: 500;

  border-bottom: ${(props) =>
    props.menuClicked ? `1px solid ${color.darkness[7]}` : 0};

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
