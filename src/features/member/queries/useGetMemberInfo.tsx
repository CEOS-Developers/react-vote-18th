import { axiosInstance } from "@/common/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { getMemberInfoResponse } from "./dto/get-member-info";
import { AxiosError } from "axios";

async function getComments() {
  try {
    const res = await axiosInstance.get<getMemberInfoResponse>(
      "/app/member/info"
    );
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.status === 401) {
      return null;
    } else {
      throw e;
    }
  }
}

export function useGetMemberInfo() {
  const { data, ...queryInfo } = useQuery({
    queryKey: ["getMemberInfo"],
    queryFn: getComments,
  });

  if (!data) {
    return {
      user: null,
      ...queryInfo,
    };
  }

  return {
    user: data,
    ...queryInfo,
  };
}
