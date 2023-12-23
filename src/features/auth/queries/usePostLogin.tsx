import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/common/libs/axios";
import { LoginRequest } from "./dto/login";

async function postLogin(data: LoginRequest) {
  const res = await axiosInstance.post("/app/auth/login", data);
  return res.data;
}

export function usePostLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
  });
}
