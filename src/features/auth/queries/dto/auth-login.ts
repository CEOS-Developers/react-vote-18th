export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  code: number;
  code_desc: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
