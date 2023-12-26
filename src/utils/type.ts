export type InputStatus = 'active' | 'default' | 'inactive' | 'error';
export type VotePageStatus = 'default' | 'vote' | 'result';
export type GreenBorderType = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};
export type GreenBorderArrayType = GreenBorderType[];

// 파트장 후보 type
export type PartCandidateType = {
  candidateId: number;
  name: string;
  team: string;
};

export type PartCandidateArrayType = PartCandidateType[];
// 데모데이 후보 type
export type DemoCandidateType = {
  candidateId: number;
  team: string;
};

export type DemoCandidateArrayType = DemoCandidateType[];

export type MemberType = {
  name: string;
  team: string;
};

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
  candidate: DemoCandidateArrayType;
}
