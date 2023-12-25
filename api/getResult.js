import client from "./client";

//프론트 투표 결과 get
export const getFrontResult = async () => {
  const response = await client.get(`/api/partleader/front/result`);
  // console.log(response.data);
  return response.data.data;
};

//백 투표 결과 get
export const getBackResult = async () => {
  const response = await client.get(`/api/partleader/back/result`);
  // console.log(response.data);
  return response.data.data;
};

//데모데이 투표 결과 get
export const getProjectResult = async () => {
  const response = await client.get(`/api/project/result`);
  // console.log(response.data);
  return response.data.data;
};
