import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/common/libs/axios";
import { AuthLoginRequest, AuthLoginResponse } from "./dto/auth-login";

async function postLogin(data: AuthLoginRequest) {
  const res = await axiosInstance.post<AuthLoginResponse>(
    "/app/auth/login",
    data
  );
  console.log(data);
  return res.data.data.accessToken;
}

export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
  });
}
