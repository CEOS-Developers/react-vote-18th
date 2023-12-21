import { FormEvent, useState } from "react";
import { FORM_TYPE } from "./constant/form-type";
import { FormState } from "./states/form-data-state";
import { validateForm } from "@/common/utils/validateForm";

const FIELD = ["name", "id", "password", "check_password"];

export default function useForm({
  type,
  onSubmit,
}: {
  type: FORM_TYPE;
  onSubmit: (e: FormState) => void;
}) {
  const [loginFormData, setLoginFormData] = useState<FormState>({
    id: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState<FormState>({
    name: "",
    id: "",
    password: "",
    check_password: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage] = validateForm(
    type === FORM_TYPE.LOGIN ? loginFormData : registerFormData
  );

  const handleNameChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, name: text });
  };

  const handleIdChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, id: text });
    } else {
      setRegisterFormData({ ...registerFormData, id: text });
    }
  };

  const handlePasswordChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, password: text });
    } else {
      setRegisterFormData({ ...registerFormData, password: text });
    }
  };

  const handleCheckPasswordChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, check_password: text });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(true);
    if (!hasAnyError()) {
      onSubmit(type === FORM_TYPE.LOGIN ? loginFormData : registerFormData);
    } else {
      for (const field of FIELD) {
        if (errorMessage[field]) {
          alert(errorMessage[field]);
          break;
        }
      }
    }
  };

  const hasAnyError = () => {
    let hasError = false;
    Object.values(errorMessage).forEach((value) => {
      if (value) {
        hasError = true;
      }
    });
    return hasError;
  };

  return {
    formData: type === FORM_TYPE.LOGIN ? loginFormData : registerFormData,
    showError,
    errorMessage,
    handlers: {
      nameChange: handleNameChange,
      idChange: handleIdChange,
      passwordChange: handlePasswordChange,
      checkPasswordChange: handleCheckPasswordChange,
      submit: handleSubmit,
    },
  };
}
