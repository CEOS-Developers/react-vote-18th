import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { FORM_TYPE } from "@/features/form/constant/form-type";

export default function Register() {
  const { isMobile } = MediaQuery();
  return (
    <RegisterContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="회원가입" addClass="margin-bottom:1rem;" />
        <FormLayout type={FORM_TYPE.REGISTER} />
      </RegisterDetail>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$isMobile ? null : "center")};
  padding-top: ${(props) => (props.$isMobile ? "17rem" : "5rem")};
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;

const RegisterDetail = styled.div`
  width: 85%;
`;
