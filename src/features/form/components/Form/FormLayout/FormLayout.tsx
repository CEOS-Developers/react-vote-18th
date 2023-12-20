import { FORM_TYPE } from "@/features/form/constant/form-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import FormInput from "../FormInput/FormInput";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import theme from "@/styles/theme";
import useForm from "@/features/form/useForm";
import { FormState } from "@/features/form/states/form-data-state";

interface FormProps {
  type: FORM_TYPE;
  onSubmit: (e: FormState) => void;
}

export default function FormLayout({ type, onSubmit }: FormProps) {
  const { isMobile } = MediaQuery();
  const { handlers } = useForm({ type, onSubmit });
  return (
    <FormContainer $isMobile={isMobile} onSubmit={handlers.submit}>
      {type === FORM_TYPE.REGISTER && (
        <FormInput
          placeholder="이름"
          onChange={handlers.nameChange}
          addClass="margin-bottom:3.5rem"
        />
      )}
      <FormInput
        placeholder="아이디"
        onChange={handlers.idChange}
        addClass="margin-bottom:3.5rem"
      />
      <FormInput
        placeholder="비밀번호"
        onChange={handlers.passwordChange}
        addClass="margin-bottom:3.5rem"
      />
      {type === FORM_TYPE.REGISTER && (
        <FormInput
          placeholder="비밀번호 확인"
          onChange={handlers.checkPasswordChange}
        />
      )}
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
