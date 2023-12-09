import { styled } from "styled-components";

export default function Login() {
  return <LoginContainer>로그인</LoginContainer>;
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;
