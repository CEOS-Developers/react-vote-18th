import { axiosInstance } from "@/common/libs/axios";
import { VoteResponse } from "./dto/vote-response";

export default async function useGetResults(url: string) {
  try {
    const response = await axiosInstance.get<VoteResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
