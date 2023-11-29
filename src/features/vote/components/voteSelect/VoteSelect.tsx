import styled from "styled-components";
import { VoteSelectionProps } from "../../state/vote-state";
import { SELECT_TYPE } from "../../constants/select-vote-type";

export default function VoteSelect({
  type,
  mainText,
  subText,
}: VoteSelectionProps) {
  return (
    <VoteSelectWrapper $type={type}>
      {type === SELECT_TYPE.PartLeader && <VoteSubText>{subText}</VoteSubText>}
      <VoteMainText $type={type}>{mainText}</VoteMainText>
      {type === SELECT_TYPE.Demoday && <VoteSubText>{subText}</VoteSubText>}
    </VoteSelectWrapper>
  );
}

const VoteSelectWrapper = styled.div<{ $type: SELECT_TYPE }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 2rem;
  padding: ${(props) =>
    props.$type === SELECT_TYPE.Category
      ? "12.2rem 5rem"
      : props.$type === SELECT_TYPE.PartLeader
      ? "2rem 3rem"
      : "1.1rem 4.9rem"};
  width: ${(props) =>
    props.$type === SELECT_TYPE.Category
      ? "39.4rem"
      : props.$type === SELECT_TYPE.PartLeader
      ? "21.6rem"
      : "38rem"};
  height: ${(props) =>
    props.$type === SELECT_TYPE.Category
      ? "40.6rem"
      : props.$type === SELECT_TYPE.PartLeader
      ? "11.7rem"
      : "14.5rem"};
`;

const VoteMainText = styled.span<{ $type: SELECT_TYPE }>`
  text-align: center;
  ${(props) =>
    props.$type === SELECT_TYPE.PartLeader
      ? props.theme.fontStyles.headLine1
      : props.theme.fontStyles.headLine0};
`;

const VoteSubText = styled.span`
  ${(props) => props.theme.fontStyles.body0};
`;
