import { FORM_TYPE } from "@/features/form/constant/form-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import FormInput from "../FormInput/FormInput";
import AuthButton from "@/common/ui/buttons/AuthButton/AuthButton";
import theme from "@/styles/theme";
import useForm from "@/features/form/useForm";
import { FormState } from "@/features/form/states/form-data-state";
import { Select } from "@/common/ui/selections/Select/Select";
import { PART_OPTIONS, TEAM_OPTIONS } from "@/common/constants/options";

interface FormProps {
  type: FORM_TYPE;
  onSubmit: (e: FormState) => void;
}

export default function FormLayout({ type, onSubmit }: FormProps) {
  const { isMobile } = MediaQuery();
  const { formData, showError, errorMessage, handlers } = useForm({
    type,
    onSubmit,
  });
  const getErrorMessage = (field: string) => {
    return showError ? errorMessage[field] : "";
  };
  return (
    <FormContainer $isMobile={isMobile} onSubmit={handlers.submit}>
      {type === FORM_TYPE.REGISTER && (
        <>
          <FormInput
            placeholder="유저이름"
            errorMsg={getErrorMessage("username")}
            onChange={handlers.userNameChange}
            addClass="margin-bottom:3.5rem"
          />
          <FormInput
            placeholder="아이디"
            errorMsg={getErrorMessage("userid")}
            onChange={handlers.userIdChange}
            addClass="margin-bottom:3.5rem"
          />
        </>
      )}
      <FormInput
        placeholder="이메일"
        errorMsg={getErrorMessage("email")}
        onChange={handlers.emailChange}
        addClass="margin-bottom:3.5rem"
      />
      <FormInput
        placeholder="비밀번호"
        errorMsg={getErrorMessage("password")}
        onChange={handlers.passwordChange}
        addClass="margin-bottom:3.5rem"
      />
      {type === FORM_TYPE.REGISTER && (
        <SelectContainer $isMobile={isMobile}>
          <Select
            options={TEAM_OPTIONS}
            placeholder="선택"
            label="팀 선택"
            value={TEAM_OPTIONS.find((o) => o.value === formData.team)?.label}
            onChange={handlers.teamChange}
            addClass={isMobile ? "margin-bottom:5rem;" : undefined}
          />
          <Select
            options={PART_OPTIONS}
            placeholder="선택"
            label="파트 선택"
            value={
              PART_OPTIONS.find((o) => o.value === formData.devPart)?.label
            }
            onChange={handlers.devPartChange}
          />
        </SelectContainer>
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

const SelectContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : null)};
  justify-content: space-between;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;
