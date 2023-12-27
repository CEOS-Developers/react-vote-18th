import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import DownIcon from "@/common/icons/DownIcon";
import MediaQuery from "@/styles/mediaQuery";
import DropDown from "../../dropdown/DropDown";

interface SelectProps {
  options: { value: number; label: string }[];
  placeholder: string;
  label: string;
  value?: string;
  errorMsg?: string;
  onChange?: (select: number) => void;
  addClass?: string;
}

export function Select({
  options,
  placeholder,
  label,
  value,
  errorMsg,
  onChange,
  addClass,
}: SelectProps) {
  const { isMobile } = MediaQuery();
  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleSelect = (value: number) => {
    setMenuOpen(false);
    onChange && onChange(value);
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <SelectWrapper ref={ref} $isMobile={isMobile} $addClass={addClass}>
      <SelectLabel>{label}</SelectLabel>
      <SelectClickArea onClick={handleMenuToggle}>
        <SelectValueText>{value || placeholder}</SelectValueText>
        <DownIcon />
      </SelectClickArea>
      {menuOpen && (
        <DropDown options={options} value={value} onSelect={handleSelect} />
      )}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div<{
  $isMobile: boolean;
  $addClass: string | undefined;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$isMobile ? "100%" : "32rem")};
  ${(props) => props.$addClass}
`;

const SelectLabel = styled.span`
  margin-bottom: 0.8rem;
  ${(props) => props.theme.fontStyles.headLine2}
`;

const SelectClickArea = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  cursor: pointer;
`;

const SelectValueText = styled.span`
  ${(props) => props.theme.fontStyles.body0}
`;
