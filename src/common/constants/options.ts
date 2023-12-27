export type OptionType = {
  value: number;
  label: string;
};

export const TEAM_OPTIONS: OptionType[] = [
  { value: 1, label: "LocalMood" },
  { value: 2, label: "Reddigg" },
  { value: 3, label: "셰어마인드" },
  { value: 4, label: "Gotcha" },
  { value: 5, label: "Sniff" },
];

export const PART_OPTIONS: OptionType[] = [
  { value: 1, label: "FRONTEND" },
  { value: 2, label: "BACKEND" },
];
