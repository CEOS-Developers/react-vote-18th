export type InputStatus = 'active' | 'default' | 'inactive' | 'error';
export type VotePageStatus = 'default' | 'vote' | 'result';
export type GreenBorderType = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};
export type GreenBorderArrayType = GreenBorderType[];

export type MemberType = {
  name: string;
  team: string;
};
export type MemberArrayType = MemberType[];

export interface PartVoteProps {
  status: VotePageStatus;
}
