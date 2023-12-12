import { ButtonProps } from "@/common/state/button-state";
import { styled } from "styled-components";

export default function AuthButton({
  width,
  height,
  bgColor,
  children,
  onClick,
  addClass,
}: Partial<ButtonProps> & { width: string; bgColor: string }) {
  return (
    <HeaderButtonContainer
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $addClass={addClass}
      onClick={onClick}
    >
      {children}
    </HeaderButtonContainer>
  );
}

const HeaderButtonContainer = styled.div<{
  $width: string;
  $height: string | undefined;
  $bgColor: string;
  $addClass: string | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  height: ${(props) => (props.$height ? props.$height : "4.4rem")};
  background-color: ${(props) => props.$bgColor};
  border-radius: 2rem;
  border: ${(props) =>
    props.$bgColor === props.theme.colors.white
      ? `1px solid ${props.theme.colors.mainColor}`
      : null};
  color: ${(props) =>
    props.$bgColor === props.theme.colors.mainColor
      ? props.theme.colors.white
      : null};
  cursor: pointer;
  ${(props) => props.theme.fontStyles.body0};
  font-weight: 400;
  ${(props) => props.$addClass}
`;
