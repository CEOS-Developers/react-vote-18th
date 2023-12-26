export interface VoteResponse {
  code: number;
  code_desc: string;
  data: VoteTeamDataItem[] | VoteMemberDataItem;
}

export interface VoteTeamDataItem {
  id: number;
  name: string;
  description: string;
  voteCnt: number;
}

export interface VoteMemberDataItem {
  id: number;
  name: string;
  teamName: string;
  voteCnt: number;
  isCandidate: boolean;
}
