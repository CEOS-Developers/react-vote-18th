import { ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  width: string;
  height: string;
  bgColor: string;
  children: ReactNode;
  addClass?: string;
}

export default function Button({
  width,
  height,
  bgColor,
  children,
  addClass,
}: ButtonProps) {
  return (
    <ButtonWrapper
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $addClass={addClass}
    >
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<{
  $width: string;
  $height: string;
  $bgColor: string;
  $addClass: string | undefined;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  ${(props) => props.$addClass}
`;
