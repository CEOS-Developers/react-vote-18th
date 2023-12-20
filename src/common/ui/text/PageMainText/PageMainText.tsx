import { styled } from "styled-components";

interface PageMainTextProps {
  text: string;
  addClass?: string;
}

export default function PageMainText({ text, addClass }: PageMainTextProps) {
  return <MainTextContainer $addClass={addClass}>{text}</MainTextContainer>;
}

const MainTextContainer = styled.div<{ $addClass: string | undefined }>`
  margin-bottom: 8.2rem;
  ${(props) => props.theme.fontStyles.headLine0};
  ${(props) => props.$addClass}
`;
