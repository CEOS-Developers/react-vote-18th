import client from "./client";

export const signIn = async (userData) => {
  const response = await client.post("/api/auth/signin", {
    username: userData.username,
    password: userData.password,
  });
  return response.data;
};

export const loginUserInfo = async (info) => {
  const response = await client.get("/api/member/info", {
    headers: {
      Authorization: `Bearer ${info.accessToken}`,
    },
  });
  return response.data;
};

export const signUp = async (userData) => {
  const response = await client.post("/api/auth/signup", {
    username: userData.username,
    password: userData.password,
    name: userData.name,
    email: userData.email,
    teamName: userData.teamName,
    part: userData.part,
    isVerified: true,
  });
  return response.data;
};

export const checkUsername = async (username) => {
  const response = await client.post("/api/auth/verify/username", {
    username: username,
  });
  return response.data;
};

export const checkEmail = async (email) => {
  const response = await client.post("/api/auth/verify/email", {
    email: email,
  });
  return response.data;
};
