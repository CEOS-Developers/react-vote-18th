import { styled } from "styled-components";

export default function Register() {
  return <RegisterContainer>회원가입</RegisterContainer>;
}

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  min-height: 100vh;
  min-width: 375px;
`;
