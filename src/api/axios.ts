import axios from 'axios';
// axios 인스턴스 생성
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const GET = async (url: string, params?: any) => {
  try {
    const data = await instance.get(url, params);
    return data;
  } catch (error) {
    return error;
  }
};
export const POST = async (url: string, body: any, params?: any) => {
  try {
    const data = await instance.post(url, body, params);
    return data;
  } catch (error) {
    return error;
  }
};
export const PUT = async (url: string, body: any, params: any) => {
  try {
    const data = await instance.put(url, body, params);
    return data;
  } catch (error) {
    return error;
  }
};

export const PATCH = async (url: string, body: any, params: any) => {
  try {
    const data = await instance.patch(url, body, params);
    return data;
  } catch (error) {
    return error;
  }
};

export const DELETE = async (url: string) => {
  try {
    const data = await instance.delete(url);
    return data;
  } catch (error) {
    return error;
  }
};
