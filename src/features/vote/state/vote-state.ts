import { SELECT_TYPE } from "../constants/select-vote-type";

export interface VoteSelectionProps {
  type: SELECT_TYPE;
  mainText: string;
  subText?: string;
}

export interface VoteResultProps {
  type: SELECT_TYPE.PartLeader | SELECT_TYPE.Demoday;
  mainText: string;
  subText: string;
  rank: number;
  voteNum: number;
}
