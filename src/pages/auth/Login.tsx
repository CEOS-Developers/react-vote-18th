import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { FORM_TYPE } from "@/features/form/constant/form-type";

export default function Login() {
  const { isMobile } = MediaQuery();
  return (
    <LoginContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="로그인" addClass="margin-bottom:1rem;" />
        <FormLayout type={FORM_TYPE.LOGIN} />
      </RegisterDetail>
    </LoginContainer>
  );
}

const LoginContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$isMobile ? null : "center")};
  padding: 15rem 0;
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;

const RegisterDetail = styled.div`
  width: 85%;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;
