import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import FormInput from "@/features/form/components/Form/FormInput/FormInput";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import theme from "@/styles/theme";
import { styled } from "styled-components";
import useForm from "@/features/form/useForm";
import { FORM_TYPE } from "@/features/form/constant/form-type";

export default function Login() {
  const { isMobile } = MediaQuery();
  const { handlers } = useForm({ type: FORM_TYPE.LOGIN });
  const LoginInputInfo = [
    {
      placeholder: "아이디",
      onChange: handlers.handleIdChange,
    },
    {
      placeholder: "비밀번호",
      onChange: handlers.handlePasswordChange,
    },
  ];
  return (
    <LoginContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="로그인" addClass="margin-bottom:1rem;" />
        <FormLayout>
          {LoginInputInfo.map((input, index) => (
            <FormInput
              key={input.placeholder}
              placeholder={input.placeholder}
              onChange={input.onChange}
              addClass={
                index === LoginInputInfo.length - 1
                  ? ""
                  : "margin-bottom:3.5rem;"
              }
            />
          ))}
          <FormButtonContainer>
            <AuthButton
              width="20.2rem"
              height="5.8rem"
              bgColor={theme.colors.mainColor}
              addClass="border-radius:1rem; "
            >
              로그인
            </AuthButton>
          </FormButtonContainer>
        </FormLayout>
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
