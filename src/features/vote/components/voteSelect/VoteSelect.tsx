import styled from "styled-components";
import { SELECT_TYPE } from "../../constants/select-vote-type";

interface VoteSelectionProps {
  type: SELECT_TYPE;
  mainText: string;
  subText?: string;
  onClick?: () => void;
  addClass?: string;
}

export default function VoteSelect({
  type,
  mainText,
  subText,
  onClick,
  addClass,
}: VoteSelectionProps) {
  return (
    <VoteSelectWrapper $type={type} $addClass={addClass} onClick={onClick}>
      {type === SELECT_TYPE.PartLeader && <VoteSubText>{subText}</VoteSubText>}
      <VoteMainText $type={type}>{mainText}</VoteMainText>
      {type === SELECT_TYPE.Demoday && <VoteSubText>{subText}</VoteSubText>}
    </VoteSelectWrapper>
  );
}

const VoteSelectWrapper = styled.div<{
  $type: SELECT_TYPE;
  $addClass: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 2rem;
  padding: ${(props) =>
    props.$type === SELECT_TYPE.Category
      ? "12.2rem 6.1rem"
      : props.$type === SELECT_TYPE.PartLeader
      ? "4rem 3rem 3rem 3rem"
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
  ${(props) => props.$addClass}
  &:hover {
    background-color: ${(props) => props.theme.colors.mainColor};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
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
