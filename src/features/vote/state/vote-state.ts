import { SELECT_TYPE } from "../constants/select-vote-type";

export interface VoteSelectionProps {
  type: SELECT_TYPE;
  mainText: string;
  subText?: string;
}

export interface VoteResultProps {
  mainText: string;
  subText: string;
  rank: number;
  voteNum: number;
}
