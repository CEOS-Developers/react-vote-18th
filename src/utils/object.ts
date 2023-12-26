import { Team } from './constant';
//Team valueg  UI를 위한 string으로 변경(ex. LOCAL_MOOD=>로컬무드)
const teamNames: Record<string, string> = {
  SHARE_MIND: '셰어마인드',
  LOCAL_MOOD: '로컬무드',
  REDI: '레디',
  SNIFF: '스니프',
  GOTCHA: 'GOTCHA',
};
export const changeValueToTeam = (value: string) => {
  return teamNames[value];
};
