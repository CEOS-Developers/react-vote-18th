import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/common/libs/axios";
import { AuthLoginRequest } from "./dto/auth-login";

async function postLogin(data: AuthLoginRequest) {
  const res = await axiosInstance.post("/app/auth/login", data);
  return res.data;
}

export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
  });
}
