import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/common/libs/axios";
import { SignUpRequest } from "./dto/sign-up";

async function postSignUp(data: SignUpRequest) {
  const res = await axiosInstance.post("/app/auth/signup", data);
  return res.data;
}

export function usePostSignUp() {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: postSignUp,
  });
}
