import client from "./client";

//데모데이 투표 결과 get
export const getProjectResult = async () => {
  const response = await client.get(`/api/project/result`);
  // console.log(response.data);
  return response.data.data;
};
