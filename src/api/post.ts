import { POST } from './axios';
//accessToken 만료 시 refreshToken으로 accessToken 재발급
export const postAuth = async (body: any) => await POST('/auth', body);

export const postLogin = async (body: any) => await POST('/auth/signIn', body);
//회원가입
export const postSignUp = async (body: any) => await POST('/auth/signUp', body);

export const postSendEmail = async (body: any) =>
  await POST('/user/email', body);

export const postCheckEmail = async (body: any) => await POST('/email', body);
//로그인 아이디 중복 체크
export const postCheckId = async (body: any) =>
  await POST('/user/loginId', body);
