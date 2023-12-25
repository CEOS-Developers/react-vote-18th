export interface VoteTeamResponse {
  code: number;
  code_desc: string;
  data: VoteTeamDataItem[];
}

export interface VoteTeamDataItem {
  id: number;
  name: string;
  description: string;
  voteCnt: number;
}
