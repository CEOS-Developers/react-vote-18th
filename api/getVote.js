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
