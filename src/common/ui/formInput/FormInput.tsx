import styled from "styled-components";

export interface FormInputProps {
  placeholder: string;
  disabled?: boolean;
  errorMsg?: string;
}

export default function FormInput({
  placeholder,
  disabled = false,
  errorMsg,
}: FormInputProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <FormInputLayout placeholder={placeholder} $disabled={disabled} />
      {disabled && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
}

const FormInputLayout = styled.input<{ $disabled: boolean }>`
  width: 65.4rem;
  height: 7rem;
  padding: 1rem 2rem;
  border: 1px solid ${(props) => props.theme.colors.mainColor};
  border-bottom: ${(props) =>
    props.$disabled ? `3px solid ${props.theme.colors.error}` : null};
  border-radius: 2rem;
  ${(props) => props.theme.fontStyles.body1};
`;

const ErrorMsg = styled.div`
  position: absolute;
  bottom: -2.3rem;
  left: 1rem;
  ${(props) => props.theme.fontStyles.sub0}
`;
