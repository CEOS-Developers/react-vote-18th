import MediaQuery from "@/styles/mediaQuery";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface FormProps {
  children?: ReactNode;
}

export default function FormLayout({ children }: FormProps) {
  const { isMobile } = MediaQuery();
  return <FormContainer $isMobile={isMobile}>{children}</FormContainer>;
}

const FormContainer = styled.form<{ $isMobile: boolean }>`
  border: ${(props) =>
    props.$isMobile ? null : `2px solid ${props.theme.colors.mainColor}`};
  border-radius: 2rem;
  padding: ${(props) => (props.$isMobile ? null : "5.2rem 6rem")};
`;
