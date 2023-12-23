export type OptionType = {
  value: number;
  label: string;
};

export const TEAM_OPTIONS: OptionType[] = [
  { value: 0, label: "LocalMood" },
  { value: 1, label: "Reddigg" },
  { value: 2, label: "셰어마인드" },
  { value: 3, label: "Gotcha" },
  { value: 4, label: "Sniff" },
];

export const PART_OPTIONS: OptionType[] = [
  { value: 0, label: "FRONTEND" },
  { value: 1, label: "BACKEND" },
];
