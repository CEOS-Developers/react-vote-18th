import { FormEvent, useState } from "react";
import { FORM_TYPE } from "./constant/form-type";
import { validateForm } from "@/common/utils/validateForm";
import { LoginFormState, RegisterFormState } from "./states/form-data-state";

const FIELD = ["username", "userid", "email", "password", "team", "devPart"];

export default function useForm({
  type,
  onSubmit,
}: {
  type: FORM_TYPE;
  onSubmit: (e: LoginFormState | RegisterFormState) => void;
}) {
  const [loginFormData, setLoginFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState<RegisterFormState>({
    username: "",
    userid: "",
    email: "",
    password: "",
    team: -1,
    devPart: -1,
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage] = validateForm(
    type === FORM_TYPE.LOGIN ? loginFormData : registerFormData
  );

  const handleUserNameChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, username: text });
  };

  const handleUserIdChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, userid: text });
  };

  const handleEmailChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, email: text });
    } else {
      setRegisterFormData({ ...registerFormData, email: text });
    }
  };

  const handlePasswordChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, password: text });
    } else {
      setRegisterFormData({ ...registerFormData, password: text });
    }
  };

  const handleTeamChange = (select: number) => {
    setRegisterFormData({ ...registerFormData, team: select });
  };

  const handleDevPartChange = (select: number) => {
    setRegisterFormData({ ...registerFormData, devPart: select });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(true);
    if (!hasAnyError()) {
      type === FORM_TYPE.LOGIN
        ? onSubmit(loginFormData)
        : onSubmit(registerFormData);
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
      userNameChange: handleUserNameChange,
      userIdChange: handleUserIdChange,
      emailChange: handleEmailChange,
      passwordChange: handlePasswordChange,
      teamChange: handleTeamChange,
      devPartChange: handleDevPartChange,
      submit: handleSubmit,
    },
  };
}
