import { FormEvent, useState } from "react";
import { FORM_TYPE } from "./constant/form-type";
import { LoginFormState, RegisterFormState } from "./states/form-data-state";

export default function useForm({ type }: { type: FORM_TYPE }) {
  const [loginFormData, setLoginFormData] = useState<LoginFormState>({
    id: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState<RegisterFormState>({
    name: "",
    id: "",
    password: "",
    check_password: "",
  });

  const handleNameChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, name: text });
  };

  const handleIdChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, id: text });
    } else if (type === FORM_TYPE.REGISTER) {
      setRegisterFormData({ ...registerFormData, id: text });
    } else return;
  };

  const handlePasswordChange = (text: string) => {
    if (type === FORM_TYPE.LOGIN) {
      setLoginFormData({ ...loginFormData, password: text });
    } else if (type === FORM_TYPE.REGISTER) {
      setRegisterFormData({ ...registerFormData, password: text });
    } else return;
  };

  const handleCheckPasswordChange = (text: string) => {
    setRegisterFormData({ ...registerFormData, check_password: text });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    formData:
      type === FORM_TYPE.LOGIN
        ? loginFormData
        : type === FORM_TYPE.REGISTER
        ? registerFormData
        : null,
    handlers: {
      nameChange: handleNameChange,
      idChange: handleIdChange,
      passwordChange: handlePasswordChange,
      checkPasswordChange: handleCheckPasswordChange,
      submit: handleSubmit,
    },
  };
}
