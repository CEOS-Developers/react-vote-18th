export interface getMemberInfoResponse {
  code: number;
  code_desc: string;
  data: {
    id: number;
    name: string;
    teamName: string;
    voteCnt: number;
  };
}
