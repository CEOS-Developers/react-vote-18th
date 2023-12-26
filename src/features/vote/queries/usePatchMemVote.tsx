import { axiosInstance } from "@/common/libs/axios";

export default async function usePatchMemVote(memberId: number) {
  try {
    const response = await axiosInstance.patch(`/app/member/${memberId}/vote`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
