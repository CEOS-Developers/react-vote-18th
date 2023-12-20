import { ChangeEvent, useState } from "react";
import styled from "styled-components";

export interface FormInputProps {
  placeholder: string;
  errorMsg?: string;
  onChange?: (text: string) => void;
  addClass?: string;
}

export default function FormInput({
  placeholder,
  errorMsg,
  onChange,
  addClass,
}: FormInputProps) {
  const [text, setText] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange && onChange(newText);
  };
  return (
    <FormInputLayout $addClass={addClass}>
      <FormInputHolder
        placeholder={placeholder}
        value={text}
        $errorMsg={errorMsg}
        onChange={handleInputChange}
      />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </FormInputLayout>
  );
}

const FormInputLayout = styled.div<{ $addClass: string | undefined }>`
  ${(props) => props.$addClass};
`;

const FormInputHolder = styled.input<{ $errorMsg: string | undefined }>`
  width: 100%;
  height: 7rem;
  padding: 1rem 2rem;
  border: 2px solid ${(props) => props.theme.colors.mainColor};
  border-bottom: ${(props) =>
    props.$errorMsg ? `2px solid ${props.theme.colors.error}` : null};
  border-radius: 2rem;
  ${(props) => props.theme.fontStyles.body1};
`;

const ErrorMsg = styled.div`
  margin: 0.5rem 0 0 1rem;
  ${(props) => props.theme.fontStyles.body0};
`;
