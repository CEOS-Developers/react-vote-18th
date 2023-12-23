import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { FORM_TYPE } from "@/features/form/constant/form-type";
import { usePostLogin } from "@/features/auth/queries/usePostLogin";
import { LoginFormState } from "@/features/form/states/form-data-state";

export default function Login() {
  const { mutate: postLogin } = usePostLogin();
  const { isMobile } = MediaQuery();
  const loginFormSubmit = (e: LoginFormState) => {
    postLogin(e);
  };
  return (
    <LoginContainer $isMobile={isMobile}>
      <LoginDetail>
        <PageMainText text="로그인" addClass="margin-bottom:1rem;" />
        <FormLayout type={FORM_TYPE.LOGIN} onSubmit={loginFormSubmit} />
      </LoginDetail>
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

const LoginDetail = styled.div`
  width: 85%;
`;
