import { axiosInstance } from "@/common/libs/axios";
import { VoteTeamResponse } from "./dto/vote-team";

export default async function useGetTeam(url: string) {
  try {
    const response = await axiosInstance.get<VoteTeamResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
