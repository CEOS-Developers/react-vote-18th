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

export type PartCandidateType = {
  candidateId: number;
  name: string;
  team: string;
};
export type PartCandidateArrayType = PartCandidateType[];

export type DemoCandidateType = {
  candidateId: number;
  team: string;
};
export type DemoCandidateArrayType = DemoCandidateType[];

export interface PartVoteProps {
  status: VotePageStatus;
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  candidate: PartCandidateArrayType;
}
export interface DemoVoteProps {
  status: VotePageStatus;
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}
