import FormLayout from "@/features/form/components/Form/FormLayout/FormLayout";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import FormInput from "@/features/form/components/Form/FormInput/FormInput";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import MediaQuery from "@/styles/mediaQuery";
import theme from "@/styles/theme";
import { styled } from "styled-components";
import useForm from "@/features/form/useForm";
import { FORM_TYPE } from "@/features/form/constant/form-type";

export default function Register() {
  const { isMobile } = MediaQuery();
  const { handlers } = useForm({ type: FORM_TYPE.REGISTER });
  const RegisterInputInfo = [
    {
      placeholder: "이름",
      onChange: handlers.handleNameChange,
    },
    {
      placeholder: "아이디",
      onChange: handlers.handleIdChange,
    },
    {
      placeholder: "비밀번호",
      onChange: handlers.handlePasswordChange,
    },
    {
      placeholder: "비밀번호 확인",
      onChange: handlers.handleCheckPasswordChange,
    },
  ];
  return (
    <RegisterContainer $isMobile={isMobile}>
      <RegisterDetail>
        <PageMainText text="회원가입" addClass="margin-bottom:1rem;" />
        <FormLayout>
          {RegisterInputInfo.map((input, index) => (
            <FormInput
              key={input.placeholder}
              placeholder={input.placeholder}
              onChange={input.onChange}
              addClass={
                index === RegisterInputInfo.length - 1
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
              addClass="border-radius:1rem;"
            >
              가입하기
            </AuthButton>
          </FormButtonContainer>
        </FormLayout>
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

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;
