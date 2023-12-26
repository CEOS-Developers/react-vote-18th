import { postInstance } from './axios';
//accessToken 만료 시 refreshToken으로 accessToken 재발급
export const postAuth = async (body: any) => await postInstance('/auth', body);
//로그인
export const postLogin = async (body: any) =>
  await postInstance('/auth/signIn', body);
//회원가입
export const postSignUp = async (body: any) =>
  await postInstance('/auth/signUp', body);
// 이메일 valid check, 인증번호 전송
export const postSendEmail = async (body: any) =>
  await postInstance('/user/email', body);
// 인증번호 check
export const postCheckEmail = async (body: any) =>
  await postInstance('/email', body);
//로그인 아이디 중복 체크
export const postCheckId = async (body: any) =>
  await postInstance('/user/loginId', body);
