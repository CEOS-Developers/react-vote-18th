import MediaQuery from "@/styles/mediaQuery";
import styled from "styled-components";

interface DropDownProps {
  options: { value: number; label: string }[];
  value?: string;
  onSelect?: (value: number) => void;
}

export default function DropDown({ options, value, onSelect }: DropDownProps) {
  const { isMobile } = MediaQuery();
  return (
    <DropDownLayout $isMobile={isMobile}>
      {options.map((option) => (
        <DropDownList
          key={option.value}
          $highlight={value === option.label}
          onClick={() => onSelect && onSelect(option.value)}
        >
          {option.label}
        </DropDownList>
      ))}
    </DropDownLayout>
  );
}

const DropDownLayout = styled.ul<{ $isMobile: boolean }>`
  position: absolute;
  z-index: 1;
  top: 7.85rem;
  background-color: white;
  border: 1px solid black;
  width: ${(props) => (props.$isMobile ? "100%" : "32rem")};
`;

const DropDownList = styled.li<{ $highlight: boolean }>`
  color: ${(props) => (props.$highlight ? props.theme.colors.error : null)};
  padding: 12px 8px;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.sub0}
`;
