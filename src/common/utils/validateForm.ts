import { FormState } from "@/features/form/states/form-data-state";

export function validateForm(formData: FormState): [Record<string, string>] {
  const errorMessage: Record<string, string> = {};
  const { username, userid, email, password, team, devPart } = formData;

  if ("username" in formData && !username?.trim()) {
    errorMessage.username = "유저이름을 입력해주세요.";
  }

  if ("userid" in formData && !userid?.trim()) {
    errorMessage.userid = "유저아이디를 입력해주세요.";
  }
  if (!email.trim()) {
    errorMessage.email = "이메일을 입력해주세요.";
  }

  if (!password.trim()) {
    errorMessage.password = "비밀번호를 입력해주세요.";
  }

  return [errorMessage];
}
