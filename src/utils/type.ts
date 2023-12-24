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
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}
export interface DemoVoteProps {
  status: VotePageStatus;
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}
