import client from "./client";

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
