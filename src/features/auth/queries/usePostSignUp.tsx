import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/common/libs/axios";
import { AuthRegisterRequest } from "./dto/auth-register";

async function postSignUp(data: AuthRegisterRequest) {
  const res = await axiosInstance.post("/app/auth/signup", data);
  return res.data;
}

export function usePostSignUp() {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: postSignUp,
  });
}
