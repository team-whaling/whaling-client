export const MyVoteListType: {
  Created: TMyVoteList;
  Participated: TMyVoteList;
} = {
  Created: 'Created',
  Participated: 'Participated',
};

export type TMyVoteList = keyof typeof MyVoteListType;

export interface IMyPageCard extends React.HTMLAttributes<HTMLElement> {
  type: TMyVoteList;
}
