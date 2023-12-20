import { FormState } from "@/features/form/states/form-data-state";

export function validateForm(formData: FormState): [Record<string, string>] {
  const errorMessage: Record<string, string> = {};
  const { id, password, name, check_password } = formData;

  if (!id.trim()) {
    errorMessage.id = "아이디를 입력해주세요.";
  }

  if (!password.trim()) {
    errorMessage.password = "비밀번호를 입력해주세요.";
  }

  if (name && !name.trim()) {
    errorMessage.name = "이름을 입력해주세요.";
  }

  if (check_password && !check_password.trim()) {
    errorMessage.password = "비밀번호를 다시 입력해주세요.";
  }

  return [errorMessage];
}
