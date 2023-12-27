import { DemoCandidateArrayType, PartCandidateArrayType } from './type';
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
// part의 candidateId를 통해 이름으로 변환
export const changePartCandIdToName = (
  id: number,
  candidates: PartCandidateArrayType,
) => {
  const result = candidates.find((candidate) => candidate.candidateId === id);
  if (result) {
    return result.name;
  } else {
    return undefined;
  }
};
// demo의 candidateId를 통해 팀 이름으로 변환
export const changeDemoCandIdToName = (
  id: number,
  candidates: DemoCandidateArrayType,
) => {
  const result = candidates.find((candidate) => candidate.candidateId === id);
  if (result) {
    return changeValueToTeam(result.team);
  } else {
    return undefined;
  }
};
