import { FORM_TYPE } from "@/features/form/constant/form-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import FormInput from "../FormInput/FormInput";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import theme from "@/styles/theme";

interface FormProps {
  type: FORM_TYPE;
}

export default function FormLayout({ type }: FormProps) {
  const { isMobile } = MediaQuery();
  return (
    <FormContainer $isMobile={isMobile}>
      {type === FORM_TYPE.REGISTER && (
        <FormInput placeholder="이름" addClass="margin-bottom:3.5rem" />
      )}
      <FormInput placeholder="아이디" addClass="margin-bottom:3.5rem" />
      <FormInput placeholder="비밀번호" addClass="margin-bottom:3.5rem" />
      {type === FORM_TYPE.REGISTER && <FormInput placeholder="비밀번호 확인" />}
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
    </FormContainer>
  );
}

const FormContainer = styled.form<{ $isMobile: boolean }>`
  border: ${(props) =>
    props.$isMobile ? null : `2px solid ${props.theme.colors.mainColor}`};
  border-radius: 2rem;
  padding: ${(props) => (props.$isMobile ? null : "5.2rem 6rem")};
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;
