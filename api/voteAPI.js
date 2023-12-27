import client from "./client";

//front 투표 리스트 get
export const getFrontList = async () => {
  const response = await client.get(`/api/partleader/front`);
  //console.log(response.data);
  return response.data.data;
};

//back 투표 리스트 get
export const getBackList = async () => {
  const response = await client.get(`/api/partleader/back`);
  // console.log(response.data);
  return response.data.data;
};

//team 투표 리스트 get
export const getTeamList = async () => {
  const response = await client.get(`/api/project`);
  // console.log(response.data);
  return response.data.data;
};

//partleader 투표
export const voteLeader = async (info) => {
  const response = await client.post(
    `/api/partleader`,
    { partLeaderId: info.partLeaderId },
    {
      headers: {
        Authorization: `Bearer ${info.accessToken}`,
      },
    },
  );
  console.log(response.data);
  return response.data.data;
};

//partleader 투표
export const voteTeam = async (info) => {
  const response = await client.post(
    `/api/project`,
    { projectId: info.projectId },

    {
      headers: {
        Authorization: `Bearer ${info.accessToken}`,
      },
    },
  );
  //console.log(response.data);
  return response.data.data;
};
