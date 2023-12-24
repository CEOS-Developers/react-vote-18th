import axios from "axios";

const client = axios.create({
  baseURL: process.env.PUBLIC_API_URL,
  withCredentials: true,
});

export default client;
