import { styled } from "styled-components";

interface PageMainTextProps {
  text: string;
}

export default function PageMainText({ text }: PageMainTextProps) {
  return <MainTextContainer>{text}</MainTextContainer>;
}

const MainTextContainer = styled.div`
  margin-bottom: 8.2rem;
  ${(props) => props.theme.fontStyles.headLine0}
`;
