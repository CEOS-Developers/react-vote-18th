import Form from "@/common/layout/Form/Form";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import FormInput from "@/common/ui/formInput/FormInput";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import theme from "@/styles/theme";
import { styled } from "styled-components";

export default function Login() {
  const { isMobile } = MediaQuery();
  const inputInfo = [
    {
      placeholder: "이름",
    },
    {
      placeholder: "아이디",
    },
  ];
  return (
    <LoginContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="로그인" addClass="margin-bottom:1rem;" />
        <Form>
          {inputInfo.map((input, index) => (
            <FormInput
              key={input.placeholder}
              placeholder={input.placeholder}
              addClass={
                index === inputInfo.length - 1 ? "" : "margin-bottom:3.5rem;"
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
        </Form>
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
